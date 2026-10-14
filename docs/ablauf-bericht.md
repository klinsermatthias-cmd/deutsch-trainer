# Ablauf: Bericht von Aurora → Analyse → neue Themen

Aurora kopiert den Bericht unter *⚙ Einstellungen → Bericht für Claude*. **Nichts daraus kommt in dieses öffentliche Repo** außer anonymen Zusammenfassungen (`docs/ki-qualitaet.md`) und Urteilen (`lektionen/ki-pruefung.json`).

1. **Private Ablage (S-1013-40):** Auswertung als `deutsch-trainer/<Datum>.md` plus eine Zeile in `deutsch-trainer/verlauf.md` im privaten Repo `klinsermatthias-cmd/lernprotokoll-privat` (Vorlage dort in `README.md`).
2. **VERLAUF (S-1013-39):** mit der letzten Zeile in `verlauf.md` vergleichen.
3. **KI-PROTOKOLL:** jedes Urteil von Coach mit Quellen auf Korrektheit prüfen; anonyme Zusammenfassung in `docs/ki-qualitaet.md`.
4. **KI-ÜBUNGEN ZUR PRÜFUNG:** Urteil in `lektionen/ki-pruefung.json`. Gute, geprüfte Coach-Übungen bei jeder Auswertung in das passende Thema übernehmen (hinten anhängen, in einen Schritt ohne Vorgriff; D-1014-82).
5. **VOKABEL-ANTWORTEN ZUR PRÜFUNG:** jede Antwort prüfen, Urteil mit dem Schlüssel der Zeile eintragen: `"va:<Karte>:<Antwort>": {"ok": true}` bzw. `{"ok": false, "korrektur": "…", "grund": "…"}`. Bestehende Einträge bleiben. Richtige Antworten zusätzlich in die Vokabel aufnehmen (Index bleibt).
6. **WIEDERKEHRENDE FEHLERARTEN (S-1014-4):** Arten mit ↑ oder vielen Treffern → Themen vorziehen bzw. Übungen anhängen; Arten ohne Thema → neues Thema vorschlagen (Lehrplan); „neu: …“-Arten mit mindestens zwei Treffern in `APP.errorKinds` (`js/app.js`). „Texte/Sätze“ zeigt, ob Fehler nur beim freien Schreiben auftreten. Ergebnis in der privaten Auswertung.
7. **AUSRUTSCHER:** vergessene ß/ss und selbst gewähltes „Nur vertippt“ sind keine Wissenslücken; kehrt dasselbe Wort immer wieder, gezielt üben. „Ganze Antwort selbst als richtig gewertet“ (S-1013-43) beurteilen.
8. **NOCH NICHT GELERNT?:** zu jeder Meldung (`<tid> ex[<Index>]`) prüfen, was fehlt – Theorie oder Vokabeln ergänzen oder Übung ersetzen (`aus: true` + anhängen). Fehler zu gemeldeten Übungen nicht als Schwäche werten.
9. **FEHLERMELDUNGEN:** bestätigte Fehler korrigieren und als neue Zeile in die Prüfliste.
10. Danach 1–3 neue Themen oder Übungen vorschlagen (mit D-Codes), nach OK bauen wie in `docs/ablauf-thema.md`.
