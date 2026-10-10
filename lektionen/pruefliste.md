# Prüfliste für Deutsch-Inhalte

**Pflichtlektüre**, bevor Claude Themen, Übungen, Wortlisten oder Einstufungstest-Aufgaben erstellt oder ändert. **Vor jedem Push** wird sie Zeile für Zeile durchgegangen. Jede neue Meldung (Bericht, „KI lag falsch?“, „Noch nicht gelernt?“, Hinweis von Matthias oder aus einem anderen Chat) ergibt eine **neue Zeile** – nur anhängen.

Automatischer Test: was `node tools/pruefen.mjs` schon erkennt; „– (von Hand)“ = nur durch Claude prüfbar (fehlt ein Test, an „App-Engine: Funktionen“ melden).

| # | Prüfen | Beispiel | Herkunft | Automatischer Test |
|---|---|---|---|---|
| 1 | **Deutsch natürlich und korrekt, jede Form mit Quelle:** jeder Satz grammatisch richtig und so, wie man ihn in Österreich wirklich sagt; jede neue oder geänderte Form in Duden, DWDS oder Wiktionary nachschlagen (österreichische Wörter: Duden-Vermerk „österreichisch“). In der Meldung an Matthias Quelle nennen, sonst „ohne Quelle“ | „Ich mache ein Foto“ statt „Ich nehme ein Foto“ (Lehnübersetzung aus dem Englischen) | D-1009-5, D-1009-7, E-1009-26 | – (von Hand) |
| 2 | **Lücke eindeutig:** `h` sagt, was gesucht ist (Zeit, Fall, Person …), ohne Bau-Rezept; Satzkontext macht nur eine Form richtig. Die KI akzeptiert bei Lücken nur die Form der Musterlösung | „kirjasto ___“ ohne Kontext → jeder Fall passt (Opi suomea) | F-1009-10, E-1009-12/-14 | teilweise (Lücke mitten im Wort braucht `h`) |
| 3 | **Nichts Ungelerntes abfragen:** jedes verlangte Wort steht in einer Wortliste bis zu diesem Thema, jede Regel in der Theorie | Übung verlangt „Kaution“, das in keiner Wortliste steht | F-1009-10, E-1009-3 | ja, als Warnung (neue Wörter in Musterlösungen) |
| 4 | **Keine doppelten Karten:** ein Wort nur einmal in allen Wortlisten (außer bewusst mit anderer Bedeutung) | „der Termin“ in d01 und d03 | F-1009-10 | – (von Hand) |
| 5 | **Alle natürlichen Varianten in `a`**, auch österreichische und gleichwertige | „am/beim Bahnhof“, „das/der Gehalt“, „gern/gerne“ | F-1009-10, D-1007-1, D-1007-2 | – (von Hand) |
| 6 | **Theorie-Tabellen höchstens 3 Spalten**, Lücken in höchstens einer Spalte | Konjugationstabelle: Person · Präsens · Perfekt | F-1009-10 | teilweise (mehrere Lückenspalten) |
| 7 | **Großschreibung in Musterlösungen korrekt** (sie zählt, nur der erste Buchstabe am Satzanfang ist frei) | „die Entscheidung“, „Können Sie …“ | E-1008-9 | – (von Hand) |
| 8 | **Kein ä/a-Spielraum:** Umlaute in Musterlösungen exakt; nur ß/ss gilt als „fast richtig“ | „fährt“, nicht „fahrt“ | E-1008-3 | – (von Hand) |
| 9 | **Satz ordnen:** alle richtigen Wortstellungen in `a`, die natürlichste (Vorfeld) zuerst | „Morgen fahre ich nach Linz.“ / „Ich fahre morgen nach Linz.“ | E-1008-6 | ja (Lösung aus den Kärtchen bildbar) |
| 10 | **Alternativen je Lücke** nur, wenn sich daraus keine falschen Mischformen bauen lassen; sonst Coach entscheiden lassen | Einstufungstest A8.3 „Trotz d___ schlecht___ Wetter___“ | D-1007-1 | – (von Hand) |
| 11 | **Klammer-Hinweise auf Karten Englisch → Deutsch** verraten die Lösung nicht (Wörter mit denselben ersten zwei Buchstaben werden bis zum Aufdecken verdeckt – trotzdem sparsam einsetzen) | „appointment (Termin …)“ | E-1008-57 | – (App verdeckt) |
| 12 | **Bestehende Themen:** Vokabeln und Übungen nur hinten anhängen, Indizes und Themen-IDs nie ändern | – | CLAUDE.md | ja (Löschen/Verschieben/Typwechsel) |
| 13 | **Mehrere amtliche Schreibweisen:** gibt es neben der Duden-Schreibung eine offizielle Markenschreibung, beide in `a`/`s` (Groß-/Kleinschreibung zählt) | „e-card“ (Sozialversicherung) und „E-Card“ (Duden) | D-1010-1 | – (von Hand) |
| 14 | **Niveau-Abdeckung:** Einstufungstest und Lehrplan gegen die ÖIF-Einstufungsmatrix bzw. das Rahmencurriculum der Stufe abgleichen (integrationsfonds.at); jedes Thema der Liste mit mindestens einer, besser zwei Aufgaben | A18 ergänzt „da“, „falls“, „wo/was“, Plural, Imperativ „Sie“ … | D-1010-2 | – (von Hand) |
