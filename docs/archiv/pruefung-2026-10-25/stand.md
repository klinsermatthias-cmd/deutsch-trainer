# Tiefenprüfung 25.–27.10.2026 – Stand (D-1025-1 bis -29, ohne -16)

Freigabe Matthias 25.10.: alle Codes außer D-1025-16 (Finnisch-Inhalte). Kleine sichere Korrekturen direkt auf `main` (nach `pruefen.mjs`); Datenformat, Sync und große Funktionen (D-1025-2, -3, -18, -19) nur auf Branch, Merge erst nach Matthias' OK. Berichte in diesem Ordner, ohne Privates. Wecker alle 2 h bis 27.10. **25.10. abends: Matthias gibt alles frei** – auch Branch-Arbeiten dürfen nach grüner Prüfung direkt auf `main`.

| Code | Thema | Stand |
|---|---|---|
| 26 | Repos/Historie auf Schlüssel, private Daten | erledigt: sauber (`26-schluessel-privat.md`) |
| 23 | Speicher auf dem Handy (localStorage) | geprüft: Grenze bei intensiver Nutzung nach ~24 Monaten (Chromium); ausgeblendete Übungen im Cache verschlankt (−26 %), bei Platzmangel wird zuerst der Cache geopfert (kein Datenverlust) (`22-23-24-sync-speicher-sw.md`) |
| 22 | Sync/Sicherung mit Störfällen | geprüft: kein Verlust im Normalweg; F1, F2, F6, F7 behoben; F3–F5 selten, ohne Datenverlust (offen) |
| 24 | App-Aktualisierung (Service Worker) | erledigt: robust; Seitenaufruf jetzt `no-cache` (opi-suomea 20d2f28) |
| 1 | CI: Zeitgrenze, Browser-Cache | erledigt: Zeitgrenze 30 min, 3 Installationsversuche (warten auf abgebrochenes apt-get), Browser-Cache (beide Repos) |
| 21 | Code-Review Engine | erledigt: B1–B6 behoben (`21-code-review.md`) |
| 8 | Sprachprüfung aller Übungen | erledigt: 1596 Übungen, 26 Korrekturen (`08-sprachpruefung.md`) |
| 12 | Antwortbewertung testen | erledigt: keine falsche Antwort als richtig; kleiner Satzanfang in Satz-Lücken behoben (opi-suomea, `12-antwortbewertung.md`) |
| 11 | Simulation „Aurora“ | erledigt: Fehler im Coach-Nachbau behoben; Lauf privat, Kurzfassung `11-20-simulation.md` |
| 9 | Theorien prüfen | erledigt: 31 Theorien, 34 Korrekturen, keine falsche Tabelle (`09-theorien.md`) |
| 10 | Finnisch-Kästen weitere Themen | erledigt: 8 Themen neu (`10-finnisch-kaesten.md`) |
| 13 | B1/B2-Abdeckung (Bericht) | erledigt: A1–A2 komplett, Plan deckt B1/B2; 3 kleine Lücken in den Lehrplan übernommen (`13-b1-b2-abdeckung.md`) |
| 14 | Wortschatz-Analyse | erledigt: ≈ 38–45 % der B1-Wortliste in der App; fehlende Wörter als Liste für neue Übungen (`14-wortschatz.md`) |
| 15 | Einstufungstest | erledigt: 169 Aufgaben, keine falsch, 8 kleine Verbesserungen (`15-einstufungstest.md`) |
| 17 | KI-Aufträge prüfen | erledigt: 16 Funde umgesetzt (Engine, `17-ki-auftraege.md`) |
| 18 | Teilpunkte | erledigt: Tabelle/Lückentext/Zuordnen/Dialog/Lesetext anteilig (`18-19-02-funktionen.md`) |
| 19 | „Meine Schwächen“ | erledigt: Karte unter Fortschritt (`18-19-02-funktionen.md`) |
| 20 | Wiederholungsplan simulieren | erledigt: 82 % der Wiederholungen zum richtigen Zeitpunkt (`11-20-simulation.md`) |
| 2 | ausgeblendete Übungen verschlanken | erledigt: im Gerät nur Platzhalter, −26 % Speicher (`18-19-02-funktionen.md`) |
| 3 | uebungen.js teilen | erledigt: bewertung.js ausgelagert (`03-04-25-28-aufraeumen.md`) |
| 25 | Handy-Ansichten (inkl. 5) | erledigt: 390 px ohne Querscrollen, Tabellenspalte verbessert (`03-04-25-28-aufraeumen.md`) |
| 27 | pruefen.mjs untersuchen | erledigt: Schutzprüfung war für Lektionen still aus – behoben, keine Verstöße (`27-pruefen.md`) |
| 4 | CLAUDE.md Opi suomea kürzen | erledigt: 11,4 → 6,2 KB |
| 28 | Doku aufräumen | erledigt: Entscheidungen bis 20.10. archiviert |
| 6 | Formen gegen Wiktionary | erledigt: 142 Verben (DWDS), 304 Nomen (Wiktionary) – keine falsche Form (`06-formen.md`) |
| 7 | Bericht Aurora | wartet auf Bericht |

## Schluss (26.10.2026)
Alle Codes abgearbeitet; offen nur **D-1025-7** (wartet auf Auroras Bericht) und die seltenen Sync-Fälle F3–F5 aus D-1025-22 (ohne Datenverlust). Wichtigste Ergebnisse:
- **Behobene Fehler:** Schutzprüfung „nur hinten anhängen“ lief für Lektionen nicht (pruefen, 1-MB-Puffer) – nachgeprüft, keine Verstöße; Satz-Lücken werteten kleinen Satzanfang als falsch; KI-Urteile ließen Antworten mit fehlendem Inhalt durch; Simulation wertete Schreibaufgaben im Lernschritt falsch; CI-Wiederholung blockierte sich selbst.
- **Inhalte:** 1596 Übungen sprachlich geprüft (26 Korrekturen), 31 Theorien (34 Korrekturen), Einstufungstest (8), 142 Verben und 304 Nomen gegen DWDS/Wiktionary ohne Fehler, 8 neue Finnisch-Kästen.
- **Neu in der App:** Teilpunkte bei Übungen mit mehreren Feldern, Karte „Meine Schwächen“, Rückfrage vor dem Einspielen alter Sicherungen, schnellerer Upload nach dem Zurückkehren, 26 % weniger Gerätespeicher.
- **Für später:** Lernschritte mit vielen Schreibaufgaben auflockern (d01b/5, d01/5, d09/4), Zeitbudget je Runde (Simulation: Ø 41 statt 20 min), fehlende B1-Wörter (`docs/b1-woerter-fehlend.txt`) in neue Übungen.
