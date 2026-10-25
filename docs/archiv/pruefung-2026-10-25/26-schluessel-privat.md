# D-1025-26 – Repos und Historie auf Schlüssel und private Daten (25.10.2026)

Geprüft: `deutsch-trainer` (314 Commits, 15 Branches) und `opi-suomea` (378 Commits, 79 Branches), volle Historie aller Branches (`git log --all -p`).

| Prüfung | Ergebnis |
|---|---|
| Gemini-Schlüssel (`AIza…`), JWT (`eyJ…`), Supabase-Schlüssel (`sb_…`), GitHub-/OpenAI-Token, private Schlüssel | keine echten; nur zwei Test-Attrappen (`sb_publishable_test_…`, `sb_publishable_geheim_…`) in Prüfskripten |
| Supabase-Projekt-URL (`….supabase.co`) | nie committet |
| Workflows | Schlüssel nur über `secrets.*` als Umgebungsvariablen, keine Ausgabe, kein `pull_request_target` |
| Skripte geben Schlüssel aus? | nein (nur Längenhinweis) |
| Ergebnisse/Berichte von Aurora, Namen, Telefonnummern, Adressen | nichts gefunden; Berichte werden laut Abläufen nur privat ausgewertet |
| E-Mail-Adressen | nicht in Dateien; nur als Autor-Metadaten einiger früher Commits (1 in deutsch-trainer, 10 in opi-suomea) |

**Befund:** sauber. Einziger Hinweis: die privaten Gmail-Adressen in den Autor-Zeilen früher Commits sind öffentlich sichtbar. Entfernen hieße Historie umschreiben (Force-Push, alle Klone ungültig) – nicht empfohlen; künftige Commits laufen über die Noreply-Adresse. Kein Handlungsbedarf, außer Matthias wünscht es.
