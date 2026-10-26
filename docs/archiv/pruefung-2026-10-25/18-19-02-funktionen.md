# Neue Funktionen und Verschlankung (D-1025-18, -19, -2), 25./26.10.2026

Alle in der Engine (opi-suomea), mit eigenen Tests in `tools/pruefen.mjs`, übernommen in den Deutsch-Trainer.

## Teilpunkte (D-1025-18)
Tabelle, Lückentext, Zuordnen, Dialog und Lesetext zählen im Rundenergebnis anteilig: 1 von 2 Feldern richtig = 0,5. Anzeige „1,5 von 2 beim ersten Versuch richtig (mit Teilpunkten)“. „Gelöst“, Fehlerliste und Wiederholung in der Runde gelten weiter nur, wenn alle Felder stimmen. Die Freischaltung (≥ 80 %) wird dadurch etwas leichter – das war beim Vorschlag am 8.10. bekannt.

## „Meine Schwächen“ (D-1025-19)
Neue Karte unter **Fortschritt**: die häufigsten Fehlerarten und Themen der letzten 30 Tage (dieselben Daten, die Claude im Bericht sieht), Trend ↑/↓ und je Thema ein Knopf „Üben“. Gemeldete „Noch nicht gelernt?“-Übungen zählen nicht.

## Ausgeblendete Übungen verschlankt (D-1025-2)
1.149 von 2.745 Übungen sind ausgeblendet (26 % der Lektionsdatei). Im Gerät stehen sie jetzt nur noch als kleiner Platzhalter (Index, Karten- und Fehler-IDs bleiben gleich); die volle Fassung bleibt in `lektionen.json`. Der Zwischenspeicher der Lektionen im Handy wird dadurch rund 290 KB kleiner (D-1025-23). Im Prüfmodus erscheint nur noch ihre Anzahl.
