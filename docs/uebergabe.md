# Übergabe – Chat „Deutsch-Trainer (Lehrinhalte)“

Startdatei für den nächsten Chat (Regel „Umsiedeln“, D-1009-6). **Ohne Privates** – Auroras Testergebnisse, Antworten und die ausführliche Auswertung bekommt der neue Chat nur per `send_message`.

Stand: 12.10.2026 · Generation 2: session_016DDMpBd2CwhYdxw8FXXc6M (Vorgänger: session_01XDLQ2V6tk1eM7bLtG3XZRH)

## Zuerst lesen
1. `CLAUDE.md` (Regeln, Rolle, Codes, Quellen, Tokens sparen)
2. `lektionen/pruefliste.md` (Pflicht vor jedem Inhalt und Push, mit Quellenliste)
3. `lektionen/README.md`, `docs/uebungsformate.md`, `docs/lehrplan.md` (Themenplan)

## Stand
- App live auf der gemeinsamen Engine; Einstufungstest 169 Aufgaben (A1–A18, B1–B5, C1, D1–D2), von Aurora abgeschlossen (11.10.2026), alte Testblatt-Antworten per Import übernommen (D-1010-6, Engine-Korrektur E-1010-2).
- Themen live: **d01** Perfekt (65 Übungen), **d02** Wortstellung (60), **d03** als/wenn/wann + Präteritum sein/haben/Modalverben (65). Alle mit Theoriekarten (D-1011-1), Verbkarten mit Zeitformen (D-1011-6), `GLOSS_EXTRA` für Antippen (Funktionswörter, Formen, Nomen ohne Artikel).
- Aurora hat noch **keine** Lernrunde gemacht (Stand des Berichts vom 11.10.) → Themen können noch umgebaut werden, ohne Fortschritt zu verlieren.
- KI: OpenRouter, Modell google/gemini-3-flash-preview (D-1009-2).

## Codes
Letzter vergebener Code: **D-1011-9**. Nächster: D-MMTT-1 mit neuem Datum.

## Offene Entscheidungen von Matthias
| Code | Inhalt |
|---|---|
| D-1011-7 | Allgemeine Regeln: Schreibaufgaben mit Mindestlänge (A2 ≥ 40, B1 ≥ 80, B2 ≥ 150 Wörter); laufende Fehleranalyse je Bericht (privat) → neue Schwächen als neues Thema/Unterthema oder mehr Wiederholung; Grammatik immer vollständig erklären und vollständig abprüfen, große Gebiete in Unterthemen (dNNb, dNNc …); Reihenfolge: schwächste zuerst, aber Grundlagen vor Aufbau (A1 → A2 → B1 → B2), über `req` |
| D-1011-8 | Anwendung: d02b „Fragen und Aufforderungen“ (W-Fragen, Ja/Nein-Fragen, indirekte Fragen, Imperativ), d02c „Satzklammer und Mittelfeld“ (trennbare Verben, Modalverben, Perfekt/Futur, nicht, Objekte, TeKaMoLo), d01b „Präteritum aller Verben“, d01c „Plusquamperfekt“; Übersicht „Satzstellung im Ganzen“ in d02; danach zuerst Fälle-Grundlagen (Artikel/Genus, Nom./Akk./Dat., Pronomen), dann Wechselpräpositionen, Adjektivendungen, Relativsätze; d03 bekommt req d01b, d02b, d02c; je Thema eine längere Schreibaufgabe mit Mindestlänge |
| D-1011-9 | Wunsch an „App-Engine: Funktionen“: Feld `min` (Mindestwortzahl) für `sch` in Lektionen |
| D-1011-3 | Anonyme Zusammenfassung der Coach-Prüfung in `docs/ki-qualitaet.md` |
| D-1011-4 | A18.6 bekommt Hinweis „since when?“ (misst sonst nicht „seit“) |
| (ohne Code) | Soll die Zeile mit Auroras Niveaus in `docs/lehrplan.md` (Abschnitt „Stand“, 11.10.) gekürzt werden? Repo ist öffentlich. |
| D-1007-4 | Hörverstehen als Engine-Wunsch – nie freigegeben, ruht |

Weitere Merkpunkte: nach etwa 3 Berichten mit „SCHWÄCHEN NACH THEMA“ eine Empfehlung zu E-1007-8 geben; Idee „Nomen mit Artikel beim Antippen“ liegt im Funktionen-Chat (docs/ideen.md).

## Session-IDs der anderen Chats
| Chat | Session |
|---|---|
| App-Engine: Funktionen | session_01RDQuEyYTikM25QrUxLnCu5 |
| Opi suomea (Lerninhalte) | session_01YUsnSxvNQWW2UiiXtsb9th |
| Simulation | über Matthias' zweites Konto, Codes S-… |

## Abläufe
- Bericht von Aurora → Analyse nach `CLAUDE.md` (Abschnitte „Danach …“), Fehlerstatistik im **privaten** Dokument (Link per `send_message`), Urteile von Coach mit Quellen prüfen, dann Themenvorschlag mit D-Codes.
- Neue Themen: Prüfliste lesen → bauen (≥ 30, Ziel ~50 Übungen, ≥ 6 Formate, Verbkarten mit Zeitformen, Theoriekarten) → jede Form mit Quelle (`node tools/quellen.mjs --sprache de <wort>`, Duden, DWDS) → `node tools/pruefen.mjs` → nach OK pushen.
- Wiktionary: höchstens etwa 1 Abruf alle 3–5 s (sonst Fehler 429).
