# Entscheidungen – Deutsch Trainer

Ältere Einträge: bis 12.10.2026 in `docs/archiv/entscheidungen-bis-2026-10-12.md`, 13.–20.10.2026 in `docs/archiv/entscheidungen-2026-10-13-bis-20.md`. Einträge älter als etwa 7 Tage wandern dorthin.

## 21.10.2026 – Prüfung 21.10., Durchgang 1 (D-1021-1 bis -5, -7, -9, -11, -13, -15)
- Theorie-Korrekturen und Ergänzungen in allen Themen d01–d16, Verbkarten mit voller DWDS-Tabelle (kommen, essen, trinken, schlafen, nehmen, wohnen, müssen, können, möchten, mögen, fehlen, betragen, trainieren), neue Wortkarten; Präteritum-Bildung nur noch als Erkennen (zuo).
- A1-Wendungen in d01–d02b gelten als bekannt (Prüfliste 29); Lehrplan aktualisiert; Titel d08/d08b ohne Ortsangabe; d35 mit Schulzählung 1.–4. Fall.
- Quellen-Nachprüfung: „Lift“ ist nicht das österreichische Normalwort (Goethe/ÖSD-B1-Liste: Aufzug D, A) – w01 korrigiert.

## 21.10.2026 – Prüfung 21.10., Durchgang 2 (D-1021-6)
- Alle Themen d01–d16 und w01–w06 auf Vielfalt überarbeitet: 332 neue Übungen aus vielen Alltagssituationen, 467 eintönige oder ratbare Übungen ausgeblendet (`aus`); je Thema 47–70 aktive Übungen, 40–52 % Satzbildung, ≤ 6 mc mit gleich langen Optionen.
- Wortpakete: ausziehen, putzen, Versicherung, Staatsbürgerschaft, Sport ergänzt; zwei Übungen in den richtigen Lernschritt verschoben.

## 22.10.2026 – Prüfung 22.10., Teil 1 (D-1022-2, -3, -4)
- Fehler korrigiert (u. a. Kilo/Kilos, den 2er, Aushang ohne Duzen, grüß Gott klein, falsche Verweise), Theorie-Lücken geschlossen (ab/bis, Reflexivverben, mir zu teuer, -ei/-ie, -nis, alle/beide, Angestellte, An deiner Stelle …, bin gesessen), neue Karten (denn = because, hängen regelmäßig, Steigerung, Reflexivverben), fehlende Lösungen ergänzt.
- Quellen-Nachprüfung: 45 Punkte, 41 belegt, 4 teilweise, keiner widerlegt.

## 22.10.2026 – Prüfung 22.10., Teil 2: höchstens 10 % je Szene (D-1022-1)
- Matthias: „25 % ist immer noch viel, vielleicht max 10 %“ – 381 neue, 399 ausgeblendete Übungen; in allen Grammatikthemen liegt keine Alltagsszene, kein Name und keine Stadt über 10 % der aktiven Übungen (Wortpakete mit eigenem Thema bis 16 %); Ersatz jeweils im selben Lernschritt und Format, neue Bereiche Schule, Bank, Reklamieren, Feste, Telefonieren. Prüfliste 30.

## 22.10.2026 – Titel d04 (D-1022-8)
- d04 heißt jetzt „Der Termin, die Rechnung, das Amt – der, die, das“, weil der Markt nur noch 9 % der Übungen ausmacht; ID unverändert.

## 22.10.2026 – Fälle verständlicher, kleinere Schritte (D-1022-10 bis -14)
- d35 jetzt 6 Lernschritte (je 10–11 Übungen, letzter 22); Abschnitt 6 geteilt in 6 (feste Präpositionen) und 6b (Wechselpräpositionen); Fall-Finder mit Spalte „→ case“ und 5 Beispielsätzen „Try it“. d36 jetzt 4 Schritte (Schritt 2 geteilt: ohne Artikel/alle/beide – Steigerung).
- Kasten „🇫🇮 For Finnish speakers“ in d35 (Abschnitte 1, 6b) und d05b (Abschnitt 1): Fälle-Partner, Ortsfälle ↔ wo/wohin, -lle ≈ Dativ mit Ausnahmen; Quellen Wiktionary, Wikipedia, Duden, DWDS. Prüfliste 31.
- d11 ohne d06 in `req` (Pronomen lehrt d35, Abschnitt 4) → frei schon nach d09b; vorgriff.json-Reihenfolge angepasst, 0 neue Vorgriffe.
- Fehlende B1/B2-Themen (D-1022-15) nicht gebaut: Matthias – Umfang reicht vorerst, weitere Themen entstehen aus Auroras Schwächen.

## 25.10.2026 – Tiefenprüfung D-1025-26 (Schlüssel, private Daten)
- Volle Historie beider Repos (alle Branches) auf Schlüssel, Supabase-URL, Berichte und persönliche Daten durchsucht: sauber, nur Test-Attrappen.
- E-Mail-Adressen nur in Autor-Metadaten früher Commits; Historie wird nicht umgeschrieben. Bericht: `docs/archiv/pruefung-2026-10-25/26-schluessel-privat.md`.

## 25.10.2026 – CI: Zeitgrenzen und Browser-Cache (D-1025-1)
- Prüf-Jobs brechen nach 30 Minuten ab statt bis zu 6 h zu hängen. Die Playwright-Installation hat je Versuch 4,5 Minuten und bis zu 3 Versuche, der Browser liegt im Actions-Cache (Schlüssel playwright-1.56.1).
- Die Workflows sind in beiden Repos gleich (Engine-Dateien, hier selbst eingetragen, weil „Engine übernehmen“ keine Workflows pushen darf).

## 25.10.2026 – Code-Review Engine (D-1025-21)
- KI-Antworten werden zentral normalisiert (Listen `tips`/`strengths`/`weaknesses` immer Arrays, JSON-Array auf oberster Ebene erlaubt); die Fortschritt-Ansicht stürzt bei alten oder fehlerhaften Berichten nicht mehr ab; Diagnose-Texte werden escaped (Engine opi-suomea 04999f2).
- Offen, weil sehr selten: Tag doppelt gezählt nach „Letzte Bewertung ändern“ am Rundenende (B5), Fehlerzweig zeigt evtl. altes Datum (B6). Bericht: `docs/archiv/pruefung-2026-10-25/21-code-review.md`.

## 25.10.2026 – Tiefenprüfung Sync, Speicher, Service Worker (D-1025-22, -23, -24)
- Kein dauerhafter Verlust im normalen Sync. Pausierte Runde auf zwei Geräten: Fix auf Branch `d1025-sync-runde` (opi-suomea), Merge nach OK. Service Worker lädt die Seite jetzt frisch (Engine 20d2f28).
- Speicher: Lektionen-Cache (~1 Mio. Zeichen) liegt im Gerätespeicher, den sich beide Apps teilen; Auslagern als eigener Branch vorgeschlagen. Bericht: `docs/archiv/pruefung-2026-10-25/22-23-24-sync-speicher-sw.md`.

## 25.10.2026 – Sprachprüfung aller Übungen (D-1025-8)
- 1596 Übungen geprüft; ein falscher mc-Schlüssel (w04 „die Kontos“), drei ungenaue Erklärungen, zwei unidiomatische Stellen und 20 fehlende gleichwertige Lösungen korrigiert.
- Neue Prüflisten-Zeile 32: mc-Distraktoren im Wörterbuch prüfen. Bericht: `docs/archiv/pruefung-2026-10-25/08-sprachpruefung.md`.

## 25.10.2026 – Antwortbewertung getestet (D-1025-12)
- Lokale Bewertung mit 16.489 richtigen und 26.615 gezielt falschen Varianten getestet: keine falsche Antwort als richtig. Behoben (Engine): kleiner Satzanfang in Satz-Lücken („→ ___“) galt ohne KI als falsch. Bericht: `docs/archiv/pruefung-2026-10-25/12-antwortbewertung.md`.

## 25.10.2026 – Finnisch-Kästen in 8 weiteren Themen (D-1025-10)
- „🇫🇮 For Finnish speakers“ neu in d01, d02b, d03, d04, d08, d09b, d11, d16 (kun = als/wenn, missä/mihin ↔ Dativ/Akkusativ, konditionaali ↔ Konjunktiv II …). Bericht: `docs/archiv/pruefung-2026-10-25/10-finnisch-kaesten.md`.

## 25.10.2026 – B1/B2-Abdeckung (D-1025-13)
- A1–A2 komplett gebaut; der Plan deckt B1 vollständig und B2 fast vollständig. Drei kleine Lücken (brauchen nicht … zu, Futur II rezeptiv, Funktionen von es) und Genitiv-Präpositionen in den Lehrplan übernommen. Bericht: `docs/archiv/pruefung-2026-10-25/13-b1-b2-abdeckung.md`.

## 25.10.2026 – Theorien geprüft (D-1025-9)
- Alle 31 Theorien geprüft; 34 Stellen korrigiert (zu absolute Regeln, Widersprüche zu Übungen, Bahnsteig statt Gleis in Österreich, Wiener ohne Endung, Dativ-Plural-n). Keine falsche Tabelle. Bericht: `docs/archiv/pruefung-2026-10-25/09-theorien.md`.

## 25.10.2026 – Wortschatz-Analyse (D-1025-14)
- Abgleich mit der B1-Wortliste (Goethe/ÖSD): etwa 38–45 % vorhanden. Fehlende Wörter in `docs/b1-woerter-fehlend.txt`; neue Übungen nehmen sie bevorzugt (`docs/ablauf-thema.md`). Bericht: `docs/archiv/pruefung-2026-10-25/14-wortschatz.md`.

## 25.10.2026 – Einstufungstest geprüft (D-1025-15)
- 169 Aufgaben: keine falsche; 6 gleichwertige Antworten ergänzt (umso, wer, darum/deswegen/daher, dieses Wochenende, in welcher, Ziffern), B4.7 „Ordination“, Titel A18 „More grammar (A1–B1)“. IDs unverändert. Bericht: `docs/archiv/pruefung-2026-10-25/15-einstufungstest.md`.

## 25.10.2026 – Simulation, Wiederholungsplan, KI-Aufträge, pruefen (D-1025-11, -20, -17, -27)
- Simulation: Coach-Nachbau beachtet jetzt die Lernschritt-Regel; Wiederholungen zu 82 % zum richtigen Zeitpunkt. Lernschritte mit vielen Schreibaufgaben (d01b/5, d01/5, d09/4) beim nächsten Bearbeiten auflockern.
- KI-Aufträge: fehlender Inhalt ist falsch, Antwortsprache verlangt, Eingaben als Daten (Engine). pruefen: Schutzprüfung „nur hinten anhängen“ lief für Lektionen wegen 1-MB-Puffer nicht – behoben, keine Verstöße. Berichte in `docs/archiv/pruefung-2026-10-25/`.

## 26.10.2026 – Teilpunkte, „Meine Schwächen“, ausgeblendete Übungen (D-1025-18, -19, -2)
- Engine: Teilpunkte bei Übungen mit mehreren Feldern; Karte „Meine Schwächen“ unter Fortschritt; ausgeblendete Übungen im Gerät nur als Platzhalter (−290 KB). CI: neuer Installationsversuch wartet auf abgebrochenes apt-get. Bericht: `docs/archiv/pruefung-2026-10-25/18-19-02-funktionen.md`.

## 26.10.2026 – Aufräumen und Handy (D-1025-3, -4, -25, -28)
- Engine: bewertung.js aus uebungen.js; Tabellenspalte auf dem Handy breiter. Opi-CLAUDE.md gekürzt. Entscheidungen 13.–20.10. ins Archiv. Bericht: `docs/archiv/pruefung-2026-10-25/03-04-25-28-aufraeumen.md`.

## 26.10.2026 – Tiefenprüfung abgeschlossen (D-1025-1 bis -29)
- Formen (D-1025-6): 142 Verben, 304 Nomen ohne Fehler. Alle Codes erledigt außer D-1025-7 (Bericht Aurora). Schlussübersicht: `docs/archiv/pruefung-2026-10-25/stand.md`.
