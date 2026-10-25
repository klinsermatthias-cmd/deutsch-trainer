# D-1025-21 – Code-Review Engine (opi-suomea)

**Ergebnis (25.10.2026):** B1–B4 behoben in opi-suomea 04999f2 (zentrale Normalisierung `aiBools`/`AI_LISTS` in js/ki.js, `parseJSON` verträgt `[{…}]`, Diagnose mit `esc`, renderProgress schützt alte Berichte; Test in tools/pruefen/befunde.mjs). B5/B6 offen (sehr selten, geringe Folge).


Geprüft: js/lernen.js, js/uebungen.js, js/vokabeln.js, js/ki.js, js/ki-auswertung.js, js/verwaltung.js, js/ansichten.js, js/start.js (Ausschnitte), Grep über alle js/*.js nach `${…}` ohne esc.
Ausgelassen (anderer Helfer): Sync, Sicherungen, Speicher, Service Worker.
Reproduktion: Node-Skript des Prüfers (nicht im Repo), Ausgabe unten zitiert.
Am Repo wurde nichts geändert.

## B1 – Gesamtanalyse ohne Typprüfung gespeichert → Fortschritt-Ansicht stürzt ab
- **Datei:Zeile:** js/ki-auswertung.js:492 (speichert `{...j}`), Absturz in js/verwaltung.js:507 (`r.strengths.map`, `r.tips.map`)
- **Szenario:** KI liefert `"strengths": "…"` oder `"tips": "…"` als String statt Array. Das Audit in aiGlobal prüft nur `weaknesses` (`.join`), `strengths`/`tips` gehen ungeprüft durch und landen in `S.reports[0]`.
- **Folge:** renderProgress wirft TypeError → ganze Ansicht „Fortschritt“ leer/kaputt, inkl. `#globalbox` mit dem Button für eine neue Analyse. Der Bericht wird mitsynchronisiert → Fehler bleibt auf allen Geräten, bis ein neuer Bericht kommt (der Button dazu ist aber in der kaputten Ansicht).
- **Schwere:** mittel (selten, aber blockierend und selbst nicht behebbar).
- **Verifiziert:** ja (repro.js: `FAIL {"strengths":"Wortschatz gut"} -> r.strengths.map is not a function`, ebenso für `tips`).
- **Fix:**
```diff
--- js/ki-auswertung.js
+++ js/ki-auswertung.js
@@ runGlobal
+    const arr = v => Array.isArray(v) ? v.filter(x => typeof x === "string") : typeof v === "string" && v ? [v] : [];
+    j.strengths = arr(j.strengths); j.weaknesses = arr(j.weaknesses); j.tips = arr(j.tips);
     S.reports.unshift({ ...j, d: Date.now(), aid });
--- js/verwaltung.js
+++ js/verwaltung.js
@@ renderProgress (507) – schützt auch bereits gespeicherte Berichte
-  const r = S.reports[0],
+  const r0 = S.reports[0], A = v => Array.isArray(v) ? v : v ? [String(v)] : [],
+    r = r0 && { ...r0, strengths: A(r0.strengths), weaknesses: A(r0.weaknesses), tips: A(r0.tips) },
```

## B2 – KI-Diagnose schreibt Fehlertexte und Modellnamen ungeescaped in innerHTML
- **Datei:Zeile:** js/ki.js:880 (`row`-Helfer), Aufrufe 905, 934, 958 (`aiErrText(e)` enthält bis 80 Zeichen Originalmeldung des Anbieters; `m` = Modellname aus der Google-Modellliste)
- **Szenario:** Anbieter-/Proxy-Fehlermeldung oder Modellname enthält `<…>`.
- **Folge:** HTML-Injektion in der Einstellungen-Diagnose (theoretisch XSS mit Zugriff auf localStorage inkl. KI-Schlüssel). Quelle ist Google/OpenAI bzw. ein Proxy dazwischen → geringe Wahrscheinlichkeit. aiLogHTML (987) macht es richtig mit `esc(aiErrText(x))`.
- **Schwere:** niedrig.
- **Verifiziert:** ja (Codepfad; repro.js zeigt `<small>HTTP 400: <img src=x onerror=alert(1)></small>` unverändert).
- **Fix:**
```diff
-    `<div class="setrow"><span>${ok === null ? "…" : ok ? "✓" : "✗"} ${t}</span><small>${d || ""}</small></div>`;
+    `<div class="setrow"><span>${ok === null ? "…" : ok ? "✓" : "✗"} ${esc(t)}</span><small>${esc(d || "")}</small></div>`;
```
(Prüfen, dass kein Aufrufer bewusst HTML in `d` übergibt – Zeile 920ff ansehen.)

## B3 – Gültiges Lehrer-Feedback geht wegen Audit verloren (rateTopic)
- **Datei:Zeile:** js/ki-auswertung.js ~190–206 (`(j.tips||[]).join("; ")` im Audit von aiSessionReview)
- **Szenario:** KI liefert `tips` als String. `.join` wirft in aiSessionReview → catch in rateTopic → „nicht erreichbar, Standardplan“.
- **Folge:** Kein Absturz, aber KI-Plan und Hinweise werden verworfen, Lernende sieht irreführend „nicht erreichbar“; Token wurden trotzdem verbraucht.
- **Schwere:** niedrig. **Verifiziert:** ja (Codepfad).
- **Fix:** dieselbe `arr()`-Normalisierung vor dem Audit (am besten als gemeinsamer Helfer in ki.js, z. B. in `aiBools`/nach `parseJSON`).

## B4 – parseJSON verträgt kein JSON-Array auf oberster Ebene
- **Datei:Zeile:** js/ki.js:302–305
- **Szenario:** Modell antwortet `[{…},{…}]` statt `{…}`. `slice(indexOf("{"), lastIndexOf("}")+1)` ergibt `{…},{…}` → SyntaxError → aiJSON macht einen zweiten, kostenpflichtigen Aufruf; scheitert der auch, Fehlermeldung.
- **Folge:** doppelter Tokenverbrauch / „KI nicht erreichbar“ bei an sich brauchbarer Antwort.
- **Schwere:** niedrig. **Verifiziert:** ja (repro.js: `Unexpected non-whitespace character after JSON at position 7`).
- **Fix (minimal):**
```diff
 function parseJSON(txt) {
   const c = txt.replace(/```json|```/g, "").trim();
-  return aiBools(JSON.parse(c.slice(c.indexOf("{"), c.lastIndexOf("}") + 1)));
+  let v;
+  try { v = JSON.parse(c); } catch { v = JSON.parse(c.slice(c.indexOf("{"), c.lastIndexOf("}") + 1)); }
+  if (Array.isArray(v) && v.length === 1 && v[0] && typeof v[0] === "object") v = v[0];
+  return aiBools(v);
 }
```

## B5 – „Letzte Bewertung ändern“ nach Ende einer Vokabelrunde zählt den Tag doppelt
- **Datei:Zeile:** js/vokabeln.js:633 (undoCard holt VOCAB_DONE zurück) + 660–662 (finishVocab → bumpStreak → logDay, js/ueberblick.js:8)
- **Szenario:** Runde fertig → „↶ Letzte Bewertung ändern“ → neu bewerten → finishVocab läuft erneut.
- **Folge:** `S.days[heute]` wird nochmals +1 gezählt (Aktivitätsstatistik leicht überhöht). Streak bleibt korrekt (idempotent pro Tag).
- **Schwere:** sehr niedrig (kosmetisch). **Verifiziert:** ja (Codepfad, nicht im Browser).
- **Fix:** in finishVocab `if (!se.counted) { se.counted = 1; bumpStreak(); }`.

## B6 – rateTopic-Fehlerzweig zeigt evtl. veraltetes Datum
- **Datei:Zeile:** js/uebungen.js:1814 (`s.due`), während der Plan in `cur = S.topics[se.id] || s` geschrieben wird.
- **Folge:** Nur wenn während des KI-Aufrufs ein Sync `S.topics` ersetzt hat: angezeigtes Datum ≠ gespeichertes. Rein Anzeige.
- **Schwere:** sehr niedrig. **Verifiziert:** nein (nur Codelesung, Sync-Timing nicht nachgestellt).
- **Fix:** `const t = S.topics[se.id] || s;` und `t.due` in Zeile 1780/1814 anzeigen.

## Geprüft ohne Befund
- SM-2 (`sm2Next`, MAX_IV 365, RQ-Mapping), topicCap/topicIvMax/topicIv, TOPIC_GROW, blockCap.
- Freischaltung: prereqMet (`last >= 0.8` für alle req), refreshUnlocks, startSession verweigert gesperrte Themen.
- Doppelte Wertung: `se.rated` in rateTopic, openSession bei idx ≥ Länge, freie Modi (isFree) enden direkt.
- Race textCheck: `if (SESSION !== se) return;` nach await, `se.locked` gegen Doppelprüfung.
- Enter-Handler nach finishTopic (nur wenn `#nextbtn` existiert).
- lateDays über Sommer-/Winterzeit (startOfDay-Differenz, gerundet).
- undoCard/leechTick, Rücknahme der Tageszähler.
- XSS: esc() robust für Nicht-Strings; mdLite escaped zuerst; sanitizeHTML als Whitelist; alle `${j.…}`-Treffer in einstufung.js, formate.js, ki-ueben.js, ki-auswertung.js gehen in Text/Audit, nicht in HTML; aiLogHTML escaped.
- Schlüssel: Gemini-Key im Header `x-goog-api-key`, kein `?key=` in URLs (grep über js/).
- ansichten.js:350 `rep.tips[0]` mit String → nur erstes Zeichen, kein Absturz (durch B1-Fix mitbehoben).

## Wartbarkeit (nur das Wichtigste)
- KI-JSON wird an vielen Stellen einzeln und unterschiedlich gründlich geprüft. Ein gemeinsamer Normalisierer (Arrays/Strings/Bools je Schema) direkt in aiJSON würde B1, B3 und künftige Fälle zentral abfangen.
