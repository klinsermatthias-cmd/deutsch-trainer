# Ablauf: Thema bauen oder ändern

Vorher lesen: `lektionen/pruefliste.md`, `lektionen/README.md`, Plan in `docs/lehrplan.md`. Formate nur bei Bedarf: `docs/uebungsformate.md`. Dieser Chat entwirft, prüft, hängt an und pusht nach Matthias' OK (D-1019-72).

## Aufbau eines Themas
- **Situation + Grammatik:** eine Alltagssituation in Österreich und der Grammatik-Baustein, den sie braucht; höchstens 3 neue Teilregeln (Teilregel = eine eigene Bildungsregel; Überblick, Vergleich, Strategie und Wortschatz zählen nicht, D-1019-70), sonst teilen (`aus: true` im alten Thema, Teilthema `…b`).
- **Theorie (Englisch, S-1013-34):** „The most important things“ (Liste) → 1. Situation (Tabelle) → 2. Dialogue (Zielformen fett, darunter „In the dialogue: …“) → 3. Overview (ganzes System als Tabelle) → je Teilregel eine nummerierte `<h3>`-Überschrift mit kurzer Liste und Beispieltabelle → „⚠ Watch out“ (✗/✓ mit Auroras typischen Fehlern) → „🇦🇹 Austria“ → Verbformen. Keine Klammer-Einschübe, ein Gedanke je Listenpunkt; vollständige Tabellen (≤ 3 Spalten).
- **Theorie verständlich schreiben (D-1020-2, Matthias 20.10.: vollständig vor kurz, keine Höchstgrenzen):**
  1. „The most important things“ = nur die Kernregeln, jede mit einem Beispiel; keine Verweise auf andere Themen.
  2. Fachwörter (Partizip II, stem, case, subordinate clause …) beim ersten Auftreten in einem Kasten „Words used here“ einfach erklären.
  3. Eine Regel = ein Abschnitt: Regel in einem Satz → Tabelle → Beispiele. Wo man zwischen Formen wählt, ein Entscheidungsweg „Ask yourself“ (Vorbild d03).
  4. Nichts streichen, sondern umstellen: Nebenwissen und Vorschau auf spätere Themen ans Ende („Good to know“ / „Later – topic dXX“).
  5. Abschnitte in der Reihenfolge der Lernschritte.
  6. Beispiele nur mit Gelerntem; Ausnahmen kennzeichnen („you'll learn this in …“).
  7. Vollständig: mit lingolia/grammis/Duden vergleichen, was zum Gebiet gehört; Fehlendes mit Quelle ergänzen. Vorlagen: `docs/theorie-entwuerfe.md`.
- **Wortliste:** beide Richtungen; ab d10 je Thema 5–10 Karten Grundwortschatz aus dem Alltagsfeld (Goethe/ÖSD-B1-Liste darf Quelle sein, kommt aber nie ins Repo). Österreichische Wörter mit „Germany: …“.
- **Wortkarten (D-1020-29, ersetzt S-1014-26):** Englisch nur die Bedeutung. Deutsch: Verben `{"k": "regelmäßig|unregelmäßig[ · trennbar][ · reflexiv][ · Modalverb]", "s": "fährt · fuhr · ist gefahren", "g": "+ Dativ: …" (nur wo nötig), "f": ["Präsens: ich … · du … · er/sie/es … · wir … · ihr … · sie/Sie …", "Präteritum: …", "Perfekt: …"]}` – alle Formen aus der DWDS-Konjugationstabelle, kein Futur; Nomen mit Artikel und Plural („der Markt, die Märkte“), sonst `s` „ohne Plural“ / „meist ohne Plural“, n-Nomen `k: "n-Nomen"`, `g: "den Kunden · dem Kunden"`; Adjektive `{"wa": "Adjektiv", "k": "regelmäßig|unregelmäßig|ohne Steigerung", "s": "älter · am ältesten"}`; alle anderen Karten `wa` (Adverb, Präposition, Konjunktion, Pronomen, Fragewort, Wendung). Österreich: „ist gesessen (Germany: hat gesessen)“.
  `Präsens: ich fahre · du fährst · er/sie/es fährt` · `Präteritum: er/sie/es fuhr` · `Perfekt: er/sie/es ist gefahren` · `Futur: er/sie/es wird fahren`.
  Alle drei Pronomen im Präsens bei Vokalwechsel und bei sein/haben/werden/wissen/Modalverben, im Präteritum bei Modalverben, sein, haben. Trennbare und reflexive Verben ausgeschrieben; österreichisch „ist gesessen (Germany: hat gesessen)“.
- **Übungen:** etwa 50, mindestens 40, je Lernschritt ≥ 8 (D-1019-67); Mix: ≥ 40 % Satzbildung, ≤ 30 % `gap`, ≤ 6 `mc` mit gleich langen Optionen, `x` bei typischen Fallen (D-1019-68); Wortpakete: 20–30 Wörter, etwa 30 Übungen, jedes Wort in einer Übung; ≥ 6 Formate, Schwerpunkt `tr`, `gap`, `ord`, `sch`, `dlg`; je ≥ 3 `les`, `sch`, `dlg`; 2–4 Regelfragen (`mc` mit `x`, zählen zu den ≤ 6 `mc`), 1 `zuo`, 1 `luk`; `h` nur, wo das Format missverständlich ist (sagt, was gesucht ist, nicht wie man es baut). Etwa 70 % zu Auroras Schwächen, 30 % Kontrast und Mischung.
- **Lernschritte (`steps`, S-1014-1):** 2–5 Schritte `{t, sec, ex}`; `sec` = Theorie-Abschnitte (`<h3>`-Teile) des Schritts; je ≥ 8 Übungen in ≥ 3 Arten; nur der letzte („Alles zusammen“) mischt. **Kein Vorgriff** (Prüfliste 20): jede Pflichtantwort ist in den Abschnitten bis zu diesem Schritt oder in einem früheren Thema gelehrt. Ausgeblendete Übungen stehen in keinem Schritt.
- **`req` (D-1019-59):** alle Themen, deren Stoff das Thema verwendet, auch indirekt (Kette nachrechnen), in Lernreihenfolge (die App sperrt bereits freie Themen nicht wieder).

## Etappe (je Push)
1. `git pull --rebase origin main`
2. Bauen bzw. anhängen; jede Form mit Quelle (`node tools/quellen.mjs --sprache de <wort>`, Duden, DWDS; Regeln: grammis/lingolia; `docs/quellen.md`).
3. `GLOSS_EXTRA` in `js/inhalte.js` für neue Wörter (nur anhängen).
4. Prüfliste Zeile für Zeile, Markersuche auf Vorgriffe, `node tools/pruefen.mjs` → „Alles in Ordnung“.
5. Prüfvermerk: `node tools/thema.mjs --vermerk <ids mit Leerzeichen> --quellen "…" --chat D`
6. Nach Matthias' OK: Commit auf Deutsch, push, `node tools/ci-status.mjs --warten`.
7. 3–4 Zeilen in `docs/entscheidungen.md`; Plan in `docs/lehrplan.md` nachziehen.
8. Meldung an Matthias: was mit welcher Quelle geprüft wurde, was „ohne Quelle“ ist, offene Punkte.

## Bestehende Themen ändern
Nur hinten anhängen. Falsche Übung → `aus: true`, aus allen `steps` nehmen, Ersatz hinten anhängen und in den passenden Schritt eintragen. Indizes und IDs bleiben.
