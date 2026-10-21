# Lehrplan – Deutsch Trainer

**Sicheres Deutsch im Alltag und Beruf in Österreich auf B2-Niveau.** Keine Prüfung angestrebt – der Maßstab sind echte Situationen, nicht ein Prüfungsformat.

Kann-Sätze (am GER B2 orientiert, auf das Leben in Österreich zugeschnitten):
- **Behörden:** Formulare und Bescheide im Wesentlichen verstehen und ausfüllen (Meldezettel, Anträge), am Schalter oder Telefon nachfragen und Missverständnisse klären.
- **Gesundheit:** Beschwerden genau beschreiben, das Arztgespräch und einen Beipackzettel verstehen, Termine vereinbaren und verschieben.
- **Wohnen:** Mietvertrag und Hausordnung in den Grundzügen verstehen, Mängel melden, mit Hausverwaltung und Nachbarn etwas aushandeln.
- **Arbeit:** formelle E-Mails schreiben, in Besprechungen die eigene Meinung begründen, Kolleginnen und Kollegen etwas erklären.
- **Telefonieren:** ein Anliegen klar vorbringen, Rückfragen stellen, eine Nachricht hinterlassen.
- **Reklamation/Beschwerde:** höflich, aber bestimmt formulieren – mündlich und schriftlich.
- **Small Talk und Beziehungen:** flüssig über Erfahrungen, Pläne und Gefühle erzählen.
- **Medien:** die Hauptaussagen von Nachrichten (ORF, Zeitung) verstehen.
- **Österreichisch:** häufige österreichische Wörter und Wendungen verstehen und selbst verwenden; Dialekt passiv in Grundzügen verstehen.

## Methode
- **Handlungsorientiert (GER):** Jedes Thema verbindet eine Alltagssituation in Österreich mit dem Grammatik-Baustein und dem Wortschatz, den sie braucht.
- **Bedarfsorientiert:** Einstufungstest und Berichte bestimmen Auswahl und Reihenfolge – nur, was noch nicht sicher sitzt.
- **Wortschatz als Chunks:** feste Wendungen und Kollokationen („einen Antrag stellen“, „einen Termin verschieben“) statt isolierter Einzelwörter; Wortfamilien mitlernen.
- **Spiralprinzip:** Pronomen, Zeiten und Fälle (Auroras bekannte Schwächen) kommen in jedem Thema wieder vor.
- **Abwechslung:** je Thema 2–3 Varianten von `les`, `sch` und `dlg` mit verschiedenen Situationen.
- **Wiederholung:** Spaced Repetition; nach etwa 6 Themen ein kurzer Wiederholungstest, danach Neuplanung.
- **Checkpoints prüfen nach (S-1013-17):** Bereiche, die im Einstufungstest nur ein Item hatten (deshalb, trotzdem, obwohl, je … desto, damit, Passiv, Futur I, da, falls), bekommen beim nächsten Checkpoint je 2–3 Wiederholungsitems; dazu eine Wortschatz-Stichprobe (etwa 30 Wörter) und vor Block C ein kurzer B2-Zusatztest.
- **Fehlerkorrektur:** konkret und mit Regel; die Urteile von Coach prüft Claude bei jedem Bericht (`docs/ki-qualitaet.md`).

## Grundsätze (Themenplan D-1012-11, aus S-1011-23)
- **A1 → A2 → B1 → B2:** zuerst Lücken auf A1/A2-Niveau (Block A), dann B1 festigen (Block B), dann B2 (Block C, vorläufig). Innerhalb eines Blocks entscheidet, was worauf aufbaut.
- **Jedes Thema:** Alltagssituation in Österreich + Grammatik-Baustein mit **höchstens 3 neuen Teilregeln** (durch „;“ getrennt; „Detail“ = keine neue Teilregel), Übersicht des ganzen Systems am Anfang der Theorie, etwa 70 % Übungen zu den Schwächen und 30 % Kontrast/Umbau/Mischung, freie Aufgaben ohne vorgegebenen Bauplan. Was im Test schon sicher war (Präsens, Komparation, deshalb/trotzdem/obwohl, je … desto, indirekte W-Fragen, Lesen), kommt nur als Kontrast vor.
- **`req` (D-1019-59):** alle Themen, deren Stoff das Thema verwendet, auch indirekt (Kette nachrechnen; Spalte `req`). d04–d05b sind A1/A2-Wiederholung und stehen darum nach d02b. Nomen-Verb-Verbindungen kommen früh als Karten in passende Situationen (System erst d29).
- **Aus Testergebnissen werden Themen:** Jede Schwäche aus Einstufungstest oder Bericht wird einem Thema zugeordnet (eigenes Thema oder Teilregel in einem bestehenden); was sicher sitzt, bekommt kein eigenes Thema.
- **Checkpoint** = Bericht an Claude → Analyse → Neuplanung (Themen, die schon sitzen, werden gestrichen).
- **d03 nach d09b:** d09 und d09b stehen in `req` von d03 (D-1012-17, S-1013-16); seit D-1019-57 steht d03/d03b auch in der Datei direkt hinter d09b. Ist d03 schon frei, sperrt die App es nicht wieder.
- **Grundwortschatz (S-1013-18):** ab d10 je Thema 5–10 Karten Grundwortschatz aus dem Alltagsfeld der Situation. Wörter für Behörde und Wohnung früher: Antrag, ausfüllen, unterschreiben → d10/d11; Hausverwaltung, Stiege, Stock → d11/d14; Frist, Termin → d13b. Österreichische Uhrzeit und Datum (viertel/dreiviertel acht, Feber, heuer) in d13b. Die Goethe-/ÖSD-B1-Wortliste darf als Quelle dienen, kommt aber nie ins Repo.
- **Bau eines Themas** (Theorie-Gliederung, Übungen, Lernschritte): `docs/ablauf-thema.md`.

## Gebaute Themen (Lernreihenfolge)
Reihenfolge nach `req` (steht in `lektionen/lektionen.json`). Alle haben Lernschritte; Vorgriffe in den Schritten wurden am 14.10.2026 gesucht und behoben (D-1014-57/-58/-59), d09/d09b kommen vor d06 (D-1014-60).

| ID | Titel | Niveau |
|---|---|---|
| d01 | Wie war dein Wochenende? – Perfekt I: so bildest du es | A2 |
| d01b | Wohin bist du gefahren? – Perfekt II: haben oder sein? | A2 |
| d02 | Ich kann leider nicht kommen – Wortstellung I: der Hauptsatz | A2 |
| d02b | Ich weiß nicht, ob ich kommen kann – Wortstellung II: der Nebensatz | A2 |
| d04 | Was brauchen wir vom Markt? – der, die, das | A1 |
| d04b | Zwei Kilo Erdäpfel, bitte – der Plural | A1 |
| d35 | Wer, wen, wem, wessen? – die 4 Fälle (Paket, Teil 1: Artikel, Pronomen, Fall-Finder, Präpositionen, Genitiv, n-Nomen; D-1020-46/-52) | A2–B1 |
| d05 | Ein Geschenk für die Kollegin – Akkusativ üben (Übungsthema zu d35, D-1020-53) | A1/A2 |
| d05b | Wem schenken wir die Blumen? – Dativ üben (Übungsthema zu d35, D-1020-53) | A2 |
| d09 | Wie komme ich zur Post? – Präpositionen mit festem Kasus | A2 |
| d09b | Seit wann wohnst du hier? – wo, wohin, woher; seit und vor | A2 |
| d03 | Als ich nach Österreich kam – als, wenn, wann | B1 |
| d03b | Bevor ich zur Arbeit gehe – während, bevor, nachdem | B1 |
| d06 | Kannst du mir helfen? – Personalpronomen | A1++/A2++ |
| d06b | Das gefällt mir! – Verben mit Dativ | A2 |
| d07 | Ist das deiner? – meiner, einer, keiner | A2 |
| d07b | Den nehme ich! – der, die, das allein und welcher? | A2 |
| d08 | Nehmen Sie die Tabletten! – der Imperativ | A2 |
| d08b | Ich habe mir den Fuß verletzt – Körper und Befinden | A2 |
| d11 | Wohin kommt das Sofa? – Wechselpräpositionen | A2 |
| d34 | Wer? Wen? Wem? – alle Fälle gemischt üben (Übungsthema zu d35, D-1019-63, D-1020-53) | A2 |
| d36 | Der alte Tisch, ein größeres Büro – Adjektive und Steigerung (Paket, Teil 2; D-1020-52) | A2–B1 |
| d14 | Die helle Wohnung im zweiten Stock – Adjektivendungen I | A2+ |
| d15 | Ein großer Balkon, frisches Brot – Adjektivendungen II | A2+ |
| d16 | Könnten Sie mir sagen, ob …? – Konjunktiv II höflich | A2++ |

Wortschatz-Pakete ohne `req`, jederzeit neben den Grammatikthemen (S-1014-5, `wort: true`):

| ID | Titel |
|---|---|
| w01 | Wohnen – Wohnung suchen und mieten |
| w02 | Arbeit – Stellensuche und Arbeitsalltag |
| w03 | Gesundheit – Körper, Krankheit, Notfall |
| w04 | Ämter und Behörden – Formulare, Dokumente, Anmeldung |
| w05 | Essen und Einkaufen – Lebensmittel und Gasthaus |
| w06 | Freizeit und Reisen – Hobbys, Kultur, unterwegs |

## Geplante Themen
Neue Reihenfolge (S-1014-15): nach d11 kommen d14/d15 (Adjektivendungen) → d16 (Konjunktiv II höflich), danach Block B ab d10. Jedes neue Thema bekommt vor der Veröffentlichung Lernschritte und wird nach Prüfliste 19 und 20 geprüft.

| ID | Titel | Niveau (ÖIF) | Alltagssituation | Grammatik-Baustein | req | Stand |
|---|---|---|---|---|---|---|
| d10 | Ich habe warten müssen – Perfekt III: Modalverben und unregelmäßige Partizipien | A2 | Verspätung oder Missgeschick erklären | Wiederholung haben/sein aus d01b; unregelmäßige und gemischte Partizipien nach Gruppen; musste ↔ habe … müssen (Ersatzinfinitiv, auch im Nebensatz) – Detail: reflexive Verben mit haben, hat gekonnt (Modalverb ohne Infinitiv) | d01, d02, d03, d08, d08b, d01b, d02b | geplant |
| d12 | Worüber ärgerst du dich? – Verben mit Präposition | A2+/A2++ | Small Talk: Hobbys, Pläne, Sorgen | Verben/reflexive Verben mit fester Präposition (Detail: auch Nomen – Angst haben vor, Lust haben auf, Interesse haben an; sich freuen auf ↔ über); Detail: Indefinitpronomen jemand/niemand, etwas/nichts, alle/einige (S-1013-16); Fragen wo(r)- (Sachen) / Präposition + wen/wem (Personen); da(r)-Wörter – Karte: Rücksicht nehmen auf | d01, d02, d05, d06, d08, d09, d11, d08b, d05b, d35 | geplant |
| d13 | Wer macht was bis wann? – Wortstellung III: das Mittelfeld | A1+–B2 | Besprechung: Aufgaben und Termine verteilen | Wiederholung Satzklammer + Mittelfeld im Zusammenhang (Zeit – Grund – Art – Ort, Pronomen vor Nomen; Haupt- + Nebensatz); Verbkomplex im Nebensatz (… kommen kann, … hat machen müssen); „nicht“ für den ganzen Satz ↔ einen Teil (nicht heute, sondern morgen) – Detail: muss nicht (= not necessary) ↔ darf nicht (= not allowed) (S-1013-16) – Karten: einen Vorschlag machen, eine Entscheidung treffen | d01, d02, d06, d08, d10, d02b, d04, d35 | geplant |
| | *Checkpoint 2 (d03, d08–d13; d03 direkt nach d09b, S-1013-16)* | | | | | |
| | **Block B – B1 festigen** | | | | | |
| d13b | Am Montag um viertel neun – Zeitangaben | A2 | Termine vereinbaren und verschieben (Ordination, Hausverwaltung, Amt) | temporale Präpositionen am/im/um, in ↔ vor ↔ seit, ab, von … bis; Uhrzeit offiziell ↔ im Alltag, österr. viertel/dreiviertel acht; Datum (am 5. Feber; heuer) – Karten: einen Termin vereinbaren/verschieben, die Frist | d01, d02, d09, d09b, d14, d35, d36 | geplant (S-1013-16/-18) |
| d22 | Damals war alles neu – Präteritum und Plusquamperfekt | B1+ | Schadensmeldung an Versicherung/Hausverwaltung, ORF-Meldung lesen | Präteritum (produktiv nur Mischverben und ca. 20 häufigste starke Verben inkl. wurde, Rest erkennen); Plusquamperfekt + Zeitenfolge mit nachdem; Zeitachse aller Zeiten (mündlich/schriftlich in Österreich) mit Umbau | d01, d02, d03, d10, d21, d01b, d03b | geplant |
| d17 | Der Meldezettel wird ausgefüllt – werden und Passiv I | A2++ (Futur-Gebrauch B1++) | Behördenweg: Meldezettel, Antrag, Konto | werden dreifach (Vollverb ist geworden – Futur für Versprechen/Vorhersage ↔ Präsens + Zeitangabe – Passiv-Hilfsverb); Passiv Präsens (wird ausgefüllt); von + Dativ, man ↔ Passiv – Karte: einen Antrag stellen | d01, d02, d05, d09, d10, d01b, d35 | geplant |
| d18 | Wegen eines Staus zu spät – Genitiv | B1/B1+ | Verspätung entschuldigen, Brief von der Behörde | Genitiv-Grundformen kennt Aurora aus d35 – hier nur Neues: Genitiv-Präpositionen wegen/trotz/während/statt (Hinweis: umgangssprachlich und österr. oft mit Dativ), Adjektiv im Genitiv (-en), Genitivattribut in Behördentexten (D-1021-11) | d01, d02, d04, d05, d09, d15, d05b, d35, d36 | geplant |
| d19 | Die Kollegin, die neben mir sitzt – Relativsätze I | B1 | Im Büro Leute und Dinge beschreiben | Relativpronomen Nom./Akk./Dat. (inkl. denen); Verb am Ende, Komma; Relativ- ↔ Demonstrativpronomen (gleiche Formen) | d01, d02, d04, d05, d06, d07, d02b, d05b, d07b, d35 | geplant |
| | *Checkpoint 3 (d14–d19)* | | | | | |
| d20 | Ich versuche, pünktlich zu sein – Infinitiv mit zu | B1 | Kurs anmelden, Vorsätze, Aufgaben bei der Arbeit | zu-Infinitiv (auch trennbar: anzurufen); um … zu (↔ damit, Stärke); ohne … zu, statt … zu | d01, d02, d13, d02b | geplant |
| d21 | Seitdem ich hier wohne … – Zeitsätze II | B1 | Lebenslauf bei Behörde/AMS, Arbeitszeiten | seit(dem) + Präsens; bis, sobald; Wiederholung Präposition ↔ Konjunktion ↔ Adverb aus d03b – Detail: während adversativ (= whereas) (S-1013-16) – Karte: Erfahrungen sammeln | d01, d02, d03, d09, d18, d09b, d03b, d02b, d35 | geplant |
| d23 | Die Heizung ist repariert worden – Passiv II | B1+ | Mängel bei der Hausverwaltung melden | Passiv Präteritum (wurde repariert); Passiv Perfekt (ist … worden); Passiv mit Modalverb (muss repariert werden), Nebensatz als Anwendung – Detail: lassen + Infinitiv (Ich lasse die Heizung reparieren.) (S-1013-16) | d01, d02, d10, d13, d17, d22, d01b, d02b | geplant |
| d24 | Die Firma, bei der ich arbeite – Relativsätze II | B1+ | Arbeitsplatz und Wohnung beschreiben | Relativsatz mit Präposition; dessen/deren; wo/was (kurz, Stärke) | d01, d02, d09, d12, d18, d19, d11, d35 | geplant |
| d25 | Nicht heute, sondern morgen – Konnektoren | A2–B1++ | Reklamation, Beschwerde-E-Mail | da (Verb am Ende) ↔ denn ↔ weil; falls ↔ wenn; entweder … oder, sowohl … als auch, nicht nur … sondern auch, weder … noch (S-1013-16) – Wiederholung aus d02: sondern ↔ aber, denn auf Position 0 (deshalb/trotzdem/obwohl nur als Kontrast) – Karten: Redemittel Meinung (Ich bin der Meinung, dass …; Meiner Meinung nach …) | d01, d02, d03, d13, d02b | geplant |
| d26 | Hätte ich das nur gewusst! – Konjunktiv II irreal | B1/B1++ | Pläne, Träume, Ratschläge, Bedauern | irreale Bedingung und Wunsch in der Gegenwart (falls nur real); Vergangenheit: hätte/wäre + Partizip II; hätte … sollen/können | d01, d02, d10, d16, d25, d01b, d02b, d36 | geplant |
| | *Checkpoint 4 (d20–d26) = Ende Phase 1, Block C neu planen* | | | | | |
| | **Block C – B2 aufbauen (vorläufig)** | | | | | |
| d27 | Beim Lesen des Mietvertrags – Nominalisierung | B2 | Mietvertrag, Hausordnung, Behördenbrief | Nominalisierung ↔ Verbalisierung; beim/zum + Infinitiv (groß); aufgrund, infolge, innerhalb, außerhalb | d01, d02, d15, d18, d21, d25, d35, d36 | geplant |
| d28 | Das Amt ist geschlossen – Zustandspassiv und Passiversatz | B2 | Öffnungszeiten, Bescheid | Zustandspassiv (ist/war geöffnet); sich lassen, -bar; sein + zu | d01, d02, d20, d23 | geplant |
| d29 | Einen Antrag stellen – Nomen-Verb-Verbindungen | B2+/B2++ | Behörde, Besprechung | Nomen-Verb-Verbindungen systematisch (die getesteten schon vorher als Karten); Nomen und Adjektive mit Präposition (Interesse an, zufrieden mit) | d01, d02, d12, d27 | geplant |
| d30 | Die neu eröffnete Filiale – Partizipialattribute | B2+ | Stellenanzeigen, Bewerbung | erweitertes Attribut mit Partizip I/II (Umbau Relativsatz → Attribut) | d01, d02, d15, d19, d23, d35, d36 | geplant |
| d31 | Er dürfte krank sein – Vermutungen und Modalpartikeln | B2+ | Small Talk, Gerüchte im Büro, Österreichisch verstehen | dürfte/müsste/könnte, soll (angeblich); werden + wohl (Futur I/II als Vermutung); Modalpartikeln doch, ja, halt, eh, schon | d01, d02, d16, d17, d36 | geplant |
| d32 | Zwar …, aber … – Konnektoren II | B2++ | Besprechung: Meinung begründen | zwar … aber; sodass / so … dass; indem | d01, d02, d25, d26 | geplant |
| d33 | Laut ORF … – Konjunktiv I | B2++ | Nachrichten verstehen und wiedergeben | Konjunktiv I in der indirekten Rede (Ersatz durch Konjunktiv II); als ob (irrealer Vergleich) | d01, d02, d26, d31, d02b | geplant |

Umfang: 30 neue Themen ≈ 30–60 Wochen; Block C wird beim Checkpoint 4 neu geplant.

## Nächste Schritte
1. d14, d15, d16 gebaut; Fehler finden/Umformen in d01–d09b ergänzt (S-1014-15); Wortlisten d01b–d07b gebaut (S-1014-16); weiter: Lesetexte 150–300 Wörter (D-1014-45), Themenfeld-Wortgruppen nach Engine -44 (D-1014-46).
2. Nach d07: Checkpoint 1 (Bericht → Analyse → Neuplanung, mit den Wiederholungsitems aus S-1013-17).
3. Prüfung 21.10.2026 (D-1021-11): als nächstes Thema **d13b** (Termine, Uhrzeit, Datum); **d22** (Präteritum) direkt danach, weil Aurora Präteritum in Berichten und Behördenbriefen ständig liest; `req` der geplanten Themen um d35/d36 ergänzt; Titel d10 (Perfekt III) und d13 (Wortstellung III) eindeutig gemacht; d18 nur noch Neues.
4. Vormerken (gebaut erst mit eigenem OK): Wortpakete **w07** Telefonieren und Reklamieren, **w08** Nachrichten und Medien, **w09** Dialekt verstehen; Thema ***lassen*** (lassen + Infinitiv, sich lassen) und **Wortbildung** (Komposita, -ung/-heit/-keit, un-, -bar).
