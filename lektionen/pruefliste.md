# Prüfliste für Deutsch-Inhalte

**Pflichtlektüre**, bevor Claude Themen, Übungen, Wortlisten oder Einstufungstest-Aufgaben erstellt oder ändert; **vor jedem Push** Zeile für Zeile durchgehen. Jede neue Meldung oder Lehre ergibt eine **neue Zeile** (nur anhängen; Beispiel und Herkunft mit derselben Nummer in `lektionen/pruefliste-beispiele.md`). Quellen und Abrufhinweise: `docs/quellen.md`.

Test: was `node tools/pruefen.mjs` erkennt; „Hand“ = nur Claude prüft (fehlt ein Test → in der Engine in opi-suomea ergänzen, D-1020-6).

| # | Regel | Test |
|---|---|---|
| 1 | Jeder Satz korrekt und so, wie man ihn in Österreich sagt; jede neue/geänderte Form mit Quelle (`docs/quellen.md`), sonst „ohne Quelle“ melden | Hand |
| 2 | Lücke eindeutig: `h` sagt, was gesucht ist (Zeit, Fall, Person), ohne Bau-Rezept; der Kontext lässt nur eine Form zu | teilweise |
| 3 | Nur Gelerntes abfragen: jedes verlangte Wort steht in einer Wortliste bis zu diesem Thema | Warnung |
| 4 | Keine doppelten Karten über alle Wortlisten (Ausnahmen: `pruef-ausnahmen.json` „doppelt“) | Hinweis |
| 5 | Alle natürlichen Varianten in `a`, auch österreichische | Hand |
| 6 | Theorie-Tabellen höchstens 3 Spalten, Lücken in höchstens einer Spalte | Hinweis |
| 7 | Großschreibung in Musterlösungen korrekt | Hand |
| 8 | Umlaute in Musterlösungen exakt (nur ß/ss gilt als „fast richtig“) | Hand |
| 9 | Satz ordnen: alle richtigen Wortstellungen in `a`, die natürlichste zuerst | ja |
| 10 | Alternativen je Lücke nur, wenn keine falschen Mischformen entstehen; sonst Coach entscheiden lassen | Hand |
| 11 | Klammer-Hinweise auf Karten Englisch → Deutsch verraten die Lösung nicht | App verdeckt |
| 12 | Bestehende Themen: Vokabeln und Übungen nur hinten anhängen; Indizes und IDs nie ändern | ja |
| 13 | Gibt es neben der Duden-Schreibung eine amtliche Markenschreibung, beide in `a`/`s` | Hand |
| 14 | Einstufungstest und Lehrplan gegen ÖIF-Matrix/Rahmencurriculum der Stufe abgleichen | Hand |
| 15 | Genug Übungen: je Thema etwa 50, mindestens 40 (D-1019-67, wie Zeile 22), ≥ 6 Formate, Schwerpunkt auf selbst gebildeten Sätzen; je `les`/`sch`/`dlg` ≥ 3 Varianten | teilweise |
| 16 | **Wortkarten im Format D-1020-29:** Verb mit k (regelmäßig/unregelmäßig …), Stammformen s, Präsens/Präteritum/Perfekt für alle sechs Personen (DWDS), Gebrauch g bei Dativ-/Akkusativverben; Nomen mit Plural oder „ohne Plural“; Adjektiv mit k und Steigerung; Wendung („einen Ausflug machen“) mit wa „Wendung“, k „mit <Verb> (regelmäßig)“, s = Perfekt, ohne Tabelle (D-1020-38); Grundverb als eigene Karte (D-1020-39); sonst wa | automatisch (Verben, Adjektive) |
| 17 | Österreichisches Wort: „Germany: …“ auf der Karte und im GLOSS-Eintrag; die bundesdeutsche Form gilt in Lösungen mit, außer das Wort ist vorgegeben | teilweise |
| 18 | Theorie nach S-1013-34 gegliedert (Wichtigstes, Überblick, Teilregeln, ⚠ Watch out, 🇦🇹 Austria); ≥ 3 Regelfragen, 1 `zuo`, 1 `luk`; mehr als 3 Teilregeln → Teilthema `…b`; Teilregel = eigene Bildungsregel, Überblick/Vergleich/Strategie/Wortschatz zählen nicht (D-1019-70) | teilweise |
| 19 | Jede Regel und jedes `x` gegen grammis/lingolia/DWDS prüfen, Vollständigkeit gegen das passende Kapitel; danach Prüfvermerk mit den benutzten Quellen | Hand |
| 20 | **Kein Vorgriff (S-1014-1, D-1014-62):** jede Pflichtantwort eines Schritts (Wort, Endung, Hilfsverb, Wortstellung, Präposition + Fall, Zeitform) ist in den Theorie-Abschnitten bis zu diesem Schritt oder in einem **früheren** Thema der Lernreihenfolge (req) gelehrt. Vor dem Push: Schritte durchrechnen und die Markersuche über alle Themen laufen lassen (als/konnte/musste, Präposition + Dativ, Wechselpräpositionen, Konnektoren späterer Themen, Präteritum). Treffer → Übung `aus: true`, Ersatz hinten anhängen und in den richtigen Schritt; nie in einen Schritt verschieben, der die Regel nicht lehrt. 2–5 Schritte, je ≥ 8 Übungen in ≥ 3 Arten; nur der letzte mischt. Ein Beispiel in der Theorie reicht nicht – die Regel zum Bilden muss im selben oder einem früheren Schritt stehen (S-1014-52; Schritt-Marker `<id>/<k>` in `lektionen/vorgriff.json`, S-1014-53) | teilweise (Indizes, Anzahl, Arten, ausgeblendete) |
| 21 | **Eigene Wörter im Bericht (S-1014-51):** jedes neue eigene Wort mit Quelle prüfen – Artikel + Plural, Bedeutung, Österreich-Hinweis, Verb mit vier Formzeilen (S-1014-26); Fehler mit Korrektur an Matthias melden | Hand |
| 22 | **Übungszahl (D-1014-76):** je Thema etwa 50 Übungen im Hintergrund, eine Runde zieht 20; bestehende Themen nicht kürzen, neue Themen ~50, je Lernschritt ≥ 8 (gilt statt „über etwa 35 lieber teilen“ in Regel 15) | teilweise (≥ 8 je Schritt) |
| 23 | **Theorie verständlich (D-1020-2):** die 7 Leitlinien in `docs/ablauf-thema.md` erfüllt – Kurz-Kasten nur Kernregeln mit Beispiel, Fachwörter erklärt, eine Regel = ein Abschnitt mit Entscheidungsweg, Nebenwissen am Ende statt gestrichen, Text in Lernreihenfolge, Beispiele nur mit Gelerntem, nichts fehlt (mit Quelle) – ohne Höchstgrenzen | Hand |
| 24 | **`req`-Kette (D-1019-59):** `req` enthält alle Themen, deren Stoff das Thema verwendet, auch indirekt; Kette nachrechnen (fehlt d04 in d08, obwohl d05 d04 braucht → anhängen); neue IDs nur hinten anhängen | Hand |
| 25 | **Quelle gelesen (D-1019-71):** ✓ nur mit selbst gelesener Fundstelle (Abruf 200); 403, 404, gesperrte Seiten und reine Websuche-Auszüge heißen „ohne Quelle“ | Hand |
| 26 | **Übungsmix (D-1019-68):** neue Themen ≥ 40 % Satzbildung (`tr`/`sch`/`ord`/`dlg`), ≤ 30 % `gap`, ≤ 6 `mc` mit gleich langen Optionen, `x` bei typischen Fallen; Futur bis d17 nur auf der Verbkarte (D-1019-69) | Hand |
| 27 | **Wortpakete (D-1019-67):** 20–30 Wörter, etwa 30 Übungen, jedes Wort in mindestens einer Übung, ohne `req`, 🇦🇹-Wort mit „Germany: …“ | teilweise |
