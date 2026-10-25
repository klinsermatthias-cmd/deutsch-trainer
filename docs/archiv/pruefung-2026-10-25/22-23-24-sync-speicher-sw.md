# Tiefenprüfung D-1025-22 / -23 / -24 (Sync, Speicher, Service Worker)

**Ergebnis und eigene Nachprüfung (25.10.2026):**
- F1 im Code bestätigt (lokale Runde gewann immer). Fix auf Branch `d1025-sync-runde` in opi-suomea (706d5b6): bei derselben Runde gilt die mit mehr beantworteten Aufgaben (`results.length`, nicht `idx`, weil `idx` beim Rückgängig sinkt). Test schlägt ohne Fix fehl, mit Fix grün. Merge erst nach OK.
- Teil 24: `cache:"no-cache"` beim Seitenaufruf direkt in opi-suomea main (20d2f28). Offline-Start mit Playwright vorher/nachher gleich.
- Teil 23: Lektionen-Cache im localStorage bestätigt (`js/daten.js:26–37`, lektionen.json hier 1,40 MB). Beide Apps liegen auf derselben github.io-Herkunft und teilen den Gerätespeicher. Auslagern ist eine größere Änderung (Start wird asynchron) → eigener Branch, noch nicht gebaut.
- F2–F7 noch nicht gebaut (selten bzw. gering). iOS-Grenze bleibt „ohne Quelle“.

Stand 25.10.2026. Geprüft: Engine-Quelle opi-suomea (js/daten.js, js/verwaltung.js, js/start.js, sw.js), ausgeführt gegen deutsch-trainer in Playwright-Chromium mit einer leeren Testkonfiguration (`{setupDone:true}`).
Es wurde **nichts in den Repos geändert** und es wurden keine privaten Daten verwendet.
Skript zum Nachstellen: Node/Playwright-Skript des Prüfers (nicht im Repo).

**Ergebnis kurz:** Es gibt keinen Fall, in dem der Fortschritt dauerhaft und ohne Rettungskopie verloren geht, solange die CAS-Prüfung beim Hochladen funktioniert. Es gibt aber:
- zwei nachgestellte Merge-Schwächen (F1, F4);
- ein Wettlaufrisiko im Ersatzpfad NO_CAS (F3);
- ein Speicherwachstum, das auf iOS nach etwa 12 Monaten und auf Chromium nach etwa 24 Monaten bei intensiver Nutzung an die Grenze stößt (Teil 23).

---

## Teil 22 – Sync und Sicherungen

### F1 – Pausierte Runde: das lokale Gerät gewinnt immer, auch wenn es den älteren Stand hat (nachgestellt)
- **Datei:Zeile:** `js/daten.js:1038–1039`
  ```js
  const open = a => (a && !M.activeDone.includes(a.d) ? a : null);
  M.active = open(L.active) || open(R.active);
  ```
- **Szenario:**
  1. Aurora startet eine Runde am PC und pausiert bei Aufgabe 5. Der Sync läuft.
  2. Am Handy setzt sie dieselbe Runde fort, bis Aufgabe 12, und pausiert. Der Sync läuft.
  3. Am PC hat sie inzwischen offline etwas geändert, zum Beispiel ein Wort gemerkt. Der PC hat also ungesyncte Änderungen.
  4. Der PC ruft pullCloud auf. Weil es lokale Änderungen gibt, wird `mergeStates(L=PC, R=Cloud)` ausgeführt, und `M.active` ist der Stand des PCs mit idx 5.
- **Messung:** `{"lokal":5,"cloud":12,"ergebnis":5}`
- **Folge:**
  - Die Aufgaben 6–12 kommen noch einmal.
  - exLog und Karten werden dafür ein zweites Mal gezählt (Doppelzählung).
  - Die Antworten vom Handy für diese Runde gehen im Rundenergebnis verloren.
  - Haben die zwei Geräte verschiedene pausierte Runden, wird die Runde des anderen Geräts ohne Hinweis verworfen.
- **Schwere:** niedrig bis mittel. Das kommt im Alltag vor (PC/Handy), aber der Lernstand selbst bleibt erhalten.
- **Fix:**
  ```diff
  -  M.active = open(L.active) || open(R.active);
  +  const la = open(L.active), ra = open(R.active);
  +  M.active = la && ra && la.d === ra.d ? ((ra.idx || 0) > (la.idx || 0) ? ra : la) : la || ra;
  ```

### F2 – keepalive wird praktisch nie verwendet (Analyse)
- **Datei:Zeile:** `js/daten.js:716`, außerdem 811
  ```js
  const ka = !!keepalive && body.length < 60000;
  ```
- **Szenario:**
  1. Der Stand ist schon heute etwa 0,45 MB groß und wächst bis etwa 2 MB.
  2. Beim Schließen der App wird deshalb ein normaler fetch gesendet.
  3. iOS oder Android beendet die Seite, bevor der Upload fertig ist.
- **Folge:**
  - Es geht nichts verloren, weil DIRTY lokal gesetzt bleibt und der nächste Start nachlädt.
  - Das andere Gerät sieht den Stand aber erst später. Das ist die Hauptursache dafür, dass F1 und F4 eintreten.
- **Schwere:** niedrig, verstärkt aber F1 und F4.
- **Fix:** In `pagehide`/`visibilitychange` (start.js) einen kleinen Merker setzen, damit beim nächsten Sichtbarwerden **sofort** `pushCloud()` läuft. Zusätzlich beim Pausieren einer Runde sofort pushen, nicht erst gedrosselt:
  ```diff
  +// beim Pausieren einer Runde:
  +  save(); pushCloud().catch(() => {});
  ```

### F3 – Ersatzpfad NO_CAS: Wettlauf zwischen Lesen, Zusammenführen und Schreiben (Analyse, nicht nachgestellt)
- **Datei:Zeile:** `js/daten.js:728/780` (Schalter NO_CAS), `805–812` (POST mit `resolution=merge-duplicates`)
- **Szenario:**
  1. CAS ist nicht verfügbar, zum Beispiel weil der PATCH-Filter einen Fehler liefert und NO_CAS gesetzt wird.
  2. Gerät A liest den Cloud-Stand (Version X).
  3. Gerät B lädt seinen Stand hoch (Version Y).
  4. A schreibt `merge(A, X)` per Upsert und überschreibt damit Y.
  5. B sieht später `syncedAt === updated`, hält sich für aktuell und übernimmt beim nächsten neueren Remote-Stand alles von dort. Die Änderung von B ist dann weg. Rettung ist nur über „-vor-sync“ (falls geschrieben) oder die Cloud-Snapshots möglich.
- **Folge:** Fortschritt kann dauerhaft verloren gehen, aber nur ohne CAS.
- **Schwere:** mittel, wenig wahrscheinlich.
- **Fix:** Auch im NO_CAS-Pfad nach dem Upsert noch einmal lesen und prüfen:
  ```diff
  +  const chk = await fetchRemote();
  +  if (chk && pgMs(chk.updated_at) !== upd) { CFG.remoteAt = null; DIRTY = true; saveCfg(); return pullCloud(); }
  ```
  Alternativ NO_CAS nie dauerhaft setzen, sondern nur für einen Versuch.

### F4 – Zähler bei parallelem Offline-Lernen: Maximum statt Summe (nachgestellt)
- **Datei:Zeile:** `js/daten.js:944ff.` (mergeStates: stats, days, exLog n/w)
- **Szenario:** Gemeinsamer Ausgangsstand, danach lernen beide Geräte offline.
  - Gerät A: +2 Runden, +30 Wiederholungen, +2 am Tag.
  - Gerät B: +3 Runden, +40 Wiederholungen, +3 am Tag.
- **Messung:**

  | Zähler | Ergebnis | Soll |
  |---|---|---|
  | sessions | 13 | 15 |
  | reviews | 140 | 170 |
  | Tag | 5 | 7 |
  | exLog n | 4 | 5 |

- **Folge:** Es wird zu wenig gezählt, nicht doppelt. Das betrifft Statistik und Serien. Die Lernkarten selbst sind korrekt, weil dort der neueste Stand gewinnt.
- **Schwere:** niedrig.
- **Fix:** Die Zähler je Gerät speichern, zum Beispiel `stats.byDev[devId]`, und die Summe anzeigen. Das ist ein G-Counter. Minimal geht es auch so:
  ```diff
  -  M.stats.reviews = Math.max(L.stats.reviews, R.stats.reviews);
  +  M.stats.reviews = (L.statsDev?.[L.dev]?.reviews ?? 0) + ... // Summe über statsDev
  ```
  Das braucht ein Feld in migrate(). Lohnt sich nur, wenn die Statistik wichtig ist.

### F5 – Zwei Tabs gleichzeitig (Analyse)
- **Datei:Zeile:** `js/daten.js:1410ff.` (storage-Event)
- **Szenario:**
  1. Zwei Tabs speichern innerhalb derselben Millisekunde oder mit einem nicht neueren `updated`.
  2. Das Ereignis wird ignoriert.
  3. Der zweite Tab überschreibt beim nächsten save() den ersten.
  4. Während einer Runde wird zusätzlich zusammengeführt.
- **Folge:** einzelne Antworten gehen verloren. Das ist selten, weil Aurora kaum zwei Tabs offen hat.
- **Schwere:** niedrig.
- **Fix:** Bei gleichem `updated` immer zusammenführen, nicht ignorieren:
  ```diff
  -  if (!(o.updated > S.updated)) return;
  +  if (o.updated < S.updated) return;
  ```

### F6 – firstLink verwendet `Date.parse` statt `pgMs` (Analyse)
- **Datei:Zeile:** `js/daten.js:1288ff.`
- **Folge:** Postgres-Zeitstempel mit Mikrosekunden oder `+00` werden anders geparst als im restlichen Code. Das kann einmal einen unnötigen Merge oder Pull auslösen. Es geht nichts verloren.
- **Schwere:** niedrig.
- **Fix:** `Date.parse(row.updated_at)` → `pgMs(row.updated_at)`

### F7 – Sicherung importieren ersetzt statt zusammenzuführen (Analyse)
- **Datei:Zeile:** `js/daten.js:915` (replaceState), `js/verwaltung.js:121`
- **Szenario:** Aurora importiert eine alte Sicherungsdatei. Alles, was danach gelernt wurde, ist weg. Danach wird der Stand mit restoreWins in die Cloud geschoben und auch dort ersetzt.
- **Folge:** Rückholbar nur über „-vor-import“ (pruneCopies hält die Kopie etwa 7 Tage) oder die Cloud-Snapshots. Das ist so gewollt, aber riskant bei einer Fehlbedienung.
- **Schwere:** niedrig.
- **Fix:**
  - Vor dem Import das Datum der Sicherung und den Hinweis „ersetzt N Tage Fortschritt“ anzeigen.
  - „-vor-import“ wie „-vor-loeschen“ dauerhaft behalten:
  ```diff
  -  if (name === "-vor-loeschen") continue;
  +  if (name === "-vor-loeschen" || name === "-vor-import") continue;
  ```

### Sonst geprüft, ohne Befund
- **Uhrzeitunterschiede:**
  - Die CAS-Prüfung beruht auf dem Zeitstempel des Servers (`updated_at` gte/lt).
  - Eine falsch gehende Geräteuhr kann nur bei Themen und Karten über den Zeitstempel „gewinnen“. Das ist ein geringes Risiko.
- **Alte Gerätestände:** migrate()/defaultState() ergänzen fehlende Felder. Ein alter Stand mit Fortschritt wird bei firstLink zusammengeführt, nicht ersetzt.
- **Abgebrochener Upload:** DIRTY bleibt gesetzt, beim nächsten Start wird erneut hochgeladen.
- **Aufräumen alter Runden:** Abgelaufene Runden werden in `daten.js:1220` verworfen. Das ist beabsichtigt.

---

## Teil 23 – Speicher

### Wo die Daten liegen
| Ort | Inhalt | Wächst? |
|---|---|---|
| localStorage `KEY` (`APP.id-v1`) | gesamter Lernstand | ja (siehe unten) |
| `KEY-vor-sync/-vor-import/-vor-wiederherstellung/-vor-reset` | Sicherheitskopien; pruneCopies (daten.js:515): die neueste bleibt, ältere 7 Tage | × Stand |
| `KEY-vor-loeschen` | dauerhaft | × Stand |
| `APP.id-config` | Geräteeinstellungen, nicht gesynct | klein |
| `REPO_KEY` (`APP.id-lektionen`) | Lektionen-Cache | **1.091.294 Zeichen** |
| IndexedDB | nur der Datei-Handle (Dateisicherung) | klein |
| Cache API (SW) | App-Dateien, lektionen.json | mittel, nicht im localStorage |
| Supabase `snapshots` | Tagesstände in der Cloud | serverseitig |

Opi suomea und Deutsch-Trainer haben **denselben Origin** (github.io) und teilen sich damit **ein** localStorage-Kontingent.

### Wachstum (Modell mit den echten TOPICS: 31 Themen, 556 Wörter, 2745 Übungen)
Der leere Stand hat 4.749 Zeichen.
- **mäßig** = pro Tag 1 eigenes Wort, 2 Glossar-Einträge, 3 generierte Übungen
- **intensiv** = pro Tag 3 / 5 / 10

| Variante | 6 Monate | 12 Monate | 24 Monate |
|---|---|---|---|
| mäßig | 452.800 | 746.700 | 1.025.252 |
| intensiv | 714.429 | 1.272.414 | 2.079.233 |

Größte Teile nach 24 Monaten intensiv:
- cards 668k
- exLog 417k
- gloss 407k
- own 302k
- aiAudit 135k

Ohne Obergrenze wachsen: `cards` (2 je Wort und eigenes Wort), `exLog` (inklusive `g:`-Schlüssel je generierter Übung), `own`, `gloss` (Cache) und `genReview` (ungeprüfte Sätze bleiben).

**Gesamtbedarf** ≈ Stand × 2–3 (Hauptstand, „-vor-sync“, eventuell „-vor-loeschen“/„-vor-import“) + 1,09 M Lektionen-Cache + die zweite App.

Beispiel 24 Monate intensiv: 2 × 2,08 + 1,09 ≈ **5,25 M Zeichen**.
- **Chromium:** Grenze gemessen bei etwa 5,1 M Zeichen (QuotaExceededError). Die Grenze ist damit überschritten.
- **Safari/iOS:** zählt möglicherweise UTF-16-Bytes, das entspräche etwa 2,5 M Zeichen. Das ist **ohne Quelle** und nicht gemessen. Trifft es zu, ist die Grenze schon nach etwa 12 Monaten intensiver Nutzung erreicht, mit beiden Apps früher.

### Verhalten bei QuotaExceededError (nachgestellt)
- **Datei:Zeile:** `js/daten.js:447` (writeLocal), `462` (freeRoom), `481` (STORE_WARN = 3e6), `501` (safeCopy)
- **Test:**
  1. Den Speicher bis zum QuotaExceededError füllen.
  2. Eine Karte ändern und 300k Zusatzlast anhängen.
  3. save() aufrufen.
- **Ergebnis:**
  - freeRoom hat `REPO_KEY` gelöscht.
  - Der Stand **wurde gespeichert**, die Testkarte ist vorhanden.
  - Es geht kein Fortschritt verloren.
- **Nebenwirkungen:**
  - Der Lektionen-Cache wird bei jedem Start neu geschrieben und wieder verdrängt. Das kostet Zeit; offline gibt es nur noch die Lektionen aus dem SW-Cache.
  - `safeCopy` scheitert danach **still** (nur appErrLog). Die Sicherheitskopien vor Sync oder Import fehlen dann, ohne dass Aurora es merkt.
  - Die Reihenfolge in freeRoom löscht zum Schluss auch „-vor-loeschen“. Das ist richtig, denn der Hauptstand geht vor.
- **Schwere:** mittel, langfristig. Heute unkritisch, nach 12–24 Monaten real.
- **Fixes, nach Nutzen geordnet:**
  1. Den Lektionen-Cache aus dem localStorage nehmen, denn der SW-Cache hat lektionen.json schon. Wenn er bleibt, in IndexedDB speichern. Das spart sofort 1,09 M.
     ```diff
     -  try { localStorage.setItem(REPO_KEY, txt); } catch (e) {}
     +  idbSet("lektionen", txt).catch(() => {});
     ```
  2. `gloss` begrenzen, zum Beispiel auf 1.500 Einträge, und nach der letzten Nutzung kürzen:
     ```diff
     +  const gk = Object.keys(S.gloss); if (gk.length > 1500) gk.sort((a,b)=>(S.gloss[a].u||0)-(S.gloss[b].u||0)).slice(0, gk.length-1500).forEach(k => delete S.gloss[k]);
     ```
  3. `g:`-Schlüssel in exLog, die älter als 90 Tage sind und deren Satz nicht mehr in genReview steht, löschen.
  4. Wenn safeCopy scheitert, einmal einen Toast oder einen Diagnosehinweis zeigen. Bei Platzmangel „-vor-sync“ als Erstes löschen.
  5. STORE_WARN auf iOS auf etwa 1,5e6 senken. Die Warnung soll außerdem die Belegung über alle Schlüssel und beide Apps zählen, nicht nur den eigenen Stand.

---

## Teil 24 – Service Worker und Updates

### Was robust ist
- Der Workflow (`pruefen-und-veroeffentlichen.yml:62–67`) hängt `?v=<sha>` an JS und CSS und schreibt `version.json`. Damit kommt neuer Code mit eindeutiger URL.
- sw.js:
  - Netzwerk zuerst, nach 6 s Cache.
  - Bei 404/5xx die Kopie aus dem Cache.
  - `skipWaiting` und `clients.claim`.
  - `syncVersion` lädt zuerst alle `?v=`-Dateien der neuen index.html und löscht erst danach die alten (sw.js:56, 72–75).
- `checkVersion` (start.js:630) fragt `version.json` mit no-store ab: beim Start, alle 15 Minuten und beim Sichtbarwerden. Dann erscheint ein Banner.
- `rescue` (start.js ca. 660) lädt einmal neu, wenn alte und neue Dateien gemischt sind.
- **Alter JS-Code trifft neue Daten:** `validTopic`/`validEx`/`packUpdateOk` (verwaltung.js:182–198, 284) verwerfen ein Thema mit unbekanntem Format. Die vorige Version bleibt, und ein Toast erscheint. Es geht kein Fortschritt verloren, und die App stürzt nicht ab.
- `loadRepoLessons` (verwaltung.js:234) verwendet `cache:"no-store"`.

### Restrisiken
| # | Datei:Zeile | Szenario | Folge | Schwere | Fix |
|---|---|---|---|---|---|
| S1 | sw.js:69 (`fetch(r)` bei der Navigation) | Nach einem Push oder „Jetzt neu laden“ liefert der HTTP-Cache (GitHub Pages max-age 600, nicht gemessen) bis zu etwa 10 Minuten die alte index.html, während lektionen.json schon neu ist. | Kurz alter JS-Code mit neuen Lektionen; neue Formate werden verworfen, der Toast erscheint | niedrig | `const net = fetch(r.mode === "navigate" ? new Request(r, { cache: "no-cache" }) : r)` |
| S2 | verwaltung.js:284 | Ursache ist nur alter JS-Code, der Toast sagt aber „fehlerhaft – bitte Claude Bescheid geben“. | Verwirrung, Fehlalarm an Matthias | niedrig | In lektionen.json ein Feld `fmt` (Formatversion) führen; ist `fmt` größer als `ENGINE_FMT`, den Hinweis „Neue App-Version – bitte neu laden“ zeigen |
| S3 | start.js:713 | Lektionen werden nur beim Start geladen. Ist die App lange offen, erscheinen neue Themen erst nach dem Banner oder einem Neuladen. | Verzögerung, keine Daten weg | niedrig | In `checkVersion` bei neuer Version zusätzlich `loadRepoLessons()` aufrufen |
| S4 | Ablauf | Inhalte in einem neuen Format werden nach deutsch-trainer gepusht, bevor die Engine übernommen ist. | Der alte Code verwirft das Thema bis zur nächsten Engine-Übernahme | niedrig | Ablauf: zuerst Engine pushen und übernehmen, dann Inhalte. Zusätzlich könnte `pruefen.mjs` neue `t:`-Formate gegen die Engine-Version prüfen |

---

## Gesamtbewertung
- **Kein Datenverlust nachgewiesen** im normalen CAS-Pfad. Jede ersetzende Aktion legt eine Rettungskopie an, und bei vollem Speicher wird der Stand vor allem anderen gerettet.
- **Empfohlene Reihenfolge der Fixes:**
  1. F1 (Runde mit größerem idx), wenig Code.
  2. Lektionen-Cache aus dem localStorage nehmen (Teil 23, Fix 1).
  3. gloss und `g:` begrenzen.
  4. F3 (NO_CAS-Nachprüfung).
  5. S1/S2.
  6. F4 nur bei Bedarf.
