# Übergabe an den nächsten Chat (21.10.2026, Generation 2)

Vorgänger-Chat: `session_01Y783WH883oqU7veLpe6UMz` (nach dem Lesen archivieren). Diese Datei nach getaner Übernahme löschen (CLAUDE.md, E-1009-18). Nichts Privates hier.

## 1. Stand (alles live, CI grün)
- deutsch-trainer `main` = d1b5b0f; opi-suomea `main` = 978c4c4 (Engine im Deutsch-Trainer übernommen).
- Zuletzt live (20./21.10.): D-1020-35 (320 Antwortvarianten), D-1020-38/-39 (Wendungen ohne Verbtabelle, k „mit <Verb> (…)“, s = Perfekt; 11 Grundverbkarten), D-1020-43 (Situation/Dialog aus allen Grammatik-Theorien gestrichen), D-1020-48/-49 (Engine-Schalter `noTopicWords`: kein Schritt „Wörter lernen“, Themenwörter nur Wörterbuch zum Antippen + „＋ Merken“; Wortpakete w01–w06 freiwillig), D-1020-46/-52/-53/-36/-55 (Fälle-Paket **d35** nach d04b und **d36** vor d14; d05/d05b/d34 = Übungsthemen „… üben“; 141 Theorie-Verbesserungen; `vorgriff.json` mit Reihenfolge und Markern d35/d36).
- Themenreihenfolge (Array): d01 d01b d02 d02b d04 d04b **d35** d05 d05b d09 d09b d03 d03b d06 d06b d07 d07b d08 d08b d11 d34 **d36** d14 d15 d16 w01–w06.

## 2. Auftrag von Matthias (21.10.2026) – OK ist erteilt
Wörtlich sinngemäß: „Alle deine Empfehlungen nach deiner empfohlenen Reihenfolge umsetzen. Wichtig: die Übungen bunt durchmischt, nicht immer gleich (wie d07 mit Garderobe/Häferl) – ein bunter Mix, mit dem Aurora auch den Wortschatz lernt (sie lernt Wörter jetzt nur noch in den Übungen: antippen, zum Vokabeltrainer hinzufügen). Wenn fertig: noch einmal alle Themen prüfen – grammatische Vollständigkeit und Richtigkeit, abwechslungsreich, genügende Anzahl Übungen, wichtige Reihenfolge, logisch aufgebaut, nichts Wichtiges vergessen. Stündlich Wecker stellen.“

Freigegebene Codes (aus `docs/archiv/pruefung-2026-10-21/GESAMTBERICHT.md`): **D-1021-1, -2, -3, -4, -5, -7, -9, -11**, danach **D-1021-6**. Nicht freigegeben: D-1021-8 und -10 (Alternativen), **D-1021-12** (optional – Matthias fragen). D-1020-40 (passieren nur 3. Person) ist Teil von D-1021-1.
Reihenfolge: **Durchgang 1** = D-1021-1 → -2 → -3 → -4 → -5 → -7 → -9 → -11 (Push nach `pruefen` „Alles in Ordnung“; Vorher/Nachher-Seite für Matthias als Info). **Durchgang 2** = D-1021-6 (≈ 160–180 neue Satzbildungs-Übungen, bunt: Amt, Arbeit, Wohnung, Einkaufen, Öffis, Arzt, Freizeit, Telefon …; ratbare mc durch gleich lange Fassungen ersetzen, alte `aus: true`). **Danach** vollständige Prüfung aller Themen erneut (Auftrag `docs/archiv/pruefung-2026-10-21/AUFTRAG.md`, 6 Prüferinnen-Agenten, Gruppen wie dort g1–g6) und Bericht mit neuen D-<MMTT>-Codes.
Wecker: stündlich `send_later` (Stand prüfen, nach Neustart fehlende Teile neu starten).

## 3. Wo die Einzelheiten stehen
- `docs/archiv/pruefung-2026-10-21/GESAMTBERICHT.md` – Fehlertabelle, Lücken, alle Codes.
- `docs/archiv/pruefung-2026-10-21/g1.md … g6.md` – 158 Funde mit **konkretem neuem Text, Übungs-JSON und Quelle** (g1 d01–d02b, g2 d04/d04b/d35, g3 d05–d03b, g4 d06–d08b, g5 d11/d34/d36/d14–d16, g6 Wortpakete, alle Wortkarten, Reihenfolge/Lehrplan). Vor dem Einbau Index- und Abschnittsangaben am aktuellen Stand prüfen.
- `docs/archiv/pruefung-2026-10-21/skripte/`: `verbcheck.py` (alle Verbkarten gegen DWDS-Flexion; holt fehlende Seiten nach `dw/`), `holedw.py` (DWDS-Seiten holen: `python3 holedw.py liste.txt flexion|wb`), `verben.py` + `basis.py` (Verbkarten-Formen aus DWDS-Tabellen erzeugen; Muster für neue Karten), `vn2.py` + `vn-tpl.html` (Vorher/Nachher-Seite gegen `origin/main`; Ausgabe `vorher-nachher.html`, dann als Artifact veröffentlichen).
- Kleine Restpunkte aus der Variantenprüfung (falls nicht schon in g1–g6): d05b ex18/ex32, d06 ex64, d06b ex25, d07b ex33, d14/d15 ex18 (Kopf), d14 ex28 (Hinweis).

## 4. Abläufe und Lehren (wichtig)
- `lektionen.json` = Liste der Themen; schreiben mit `json.dumps(L, ensure_ascii=False, indent=1) + "\n"`; nie ganz öffnen, nur per Python.
- Nur hinten anhängen (`v`, `ex`); ausblenden mit `aus: true`; neue Übung in den passenden Lernschritt (`steps[].ex`) eintragen; `sec` = Nummern der `<h3>` (1-basiert) – beim Ändern von `<h3>` immer die `sec` aller Schritte nachziehen. Pflichtantworten eines Schritts müssen in seinen Abschnitten gelehrt sein.
- Wortkarten-Format D-1020-29 (README „Wortkarten“): Verben k/s/f (Präsens/Präteritum/Perfekt, 6 Personen, DWDS), Wendungen `wa:"Wendung"`, Nomen „der X, die Xe“ / „ohne Plural“, Adjektive `wa:"Adjektiv"` + k + s. Jedes Übungswort braucht einen Wörterbuch-Eintrag (Karte oder `GLOSS_EXTRA` in `js/inhalte.js`), sonst Hinweis „Wort ohne Wörterbuch-Eintrag“.
- Nach Inhaltsänderungen: `node tools/thema.mjs --vermerk <ids> --quellen "…" --chat D`, `node tools/pruefen.mjs` (muss „Alles in Ordnung“), `node tools/vorgriff.mjs <ids>` (Hinweise von Hand prüfen), 3–4 Zeilen `docs/entscheidungen.md`, Commit deutsch, `git push origin HEAD:main`, `node tools/ci-status.mjs --warten`.
- **`pruefen.mjs` nie in mehreren Agenten gleichzeitig laufen lassen** (gleichzeitige Läufe ergaben falsche Fehlerzeilen).
- Engine nur in opi-suomea ändern, dann Workflow „Engine übernehmen“ (`engine-uebernehmen.yml`) im Deutsch-Trainer auslösen und abwarten (Commit „Engine von Opi suomea übernommen (Stand …)“), dann pullen.
- Die Umgebung startet etwa stündlich neu: Zwischenstände auf dem eigenen Arbeitszweig committen und pushen (nicht `main`), damit nichts verloren geht. Große Arbeit gut mit Helfer-Agenten, die Patch-/JSON-Dateien schreiben; selbst prüfen, dann anwenden.
- Quellen: `node tools/quellen.mjs --sprache de <wort>`, DWDS (`/wb/`, `/lemma/flexion/`), Duden, Lingolia, nthuleen, yourdailygerman, easy-deutsch (Netzfreigaben vorhanden; lingoni.com, www.deutschplus.net, goethe.de gesperrt/unbrauchbar).

## 5. Offen außerhalb des Auftrags
- D-1020-37: Tempo-Änderungen erst nach Auroras echtem Bericht (Auswertung nur im privaten Repo `klinsermatthias-cmd/lernprotokoll-privat`).
- Geplanter Bericht-Wecker `trig_016EYSttphVmfwMysydCZBKm` ist deaktiviert (so lassen).
- Vorgriff-Fehlalarme in d35 (ex18 „meiner Mutter Blumen“, ex58 Komma nach Briefanrede) sind bekannt.
