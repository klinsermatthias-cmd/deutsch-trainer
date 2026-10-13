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
- Oktober 2026: Regel „Umsiedeln“ in CLAUDE.md (Startdatei docs/uebergabe.md ohne Privates, Nachfolger per create_session, max. 8 Generationen) (D-1009-6, Engine E-1009-18).
- Oktober 2026: Einstufungstest mit Quellen geprüft (ÖIF-Einstufungsmatrix A2/B1, Rahmencurricula A1–B1, Duden, DWDS, Wiktionary). B4.2 nimmt auch „E-Card“ (Duden-Schreibung) an (D-1010-1). Neuer Abschnitt A18 „More B1 grammar“ (21 Aufgaben: statt…zu, da, falls, wo/was, seit(dem), bis, zweiteilige Konnektoren, jemand, Partizip I, derselbe, Plural, Imperativ Sie, Ordnungszahl, Demonstrativpronomen, n-Deklination, Plusquamperfekt) → 169 Aufgaben, Teil A ca. 80 Minuten (D-1010-2; ersetzt D-1007-3). Regel: jede Änderung mit Quelle prüfen und Quellen in der Meldung nennen (D-1009-7, wie E-1009-26).
- Oktober 2026: Quellenliste in lektionen/pruefliste.md (Duden, DWDS, Wiktionary, grammis, ostarrichi, ÖIF, ÖSD mit Abrufhinweisen; blockende und gesperrte Seiten aufgeführt); Regel: Quellen nutzen, wann immer es Sinn macht (D-1010-3).
- Oktober 2026: Quellen bei jeder Erstellung und jeder Prüfung von Inhalten verwenden, nicht nur bei Zweifel; Quellenliste an „App-Engine: Funktionen“ weitergegeben (D-1010-4, Auftrag von Matthias).
- Oktober 2026: Erste Themen d01 (Perfekt), d02 (Wortstellung), d03 (als/wenn/wann, Präteritum) gebaut, mit Theoriekarten zu jedem Theorieteil (D-1011-1) und 32–37 Übungen je Thema; Themenplan d01–d06 im Lehrplan; GLOSS_EXTRA mit Grundformen, Partizipien, Funktionswörtern und Nomen ohne Artikel (D-1011-2). Alle Formen mit Wiktionary/Duden/DWDS geprüft.
- Oktober 2026: d01–d03 auf 60, 55 und 60 Übungen erweitert (je 23 neu, nur angehängt: „Welcher Satz ist richtig?“ mit Auroras typischen Fehlern, längere Lücken, Übersetzungen, Satz ordnen, je ein dritter Lesetext, Schreibauftrag und Dialog); Regel mindestens 30, Ziel etwa 50 Übungen je Thema in README und Prüfliste (D-1011-5).
- Oktober 2026: Verbkarten in d01–d03 mit Zeitformen (Präteritum · Perfekt · Futur, er/sie) ergänzt (20 Karten, IDs unverändert), Tabelle „Verb forms“ und werden-Tabelle in der Theorie, je 5 neue Übungen (Präteritum, Perfekt, Futur) → 65, 60, 65 Übungen; Regel in README und Prüfliste (D-1011-6).

- Oktober 2026: Simulationsfunde (bestätigt/abgeschwächt/verschärft, bei „teilweise“ nur der bestätigte Teil) zu d01–d03 und zum Einstufungstest umgesetzt: mehr akzeptierte Varianten (D-1012-3), neutrale Hinweise ohne vorweggenommene Lösung (D-1012-4), Theorie korrigiert und ergänzt – Ersatzinfinitiv, haben/sein, Futur im Nebensatz, Verbposition 1/2/Ende, als/wenn/wann, nachdem (D-1012-5), req d02 = [d01] (D-1012-6; d09 als Voraussetzung von d03 erst, wenn d09 existiert), Einstufungstest-Aufgaben korrigiert, IDs unverändert, GLOSS_EXTRA „ab“ (D-1012-15). Indizes unverändert, nur angehängt bzw. umformuliert.
- Oktober 2026: Neue Themen (zuerst d04–d09 aus Block A des Simulationsplans) entwirft der Chat „Simulation“ nur als Entwurf in opi-suomea `docs/pruefungen/deutsch/entwuerfe/` (dNN.json + dNN-quellen.md, mit pruefen.mjs und Prüfliste getestet); der Chat „Deutsch-Trainer (Lehrinhalte)“ prüft Quellen stichprobenartig, hängt an und pusht nach Matthias' OK (D-1012-19).- Oktober 2026: Themenplan des Chats „Simulation“ (33 Themen, Blöcke A/B/C, Checkpoints, Spalten Niveau und req, Regel „aus Testergebnissen werden Themen“) in `docs/lehrplan.md` übernommen; die alten d04–d06 sind neu belegt, D-1011-8 ist hinfällig (D-1012-11).
- Oktober 2026: d04–d07 aus den Entwürfen des Chats „Simulation“ übernommen (D-1013-1), geprüft mit Wiktionary/Duden-Stichproben; Korrektur d06 ex[25] („(Singular)“ statt „(ein Nachbar)“, weil der bestimmte Artikel verlangt ist). GLOSS_EXTRA: Einträge zu d04–d07 und Nomen aus d01–d03 (D-1013-3; S-1012-102: Nomen mit Artikel sind sonst nicht antippbar), „stand“ um das Nomen erweitert (S-1012-103), doppeltes „keine“ weggelassen, „welche“ um „some“ ergänzt. Bundesdeutsche Alternative auf den Karten Heurige, Krankenstand, Ordination (D-1013-2) und neue Prüflisten-Zeile 17 (D-1013-4).
- Oktober 2026: Nach der neuen Wortprüfung der Engine (großgeschriebene Wörter mitten im Satz gelten als Nomen) 12 GLOSS-Einträge für Nomen, Orte und Namen aus d01–d07 ergänzt (Arbeit, Arzt, Ärztin, Jahren, Deutsch, Österreich, Graz, Hallstatt, Gruber, Huber, Jonas, Sabine; D-1013-6). Formen geprüft mit Wiktionary (en) und Duden.

## 13.10.2026 – Wortregel B1, Überschrift „Wörter“, Name, Begrüßung, Prüfliste automatisch (S-1013-10, S-1013-22, S-1013-23)
`APP.wordRule`: KI-Übungen dürfen Grundwortschatz bis B1 verwenden. `APP.vocabName` „Wörter“, Name einheitlich „Deutsch-Trainer“. Ab 22 Uhr „Guten Abend“ statt „Gute Nacht“ (en.wiktionary „gute Nacht“: Abschiedsgruß). `APP.pruefVarianten: 3`; Prüfliste Zeilen 4/6/15/16/17 mit automatischen Hinweisen, Quellenliste: Goethe/ÖSD-B1-Wortliste erreichbar.

## 13.10.2026 – Wortbedeutungen (GLOSS) mit Zweitbedeutungen und Österreich-Alternativen (S-1013-11)
- Zweitbedeutungen ergänzt: sein (his), weiß (white), meinen (to mean), sie (Sie = you), gleich (same), liebe, fahrt (ihr fahrt), frage (neu), umgezogen (changed clothes), Heurige (young wine); Quellen: en.wiktionary (sein, weiß, meinen, gleich, fragen, umziehen), Duden (Bescheid, Heuriger, E-Mail).
- Österreich-Wörter mit bundesdeutscher Alternative: Jause (Duden: Imbiss, Zwischenmahlzeit; Goethe-B1-Liste), Ordination (Goethe-B1-Liste: Praxis), Krankenstand, Installateur (Klempner – ohne Quelle); Tomaten neutral (Duden: Paradeiser ostösterreichisch), Schi als Nebenform (Duden „Ski, Schi“); Karte d01-14 Jause mit „Germany:“.

## 13.10.2026 – d01–d03 nachgebessert (S-1013-14)
- Hinweise ohne Bau-Rezept („Bindewort: because“, „ein ganzer Satz mit …“), d03-Hinweise auf Deutsch wie in den anderen Themen; Querverweis d02 → d06 (zwei Objekte).
- Varianten in `a`: d02 ex13 „daheim“ (en.wiktionary „daheim“), ex47 „Sie sagt, sie ist krank / sie sei krank“ (en.wiktionary „sei“ = Konjunktiv I von sein), ex54 „Ja, vier Uhr passt gut.“ (ohne Quelle). Kein eigener Futur-Block mehr in neuen Themen (S-1013-29); bestehende Übungen bleiben.
- Offen (ohne erreichbare Quelle): Hinweis zur Ausnahme „…, dass ich habe warten müssen“ in der Theorie.

## 13.10.2026 – Dritter Dialog d05–d07, kleine Korrekturen d05/d07 (S-1013-13, Prüfliste 15)
- Angehängt: d05 ex62 „Bei der Feier: das Geschenk überreichen“ (Alles Gute zum Geburtstag), d06 ex61 „Kaffee und Kuchen bei Lena“ (schmecken, schicken, gefallen), d07 ex62 „Nach der Firmenfeier“ (meiner/meinen/meine – wie in der d07-Theorie). GLOSS: Rezept, zusammen, per (en.wiktionary), für, schmeckt.
- d07 ex51: „ein Joghurt … Wem gehört es?“ (Duden „Joghurt“: österr. meist das); d07 ex28 mit „Es regnet …“ (trotzdem verständlich); d05 ex48 Variante „Wir packen heute das Geschenk ein.“ (ohne Quelle).

## 13.10.2026 – Wiederholung d03 und mehr freie Übersetzung in d04–d07 (S-1013-13)
- Je Thema angehängt: eine Lücke als/wenn/wann (Hinweis wie in d03), eine Lücke konnte/musste (Präteritum Modalverb), zwei tr Englisch → Deutsch. d04-Theorie: „außer in festen Wendungen wie am Markt, zum Markt“ (DWDS „Markt“). GLOSS „unserem“ (Form von unser, en.wiktionary „unser“).
- Formen aus eigenem Wissen (ohne Einzelquelle): Varianten „günstig“, „borgen“ (wie bereits d06 ex53), „Ist dieser Schal Ihrer?“.

## 13.10.2026 – d08 geteilt und veröffentlicht: d08 Imperativ/Apotheke, d08b Reflexiv/Arzt (S-1013-12/-13)
- Entwurf d08 (63 Übungen) → d08 (44, Imperativ) + d08b (37, Reflexivpronomen, req + d08); je 3 les/sch/dlg, lvl „A2“, je 1 als/wenn/wann-Lücke, Präteritum/Futur je 2–3 (S-1013-29). Teil-D-Korrekturen: Imperativregel „nach s/ß/z nur -t weg“ (lies!, iss! – en.wiktionary lesen/essen), öffne!/atme!/sammle! (en.wiktionary öffnen/atmen/sammeln), ex21 „Kann ich morgen kommen?“, „Ich habe mich am Fuß verletzt.“ (Duden verletzen), Karten Salbe/Grippe (en.wiktionary), sich verkühlen „besonders österreichisch“ (Duden; DWDS „landschaftlich“).
- Offen ohne Quelle: Karte E-Card „offizielle Schreibung e-card“ (Duden kennt nur „E-Card“) – nicht übernommen. 43 GLOSS-Einträge (Imperativ- und Partizipformen) für die Wortprüfung.

## 13.10.2026 – d09 geteilt (S-1013-12/-13)
d09 „Wie komme ich zur Post?“ (Präpositionen mit festem Kasus + Weg beschreiben: links/rechts/geradeaus, bis zum, zu Fuß, Fahrschein) und neu d09b „Seit wann wohnst du hier?“ (wo/wohin/woher, seit/vor, ziehen); je 3 Lese-/Dialog-/Schreibübungen, lvl A2, ohne Fahrschein, Variante „Wo die Haltestelle ist, weiß ich nicht.“, 24 GLOSS-Einträge.
Quellen: DWDS „gegenüber“ (gegenüber von + Artikel = umgangssprachlich → Hauptform „gegenüber dem“); Duden „gegenüber“ (Präposition mit Dativ); en.wiktionary: Fahrschein, Bahnhof (Bahnhöfe), Rathaus (Rathäuser), Fuß, links, rechts, bis, abbiegen (bog, sein), steigen (stieg, sein), ziehen (sein = to move), Vormittag. Ohne Quelle: Hinweis „bis meist mit zu“.

## 13.10.2026 – Lehrplan: d08b/d09b, Grammatik-Lücken, Wortschatz, Theorie-Aufbau (S-1013-16/-17/-18/-21)
Aus der Gesamtprüfung Deutsch (Branch `pruefung/deutsch-gesamt-2026-10-13`): Lehrplan um d08b, d09b und d13b (Zeitangaben, österr. Uhrzeit/Datum) ergänzt, fehlende Teilregeln in d12/d13/d15/d18/d21/d23/d25 eingetragen, d03 bekommt d09 und d09b in `req` (D-1012-17).
Neue Grundsätze: ab d10 5–10 Grundwortschatz-Karten je Thema, Theorie beginnt mit „Das Wichtigste“, 25–35 Übungen je Teilthema, Checkpoint-Wiederholungsitems für Bereiche mit nur einem Test-Item. Nur Planung, keine neuen Sprachformen (daher keine Quellenprüfung nötig).

## 13.10.2026 – Teil-D-Kleinigkeiten (S-1013-12)
Karten hinten angehängt: d02 Besprechung, Arzttermin; d05 Karte, Blume; d06 Kuchen; d07 Kasten (österr. = Schrank). Quellen: en.wiktionary (`tools/quellen.mjs`) für Genus/Plural, Duden „Kasten“ (Pl. Kästen; Schrank-Bedeutung süddt./österr./schweiz.). d06 `lvl` „A2“, „Partizip II“ einheitlich in d05/d07, d03 ex[49] Variante „am Land“.
Offen (niedrig): mc-Fragesprache vereinheitlichen, Hinweise ohne Bau-Rezept, E-Card-Schreibung, Imperativ-Ausnahme -e nach Konsonant + m/n.

## 2026-10-13 – Themen nach gleicher Logik, d01–d07 geteilt (S-1013-34 bis -36)
- Matthias: Themen 1 und 2 zu groß, unvollständig, zu viel Fließtext mit Klammern → „selbst entscheiden … für jedes Thema gleiche Logik: vollständig, klar strukturiert, klar gegliedert, gerne mehrere Unterthemen“.
- Umsetzung: einheitliche Theorie-Gliederung (lehrplan „Gleiche Logik“), d01–d07 je in zwei Teilthemen (alte Übungen `aus: true`, Kopien in d0xb), d08–d09b neu gegliedert; je Thema `zuo`, `luk`, Regelfragen; Prüfvermerke gesetzt. Quellen: en.wiktionary, duden.de; neue Beispielsätze ohne Quelle.
