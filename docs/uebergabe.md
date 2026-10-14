# Übergabe – Chat „Deutsch-Trainer (Lehrinhalte)“

Startdatei für den nächsten Chat (Regel „Umsiedeln“, D-1009-6). **Ohne Privates** – Auroras Testergebnisse, Antworten und die ausführliche Auswertung bekommt der neue Chat nur per `send_message` bzw. liegen im privaten Repo `klinsermatthias-cmd/lernprotokoll-privat`.

**Aktueller Chat: session_017SEJWh5rb7wU9fdPyGJgMD** (seit 14.10.2026, Generation 2 der Kette, Vorgänger archiviert).

Stand: 14.10.2026 · abgebende Generation: session_01KaffgwpuMKAomR4aCnKT21 (Simulation/Analyse 14.10.; gestartet parallel zu Generation 2 session_016DDMpBd2CwhYdxw8FXXc6M, davor session_01XDLQ2V6tk1eM7bLtG3XZRH). Höchstens 8 Generationen in Folge.

## Zuerst lesen
1. `CLAUDE.md` (Regeln, Rolle, Codes, Quellen, Tokens sparen)
2. `lektionen/pruefliste.md` (Pflicht vor jedem Inhalt und Push, mit Quellenliste)
3. `lektionen/README.md`, `docs/uebungsformate.md`, `docs/lehrplan.md` (Themenplan)
4. `docs/simulation-dt/bericht-2026-10-14.md` (Ergebnisse der Simulation/Analyse vom 14.10., anonym) – liegt auf dem Branch `claude/fervent-euler-9319eg`, bis Matthias über die Übernahme nach `main` entscheidet

## Stand (14.10.2026)
- App live auf der gemeinsamen Engine (main 503b6bb). Einstufungstest 169 Aufgaben, abgeschlossen 11.10.2026; der vollständige Bericht liegt **privat** in `lernprotokoll-privat/deutsch-trainer/einstufungstest-2026-10-11.md`.
- Inhalte: **18 Grammatikthemen d01–d09b** (je 3–5 Lernschritte, S-1014-1; 899 aktive Übungen, 10 Formate) und **6 Wortschatz-Pakete w01–w06** (`wort: true`, laufen parallel zu den Themen, S-1014-5/-12).
- Neu in der Engine: Lernschritte (S-1014-1), Rundengröße 20 (S-1014-3), **Fehlerarten** im Bericht „WIEDERKEHRENDE FEHLERARTEN“ (S-1014-4, siehe CLAUDE.md), Wortschatz-Pakete parallel (S-1014-12), Simulation mit Lernschritten/luk/zuo (S-1014-14).
- KI: Aurora hatte laut Bericht vom 14.10. „gemini / gemini-flash-latest“ eingestellt. Coach-Test (14.10.): **Gemini 3 Flash** 98 % richtige Urteile, Claude Haiku 4.5 nur 94 % und lässt haben/sein-Fehler durch → Gemini verwenden (D-1014-19).
- **Chat „Simulation“ ist seit 13.10. vorläufig Hauptchat für alle Änderungen** (S-1013-25/-26), die anderen Chats pausieren; er hat Ergebnisse der Analyse vom 14.10. bereits übernommen (S-1014-12, -14).

## Simulation/Analyse 14.10.2026 (D-1014-1 bis -15, abgeschlossen)
Alles privat in `lernprotokoll-privat/deutsch-trainer/simulation-2026-10/` (STAND.md, ABSCHLUSSBERICHT.md, funde/01–08, ergebnisse/, coach-test/, skripte/); anonym auf dem Branch (siehe oben). Kernaussagen:
- Reine Lernzeit je Thema im Median 5–6 h statt der erwarteten 1–2 h (206–252 Übungsversuche statt ~50–75), weil 62–67 % der Lernschritt-Runden knapp unter 80 % enden; Hauptursache Schreibaufgaben, die an aller Grammatik gemessen werden.
- Wiederholungsabstände explodieren nach vorgezogenen Wiederholungen (bis 365 Tage); Langzeit-Check wird bei wenig Zeit nie erreicht.
- Coach ordnet Fehler ohne Thema (Adjektivendungen) einem Nachbarthema zu (d05/d05b).
- A2-Kernstoff (Adjektivendungen, Wechselpräpositionen, Konjunktiv II) kommt im Lehrplan zu spät; alle Lücken nennen die Regel im Hinweis.
- OpenRouter-Testschlüssel „Deutsch-Trainer Simulation“ als Network secret der Umgebung (Bearer für openrouter.ai, Limit 5 $, Rest 3,33 $). Tests: `coach-test/teste.mjs` (privat), Node mit `NODE_USE_ENV_PROXY=1 NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt`.

## Codes
Letzter vergebener Code: **D-1014-28**. Nächster: D-MMTT-1 mit neuem Datum.

## Offene Entscheidungen von Matthias
| Code | Inhalt |
|---|---|
| D-1014-16 | Lehrplan: Adjektivendungen (d14/d15) und Wechselpräpositionen (d11) direkt nach Block A, dann Konjunktiv II höflich (d16) |
| D-1014-17 | Je Thema 3–5 Übungen „Satz umformen“ und „Fehler finden und verbessern“ ohne Regelhinweis (nur hinten anhängen) |
| D-1014-18 | Mehr Wörter je Thema, eigene Wortlisten für die b-Themen |
| D-1014-19 | KI: Gemini 3 Flash über OpenRouter (nicht Haiku 4.5) |
| D-1014-20 | Engine: vorgezogene Wiederholung nach vergangener Zeit, Wachstumsgrenze |
| D-1014-21 | Engine: Langzeit-Check früher / Übungen aus lange nicht geübten Themen in jede Runde |
| D-1014-22 | Engine: Themenzuordnung nur zu Themen, die genau die Regel lehren |
| D-1014-23 | Engine: Lernschritte entschärfen (Schreibaufgaben nur Themenregel streng, anderer Übungssatz nach 2 Fehlversuchen, ~10 Übungen) |
| D-1014-24 | Engine: Lückenhinweis auf Knopfdruck, Bericht kürzen – Teil „Wortpakete parallel“ mit S-1014-12 erledigt |
| D-1014-25 | Simulation anpassen – mit S-1014-14 (Lernschritte, luk/zuo) weitgehend erledigt; Rundgang für Hörmodus/Fehler-Knopf/Prüfvermerk/Wortliste prüfen |
| D-1014-26 / -27 / -28 | Coach-Test weiterer Modelle: Gemini 3.8 Flash, Claude Haiku 5.5, GPT-5.6 Luna, Mistral Large 4 (≈ 1,60–2,00 $) / zusätzlich Claude Sonnet 5.5 1 Durchgang (≈ 2,40–2,80 $) / kein weiterer Test |
| D-1011-7, -8, -9, -3, -4 | aus der Übergabe vom 12.10. – Stand prüfen (teils durch S-1013-34 ff. und den Themenplan D-1012-11 überholt) |
| D-1007-4 | Hörverstehen als Engine-Wunsch – ruht |
| (ohne Code) | Bericht `docs/simulation-dt/bericht-2026-10-14.md` vom Branch nach `main` übernehmen? |

## Session-IDs der anderen Chats (Stand: opi-suomea `docs/chats/sessions.md`)
| Chat | Session |
|---|---|
| App-Engine: Funktionen | session_01RDQuEyYTikM25QrUxLnCu5 – `send_message` am 14.10. zweimal „not found“ (Text über Matthias) |
| Opi suomea (Lerninhalte) | session_01YUsnSxvNQWW2UiiXtsb9th – `send_message` am 14.10. „not found“ (Text über Matthias) |
| Simulation (Hauptchat seit 13.10.) | session_01U4uxmr5RFBqjHYDRT6uBXS, zweites Konto – `send_message` erreicht ihn nicht, Text über Matthias |

## Routinen
Keine aktiven Wecker/Routinen dieses Chats (Wecker der Simulation am 14.10. beendet).

## Abläufe
- Bericht von Aurora → Analyse nach `CLAUDE.md` (Abschnitte „Danach …“, inkl. WIEDERKEHRENDE FEHLERARTEN), Auswertung **privat** (`lernprotokoll-privat/deutsch-trainer/<Datum>.md` + `verlauf.md`), Urteile von Coach mit Quellen prüfen, dann Themenvorschlag mit D-Codes.
- Neue Themen: Prüfliste lesen → bauen (≥ 30, Ziel ~50 Übungen, ≥ 6 Formate, Lernschritte, Verbkarten mit Zeitformen, Theoriekarten) → jede Form mit Quelle (`node tools/quellen.mjs --sprache de <wort>`, Duden, DWDS) → `node tools/pruefen.mjs` → nach OK pushen.
- Didaktische Prüfung neuer Inhalte: Aurora-Modus der Simulation (privat `skripte/`, bzw. S-1014-14 in `tools/simulation.mjs`).
- Wiktionary: höchstens etwa 1 Abruf alle 3–5 s (sonst Fehler 429).
