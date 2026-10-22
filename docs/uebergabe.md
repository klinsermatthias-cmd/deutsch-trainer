# Übergabe an Generation 3 (Stand 22.10.2026)

Lies zuerst `CLAUDE.md`. Danach: alten Chat archivieren (Session-ID unten), diese Datei löschen und pushen (Commit „Übergabe übernommen (Generation 3), Übergabedatei gelöscht“).

## Stand
- Prüfung 21.10. (D-1021-1 … -15) und Prüfung 22.10. (D-1022-1 … -8) sind vollständig umgesetzt und live; nicht umgesetzt (nicht freigegeben): D-1021-8, D-1021-10, D-1021-14, D-1021-16, D-1022-7, D-1022-9.
- Berichte: `docs/archiv/pruefung-2026-10-21/` (GESAMTBERICHT, g1–g6, skripte/ mit vn2.py = Vorher/Nachher-Seite gegen origin/main) und `docs/archiv/pruefung-2026-10-22/` (g1–g6).
- Neue Regeln: Prüfliste 29 (A1-Wendungen in d01–d02b bekannt, Liste `bekannt` in `lektionen/vorgriff.json`), Prüfliste 30 (keine Szene, kein Name, keine Stadt in mehr als 10 % der aktiven Übungen eines Themas; Matthias, D-1022-1).
- Je Thema jetzt 47–75 aktive Übungen, 42–54 % Satzbildung, ≤ 29 % gap, ≤ 6 mc, je Schritt ≥ 8 Übungen.
- Engine (opi-suomea): `tools/verbformen.mjs` (Verbkarten gegen DWDS, auf Abruf, Cache `<tmp>/dwds`; kennt Homographen wie *überlegen* und Klammerzusätze wie *hängen (etwas)* noch nicht – mögliche Verbesserung); `tools/vorgriff.mjs` mit `bekannt`; Antipp-Prüfung liest alle Textfelder (D-1022-5).
- Lehrplan: nächstes Thema d13b (Zeitangaben), danach d22 (Präteritum); vorgemerkt w07–w11, *lassen*, Wortbildung – gebaut erst mit eigenem OK.

## Offene Punkte (nur vorschlagen, nichts ohne Code-OK)
- Grenzfälle Szenen-Regel: d11 Wohnen gesamt 28 % (je Szene ≤ 10 %), d08b Gesundheit 18 %, Wortpakete w03–w06 bis 16 %.
- Arbeitszweig `claude/gen2-d1021` ist mit main identisch und kann bleiben oder gelöscht werden.
- Viele Duden-Abrufe am 21.10. scheiterten (503); am 22.10. wieder erreichbar.

## Abläufe
- Große Inhaltsrunden: Helferinnen (Agent) schreiben je Gruppe Patch-Skripte in `/home/user/arbeit/<gruppe>/` (Vorlage-Auftrag dort nicht mehr vorhanden – neu schreiben nach `docs/ablauf-thema.md`), Hauptchat spielt sie der Reihe nach ein, lässt „ohne Quelle“-Punkte von einer eigenen Helferin nachprüfen, setzt Prüfvermerke (`node tools/thema.mjs --vermerk <ids> --quellen "…" --chat D`), pusht auf main, veröffentlicht Vorher/Nachher-Seite (Artifact, gleiche Datei = gleiche URL).
- Bei Nutzungslimit (429) Helferinnen nach der Rücksetzung per SendMessage fortsetzen; stündlicher Wecker per `send_later` nur, solange Helferinnen laufen.

## Session-ID des alten Chats (Generation 2)
- session_01SVhbR1MZFJGZcrqhsDmKgT
