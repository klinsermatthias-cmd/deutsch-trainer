# pruefen.mjs untersucht (D-1025-27), 25.10.2026

Laufzeit 42 s (95 Prüfungen im Deutsch-Trainer, 113 in Opi suomea).

**Fehler gefunden und behoben (Engine):** Der Vergleich mit `origin/main` las die alte `lektionen.json` mit dem Standardpuffer von `execSync` (1 MB). Die Datei des Deutsch-Trainers ist größer → das Lesen scheiterte lautlos, und
- die Schutzprüfung „nur hinten anhängen“ (keine Übung/Vokabel gelöscht, umsortiert, ID geändert) lief für alle Lektionsthemen nicht,
- alle Themen galten als „geändert“ (daher der ständige Hinweis „Möglicher Vorgriff …“).

Jetzt: 256 MB Puffer; scheitert das Lesen, meldet `pruefen` einen Fehler statt zu schweigen. Nachprüfung gegen die Stände vom 12.10. und 20.10.: **keine Verstöße** in der Zeit ohne Schutz, nur erlaubte Änderungen (Plural-Varianten, umformulierte Übungen).
