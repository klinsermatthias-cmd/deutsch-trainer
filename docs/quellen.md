# Quellen für Deutsch-Inhalte (D-1010-3)

**Bei jeder Erstellung und jeder Prüfung von Inhalten verwenden** (D-1010-4) – jede deutsche Form, jedes Genus, jede Beugung, jede feste Wendung, jedes österreichische Wort und jede Niveau-Zuordnung wird nachgeschlagen, nicht erst bei Zweifel. Das gilt auch beim Prüfen von Coach-Urteilen, Berichten und `ki-pruefung.json`. In der Meldung an Matthias steht, was mit welcher Quelle geprüft wurde; was nur aus eigenem Wissen stammt, heißt „ohne Quelle“. Gesperrte Seiten nie als „geprüft“ angeben.

| Quelle | Wofür | Hinweis zum Abruf |
|---|---|---|
| **duden.de** | Rechtschreibung, Genus, Beugung, Bedeutungen, Vermerk „österreichisch“, Goethe-B1-Wortschatz-Hinweis | Suche: `/suchen/dudenonline/<Wort>`, Eintrag: `/rechtschreibung/<Slug>` (ä → ae) |
| **dwds.de** | Beispielsätze, Kollokationen, Häufigkeit, Natürlichkeit | `/wb/<Wort>` |
| **de.wiktionary.org**, **en.wiktionary.org** | Konjugations- und Deklinationstabellen, Genus, Varianten | Rohtext: `index.php?title=<Wort>&action=raw`; höchstens etwa 1 Abruf alle 2–3 s (sonst Fehler 429) |
| **grammis.ids-mannheim.de** | Grammatikregeln (IDS), z. B. Ersatzinfinitiv, Wortstellung | Inhalt lädt per JavaScript → mit Playwright öffnen |
| **ostarrichi.org** | österreichische Wörter und Wendungen, Dialekt | – |
| **integrationsfonds.at** (ÖIF) | Niveau A1–B2: Rahmencurricula und Einstufungsmatrizen (Grammatikliste je Stufe), Hefte „Deutsch lernen“ zu Alltagsthemen in Österreich | PDFs unter `/fileadmin/user_upload/…` (z. B. `B1_OEIF-Einstufungsmatrix_modular.pdf`, `B1_Rahmencurriculum_OEIF.pdf`) |
| **osd.at** (ÖSD) | Prüfungsformat und Modellsätze A1–C2 (ZB1, ZDÖ B1, ZB2) | PDFs auf den Seiten `/portfolio-item/osd-zertifikat-…` |
| **Goethe/ÖSD-Wortliste Zertifikat B1** | B1-Grundwortschatz mit Vermerken A/D/CH (z. B. „die Praxis → A: Ordination“) | PDF: https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_B1_Wortliste.pdf (am 13.10.2026 erreichbar) |
| goethe.de (übrige Seiten), coe.int, rm.coe.int | – | freigegeben, aber die Seiten blocken automatische Abrufe (403) |
| **duden.de/sprachwissen/rechtschreibregeln** | amtliche Regeln mit Nummer (z. B. D 132 Bindestrich bei Abkürzungen), Getrennt- und Zusammenschreibung | Seite `/sprachwissen/rechtschreibregeln/<Thema>` (am 19.10.2026 erreichbar) |
| **de.wikipedia.org** | Sachwissen zu Österreich (Behörden, e-card, Verkehr), wenn die Amtsseiten gesperrt sind | mit Browser-Kennung abrufen (`curl -A "Mozilla/5.0 …"`), 5–10 s Pause zwischen Abrufen; am 19.10.2026 erreichbar |
| **en.wikipedia.org** | Lernmethode: *Testing effect*, *Spacing effect*, *Generation effect*, *Desirable difficulty* (Belege für Abfragen, Spacing, Satzbildung, gemischte Wiederholung) | wie de.wikipedia; Seiten zu *Interleaving* gibt es dort nicht (404) |

Am 13.10.2026 antworteten lingolia, dw.com und schubert-verlag.de wieder (Status 200, Gesamtprüfung S-1013-23) – vor Gebrauch kurz testen. Vom Netz gesperrt (Stand 10.10.2026, nicht verwenden): openthesaurus, korrekturen.de, lingolia, mein-deutschbuch, dw.com, oesterreichisches-woerterbuch.at, rechtschreibrat.com, leo, linguee, verbformen.de, schubert-verlag, sprachportal.integrationsfonds.at, oesterreich.gv.at, wien.gv.at, de.wikipedia.org, telc.net.

**Stand 20.10.2026:** grammis lädt nur per JavaScript (Playwright nötig); DWDS-Korpussuche verlangt Anmeldung (401), das DWDS-Wörterbuch (`/wb/`) geht. **Stand 19.10.2026 (Grammatik-Prüfung D-1019-1):** erreichbar: duden.de, dwds.de, wiktionary, lingolia, dw.com, de./en.wikipedia.org, ÖIF- und Goethe-PDFs. Gesperrt (keine Antwort oder 403): oesterreich.gv.at, ris.bka.gv.at, wien.gv.at, chipkarte.at, wienerlinien.at, gesetze-im-internet.de, verbformen.de, korrekturen.de, goethe.de-Seiten. Ersatz für Amtsseiten: de.wikipedia (als Sachquelle angeben, nicht als Amtsquelle).

Erster Schritt für Formen: `node tools/quellen.mjs --sprache de <Wort>` (englisches Wiktionary, Abschnitt „German“, kompakt); danach Duden/DWDS wie oben. Grammatikregeln: grammis bzw. lingolia (S-1013-50).
