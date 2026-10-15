# Prüfliste für Deutsch-Inhalte

**Pflichtlektüre**, bevor Claude Themen, Übungen, Wortlisten oder Einstufungstest-Aufgaben erstellt oder ändert; **vor jedem Push** Zeile für Zeile durchgehen. Jede neue Meldung oder Lehre ergibt eine **neue Zeile** (nur anhängen; Beispiel und Herkunft mit derselben Nummer in `lektionen/pruefliste-beispiele.md`). Quellen und Abrufhinweise: `docs/quellen.md`.

Test: was `node tools/pruefen.mjs` erkennt; „Hand“ = nur Claude prüft (fehlt ein Test → „App-Engine: Funktionen“).

| # | Regel | Test |
|---|---|---|
| 1 | Jeder Satz korrekt und so, wie man ihn in Österreich sagt; jede neue/geänderte Form mit Quelle (`docs/quellen.md`), sonst „ohne Quelle“ melden | Hand |
| 2 | Lücke eindeutig: `h` sagt, was gesucht ist (Zeit, Fall, Person), ohne Bau-Rezept; der Kontext lässt nur eine Form zu | teilweise |
| 3 | Nur Gelerntes abfragen: jedes verlangte Wort steht in einer Wortliste bis zu diesem Thema | Warnung |
| 4 | Keine doppelten Karten über alle Wortlisten (Ausnahmen: `pruef-ausnahmen.json` „doppelt“) | Hinweis |
| 5 | Alle natürlichen Varianten in `a`, auch österreichische | Hand |
| 6 | Theorie-Tabellen höchstens 3 Spalten, Lücken in höchstens einer Spalte | Hinweis |
| 7 | Großschreibung in Musterlösungen korrekt | Hand |
| 8 | Umlaute in Musterlösungen exakt (nur ß/ss gilt als „fast richtig“) | Hand |
| 9 | Satz ordnen: alle richtigen Wortstellungen in `a`, die natürlichste zuerst | ja |
| 10 | Alternativen je Lücke nur, wenn keine falschen Mischformen entstehen; sonst Coach entscheiden lassen | Hand |
| 11 | Klammer-Hinweise auf Karten Englisch → Deutsch verraten die Lösung nicht | App verdeckt |
| 12 | Bestehende Themen: Vokabeln und Übungen nur hinten anhängen; Indizes und IDs nie ändern | ja |
| 13 | Gibt es neben der Duden-Schreibung eine amtliche Markenschreibung, beide in `a`/`s` | Hand |
| 14 | Einstufungstest und Lehrplan gegen ÖIF-Matrix/Rahmencurriculum der Stufe abgleichen | Hand |
| 15 | Genug Übungen: je Thema 30–50 (über etwa 35 lieber teilen), ≥ 6 Formate, Schwerpunkt auf selbst gebildeten Sätzen; je `les`/`sch`/`dlg` ≥ 3 Varianten | teilweise |
| 16 | Verbkarten im Format S-1014-26: Englisch nur Bedeutung; `f` mit 4 Zeilen Präsens/Präteritum/Perfekt/Futur mit Pronomen; mehrere Pronomen bei Vokalwechsel, sein/haben/werden/wissen, Modalverben | Hinweis |
| 17 | Österreichisches Wort: „Germany: …“ auf der Karte und im GLOSS-Eintrag; die bundesdeutsche Form gilt in Lösungen mit, außer das Wort ist vorgegeben | teilweise |
| 18 | Theorie nach S-1013-34 gegliedert (Wichtigstes, Situation, Dialog, Überblick, Teilregeln, ⚠ Watch out, 🇦🇹 Austria); ≥ 3 Regelfragen, 1 `zuo`, 1 `luk`; mehr als 3 Teilregeln → Teilthema `…b` | teilweise |
| 19 | Jede Regel und jedes `x` gegen grammis/lingolia/DWDS prüfen, Vollständigkeit gegen das passende Kapitel; danach Prüfvermerk mit den benutzten Quellen | Hand |
| 20 | **Kein Vorgriff (S-1014-1, D-1014-62):** jede Pflichtantwort eines Schritts (Wort, Endung, Hilfsverb, Wortstellung, Präposition + Fall, Zeitform) ist in den Theorie-Abschnitten bis zu diesem Schritt oder in einem **früheren** Thema der Lernreihenfolge (req) gelehrt. Vor dem Push: Schritte durchrechnen und die Markersuche über alle Themen laufen lassen (als/konnte/musste, Präposition + Dativ, Wechselpräpositionen, Konnektoren späterer Themen, Präteritum). Treffer → Übung `aus: true`, Ersatz hinten anhängen und in den richtigen Schritt; nie in einen Schritt verschieben, der die Regel nicht lehrt. 2–5 Schritte, je ≥ 8 Übungen in ≥ 3 Arten; nur der letzte mischt | teilweise (Indizes, Anzahl, Arten, ausgeblendete) |
| 21 | **Eigene Wörter im Bericht (S-1014-51):** jedes neue eigene Wort mit Quelle prüfen – Artikel + Plural, Bedeutung, Österreich-Hinweis, Verb mit vier Formzeilen (S-1014-26); Fehler mit Korrektur an Matthias melden | Hand |
