# Übergabe an Generation 4 (25.10.2026)

Alter Chat: `session_01M86CXEWHnZbnkkbtmo4Mts` – nach dem Lesen archivieren, dann diese Datei löschen und pushen („Übergabe übernommen (Generation 4), Übergabedatei gelöscht“). Repo `klinsermatthias-cmd/opi-suomea` mit `add_repo` hinzufügen und klonen (Engine-Quelle).

## Stand
- Erledigt 22.10.: D-1022-10 bis -14 (d35 in 6 Schritten mit Abschnitt 6b, Finnisch-Kästen in d35/d05b, Fall-Finder mit „Try it“, d36 in 4 Schritten, d11 frei nach d09b) und D-1022-16 (Knopf „Schritt X nochmal üben“ nach Lernschritt unter 80 %, Engine 338f46a, übernommen). D-1022-15 (fehlende B1/B2-Themen) bewusst nicht gebaut: neue Themen entstehen aus Auroras Berichten.
- Gut zu wissen: eine Schritt-Runde zeigt höchstens 8 Übungen des Schritts + 2 frühere (STEP_MAX/STEP_PREV in `js/uebungen.js`); große Schritte belasten also nicht die einzelne Runde.
- CI hing zweimal bei „Playwright installieren“ und blockierte alle späteren Läufe → hängenden Lauf mit `mcp__github__actions_run_trigger` (cancel_workflow_run) abbrechen. Dauerhafte Lösung = D-1025-1.

## Auftrag jetzt: Tiefenprüfung D-1025 (Freigabe Matthias 25.10.: alle Codes außer D-1025-16)
Matthias hat noch 2 Tage Testlizenz mit viel Token-Limit und will es nutzen. Liste und Fortschritt: `docs/archiv/pruefung-2026-10-25/stand.md`. Regeln dazu:
- Helfer-Agenten parallel erlaubt (D-1025-29); ihre Funde selbst gegenprüfen. Helfer ändern nichts in den Repos, Berichte in den Scratchpad, ich übernehme.
- Kleine, sichere Korrekturen direkt auf `main` (nach `node tools/pruefen.mjs` „Alles in Ordnung“, Quellen, Prüfliste, Commit mit Code, Zeile in `docs/entscheidungen.md`). Datenformat, Sync und große Funktionen (D-1025-2, -3, -18, -19) nur auf eigenem Branch, Merge erst nach Matthias' OK.
- Berichte nach `docs/archiv/pruefung-2026-10-25/`, nichts Privates (Repo öffentlich).
- **Wecker neu anlegen** (der alte war an den alten Chat gebunden und ist gelöscht): `create_trigger` alle 2 h in diese Session, Auftrag „stand.md lesen, nächsten offenen Code abarbeiten“; ab 28.10. deaktivieren und Matthias eine Schlussübersicht geben.
- Reihenfolge: zuerst Sicherheit/Stabilität (26, 23, 22, 24, 1), dann Inhalte (8, 12, 11, 9, 10), dann der Rest.
- Für D-1025-26: die Klone sind flach – für die Historie `git fetch --unshallow`.
- Nächster freier Code: D-1025-30.
