# Entscheidungen – Deutsch Trainer

- Oktober 2026: Der Deutsch-Trainer nutzt dieselbe Lern-Engine wie Opi suomea (Wunsch von Matthias). Funktionen kommen nur noch aus dem Opi-suomea-Repo (Action „Engine übernehmen“); hier liegen nur Einstellungen, Farben, Einstufungstest, Lektionen und Doku.
- Oberfläche jetzt auf Deutsch (vorher Englisch): bei B1 gut lesbar und zusätzliches Lesetraining; Erklärungen der KI-Lehrkraft „Coach“ und in den Themen bleiben auf Englisch.
- Gespeicherter Fortschritt (Speicherschlüssel `deutsch-trainer-v1`, Einstufungstest-Antworten, Karten) wird beim Umstieg automatisch übernommen; alte Karten-IDs `…-de`/`…-en` werden zu `…`/`…-r`.
- Oktober 2026: App-Symbol (icon-192.png, icon-512.png) ohne „DT“ – nur noch die rot-weiß-rote Flagge (Wunsch von Matthias).
- Oktober 2026: Einstufungstest erweitert (117 → 148 Aufgaben): A17 (Imperativ, Modalverben im Präteritum, Partizipien ohne ge-, seit/vor, Adjektivendungen ohne Artikel), B4 (Alltagswortschatz Österreich), B5 (Artikel). Österreichische/gleichwertige Lösungen ergänzt: A9.5 „beim“, A13.4 „wenn“. A8.3 bleibt lokal streng (Einzellücken würden falsche Mischformen durchlassen); „trotz dem“ beurteilt Coach als regionale Variante.
- Oktober 2026: Ziel festgelegt: sicheres Deutsch im Alltag und Beruf in Österreich (B2), keine Prüfung. Lehrplan-Gerüst (Kann-Sätze, Methode, Phase 1 B1 festigen, Phase 2 B2, Themenpool) in docs/lehrplan.md. Einstufungstest: A1.4 auch „verstehen“, A9.5 auch „vor dem/vorm/im“, B5.5 auch „der Gehalt“ (österreichisch).
- Oktober 2026: 4. Tab heißt „Fortschritt“ (Einstellungen jetzt über ⚙ oben rechts, Engine E-1007-72).
- Oktober 2026: CLAUDE.md um den vierten Code-Chat „Simulation“ (Codes S-…) ergänzt (D-1008-1).
- Oktober 2026: CLAUDE.md: Auswertung der neuen Berichtsabschnitte „VOKABEL-ANTWORTEN ZUR PRÜFUNG“ und „AUSRUTSCHER“ ergänzt (D-1008-2, Engine E-1008-58/-59/-63).
- Oktober 2026: CLAUDE.md: Auswertung des Berichtsabschnitts „NOCH NICHT GELERNT?“ ergänzt (D-1009-1, Engine E-1008-64/E-1009-3).
- Oktober 2026: KI-Anbieter jetzt OpenRouter statt Gemini direkt; Hinweis in docs/ki-qualitaet.md (D-1009-2).
- Oktober 2026: Prüfliste lektionen/pruefliste.md angelegt (12 Startzeilen), Pflichtlektüre vor Inhalten und vor jedem Push; Regel „Deutsch kritisch prüfen, mit Duden/DWDS/Wiktionary gegenprüfen“ in CLAUDE.md (D-1009-4, D-1009-5; Engine E-1009-16, Opi F-1009-10).
