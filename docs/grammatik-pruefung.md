# Grammatik-Prüfung D-1019 (Stand: in Arbeit)

Auftrag D-1019-1: alle 22 Grammatik-Themen und w01–w06 gegen Online-Quellen prüfen – Vollständigkeit, Verständlichkeit, Beispiele, Aufbau (S-1013-34), Reihenfolge A1→B2, Methode, Übersichtsthemen, Systemlücken.
Ergebnisse zu Aurora: nur im privaten Lernprotokoll (D-1019-7). Quellen: `docs/quellen.md`.

## Checkliste (Zwischenstand – wird laufend gespeichert)
- [x] 1 Einstufungstest und Simulationsbefunde lesen (privat)
- [x] 2 Rahmencurriculum/Einstufungsmatrix ÖIF A1–B2 laden → Grammatik-Liste je Niveau
- [x] 3 Vollständigkeit: Liste gegen gebaute + geplante Themen
- [ ] 4 Themen einzeln (Klarheit, Beispiele, Aufbau, Vergleich lingolia/grammis/mein-deutschbuch/dw)
  - [ ] d01 [ ] d01b [ ] d02 [ ] d02b [ ] d03 [ ] d03b [ ] d04 [ ] d04b [ ] d05 [ ] d05b [ ] d09 [ ] d09b
  - [ ] d06 [ ] d06b [ ] d07 [ ] d07b [ ] d08 [ ] d08b [ ] d11 [ ] d14 [ ] d15 [ ] d16
  - [ ] w01–w06
- [ ] 5 Offene „ohne Quelle“-Punkte aus der Prüfung vom 13.10 (D-1019-9)
- [ ] 6 Reihenfolge, `req`, Übersichtsthemen – Vorschlag
- [ ] 7 Methode, Übungsmix, Regeln/Prüfliste – Verbesserungsvorschläge
- [ ] 8 `docs/quellen.md` aktualisieren (D-1019-2)
- [ ] 9 Vorschläge mit Codes ab D-1019-10 an Matthias
- [ ] 10 Repo- und App-Audit (Regeln, Texte, Auffindbarkeit für neue Chats, Token, alte Dateien, Stabilität, Funktion)
- [ ] 11 Übungs-Audit je Thema: reicht Menge/Vielfalt (Regeln D-1014-76 u. a.), was Quellen vorschlagen, verständlich, richtig, wirksam; Vorschlag Anzahl/Mix

## Ergebnisse

### 2 Niveau-Referenz (Quellen, Stand 19.10.2026)
- ÖIF veröffentlicht **kein** Grammatik-Inventar je Niveau: Rahmencurriculum-PDFs 404, „Vertiefungssprachkurse“-Konzept nennt nur „Grammatik der jeweiligen Niveaustufe“ (integrationsfonds.at, 200).
- Ersatz-Referenz **A2–B1:** *Deutsch-Test für Zuwanderer – Prüfungshandbuch*, Kap. 8.4 „Strukturen“ (Goethe/telc; goethe.de PDF, 200 – geprüft). Der DTZ ist inhaltlich nah an der ÖIF-Integrationsprüfung (A2/B1, Alltag Zuwanderer).
- Ergänzung **A2:** *Fit in Deutsch 2 – Prüfungsziele*, Inventar „Morphologische und syntaktische Strukturen“ (goethe.de PDF, 200 – geprüft). Trennt A2 sauber von B1.
- **A2 laut Fit 2:** Präsens/Perfekt; Präteritum nur haben, sein, kommen, sagen, Modalverben; KII nur möchte, hätte gern, könntest; Imperativ; Modal- und trennbare Verben; Genitiv nur bei Eigennamen (*Gerdas*); dieser, welch-, Possessiv, kein; man/jemand/etwas/nichts/mehr/alles; Personal- und Reflexivpronomen, **reziprok** *wir sehen uns*; Adjektiv attributiv **Nom./Akk.**, Komparation inkl. gern/lieber/am liebsten; Präpositionen temporal/lokal/modal (Wechselpräp.); Satzklammer, Negation, und/oder/aber/denn/deshalb/dann, dass/weil/wenn/indirekte Frage; Wortbildung -er, -ung, -in, un-, -los.
- **Zusätzlich B1 laut DTZ:** Präteritum der häufigen Verben, Plusquamperfekt, Futur I, KII hätte/wäre/sollte/könnte/würde, Passiv (Präs./Prät./Perf./mit Modalverb), Verb + Präposition mit da(r)-/wo(r)-, Genitiv, n-Deklination, Adjektiv im Dativ, Ordinalzahlen, -bar/-lich/-ig, Partizip als Nomen; derselbe, jed-/alle, einige/manche, wenige, irgendjemand, niemand; Präp. während/außerhalb/gegenüber/um … herum/wegen; Nebensätze ob, als, nachdem, bevor, seit(dem), da, um … zu, damit, so … dass, obwohl, (an)statt … zu; Relativsätze (auch mit Präposition, wo, was); zu-Infinitiv, (nicht) brauchen zu; entweder … oder, weder … noch, sowohl … als auch, nicht nur … sondern auch, je … desto; trotzdem/darum/deswegen/daher; trennbare Richtungspräfixe raus/rein/hin/weg/zurück/vorbei/weiter/zusammen. Partizip I und Konjunktiv I: nicht aktiv verlangt.

### 3 Vollständigkeit (Inventar ↔ gebaut ↔ geplant laut `docs/lehrplan.md`)
| Struktur (Niveau) | gebaut | geplant |
|---|---|---|
| Perfekt, haben/sein (A2) | d01, d01b | d10 (Ersatzinfinitiv) |
| Präteritum war/hatte/Modalverben (A2) | Kurzhinweis d01, d01b §8, d03 | d22 |
| Präteritum allgemein, Plusquamperfekt (B1) | Plusquamperfekt nur in d03b | d22 |
| Futur I (B1) | nur Formtabelle d01 | Teil von d17 |
| Imperativ, reflexive Verben (A2) | d08, d08b | – |
| Satzklammer, Inversion, deshalb/trotzdem (A2/B1) | d02 | d13 |
| Nebensatz dass/weil/ob/obwohl/wenn (A2/B1) | d02b | d25 (da, falls) |
| als/wenn/wann, bevor/nachdem/während (B1) | d03, d03b | d21 (seitdem, bis, sobald) |
| Genus, Plural, Kasus (A1/A2) | d04, d04b, d05, d05b | – |
| Präpositionen fest/Wechsel, wo/wohin (A2) | d09, d09b, d11 | d13b (temporal) |
| Personalpronomen, Verben mit Dativ (A2) | d06, d06b | – |
| Pronomen meiner/einer/keiner, dieser/welcher (A2) | d07, d07b | – |
| Adjektivendungen (A2 Nom./Akk., B1 Dat.) | d14, d15 | – |
| KII höflich (A2/B1) | d16 | d26 (irreal) |
| Verb + Präposition, da-/wo- (B1) | – | d12 |
| Passiv (B1) | – | d17, d23 |
| Genitiv, n-Deklination (B1) | Genitiv nur erwähnt in d14 | d18 |
| Relativsätze (B1) | – | d19, d24 |
| zu-Infinitiv, um … zu, statt … zu (B1) | – | d20 |
| Doppelkonnektoren, je … desto (B1) | – | d25 |
| damit, so … dass (B1) | – | d20 (damit), d32 (so … dass, B2) |
| Ordinalzahlen, Datum (B1) | nur Beispiel in d14 | teilweise d13b |
| Komparation, gern/lieber/am liebsten (A2) | nur „Komparativ vor dem Nomen“ (d15 §8) | **fehlt als Grundregel** |

**Fehlt im Plan ganz (Vorschlag folgt in Punkt 9):**
1. **Komparation** (*billiger als, so groß wie, am besten, lieber*) – A2-Kernstoff; d15 §8 setzt den Komparativ voraus (*den kleineren Tisch*), die Grundregel (Bildung, Umlaut, gut/besser/am besten, als ↔ wie, Superlativ) wird nirgends erklärt; im Alltag (Einkaufen, Wohnung vergleichen) sehr häufig.
2. **Indefinitpronomen** *jemand/niemand/etwas/nichts/alles, man* – Inventar A2/B1; in keinem Thema erklärt.
3. **Artikelwörter** *jed-, alle, einige, manche, derselbe* – nur nebenbei.
4. **Wortbildung** (-ung, -er, -in, -heit/-keit, un-, -los, -bar, -lich, Komposita mit Genus des letzten Worts) – A2/B1, nirgends; nützlich für Wortschatz-Wachstum.
5. **Richtungspräfixe** hin/her, rein/raus/rauf/runter – B1; im österreichischen Alltag (*geh eini, komm aussa* verstehen) besonders wichtig.
6. **(nicht) brauchen zu**, **reziprok** *sich/einander* – klein; passt als Detail in d20 bzw. d08b.
7. **Futur I** nur als Teil von d17 – reicht, wenn d17 es klar als eigenen Lernschritt führt (Lehrplan sagt „Futur-Gebrauch B1++“; DTZ verlangt es schon B1).

**Reihenfolge-Auffälligkeiten (Details in Punkt 6):**
- d04/d04b (A1: Genus, Plural) setzen d01–d02b (A2: Perfekt, Wortstellung) voraus. Bewusst so (Aurora startete auf A2-Niveau), aber die Etiketten A1 nach A2 wirken für Leser falsch.
- d03/d03b (B1) setzen d09/d09b voraus, stehen in der Datei aber vor d04 – die App wählt nach Dateireihenfolge das erste freie Thema, daher wirkungslos, nur verwirrend beim Lesen.


### 4 Themen einzeln

Bewertung je Thema: **Inhalt** (richtig? Quelle), **Umfang** (≤ 3 neue Teilregeln laut Lehrplan), **Klarheit**, **Vorschlag**. Quellen-Abruf 19.10.2026; „ohne Quelle“ = nicht belegt.

#### d01 Perfekt I (A2) – 10 Abschnitte + Verbformen, 5 Lernschritte, 80 Übungen
- **Inhalt richtig:** Perfekt = haben/sein + Partizip II; -ieren ohne ge- (*studiert*); sein bei Ortswechsel/Zustandsänderung, *bleiben, sein, werden* (lingolia „Perfekt“, 200). Untrennbare Präfixe be-, emp-, ent-, er-, ge-, miss-, ver-, zer- (Duden-Grammatik-Standardliste; Seite lingolia „Partizip II“ liefert 404 → hier ohne Online-Abruf). Perfekt ≈ englisches *simple past* im Gespräch, *seit* + Präsens: richtig (ohne Quelle, Standardwissen DaF). Österreich spricht fast nur Perfekt, *war* bleibt: Wikipedia „Oberdeutscher Präteritumschwund“ (200) bestätigt, dass *sein* und einige Hilfs-/Modalverben ihr Präteritum behalten.
- **Umfang zu groß:** neben den 3 Kernregeln (Bildung + Satzklammer, Partizip-Typen, haben/sein-Grundregel) kommen §3 Zeitformen-Überblick, §9 Vergleich Englisch, §10 Präteritum + Futur-Tabelle und der Nebensatz-Hinweis in §5 dazu. Für Aurora (Bericht: Verwirrung) zu viel auf einmal.
- **Verweis unscharf:** §10 „Separable verbs in the Präteritum … More in d03“ – d03 §8 behandelt nur *war/hatte/Modalverben*, nicht trennbare Verben im Präteritum.
- **Futur-Tabelle dreifach:** dieselbe *werden*-Tabelle steht in d01 §10, d02 und d03 (Regel `lektionen/README.md` Z. 19 „Lücken im Futur“ je Thema). Futur wird so dreimal „kurz“ gezeigt, aber nie eingeführt (geplant d17).
- **Vorschlag:** §10 kürzen auf einen Satz „Präteritum/Futur: später (d03, d17)“; §3 und §9 zu je 2 Zeilen; Futur-Tabelle in d02/d03 durch Verweis ersetzen (nur anhängen/ausblenden, nichts löschen). → Code in Punkt 9.

#### d01b Perfekt II: haben oder sein (A2) – 8 Abschnitte, 4 Lernschritte, 61 Übungen
- **Inhalt richtig:** 3 sein-Gruppen (Bewegung A→B, Zustandsänderung, *sein/bleiben/passieren*) gegenüber haben (alle anderen + Fallen *fahren* mit Akkusativ, reflexive Verben) – lingolia „Perfekt“ (200) nennt dieselben Gruppen inkl. *gelingen, geschehen*. 🇦🇹 *bin gesessen*: Duden „sitzen“ (200): „süddeutsch, österreichisch, schweizerisch: ist gesessen“ ✓.
- **Klarheit gut:** Überblick → je Gruppe ein Abschnitt → ⚠-Tabelle mit typischen Fehlern. Bestes Beispiel für S-1013-34.
- **Umfang:** §8 *war/hatte/musste* ist eine 4. Regel (Präteritum-Gebrauch), wiederholt in d03 §8. Vorschlag: in d01b behalten (passt zum Erzählen), in d03 §8 als Wiederholung kennzeichnen.

#### d02 Wortstellung I: Hauptsatz (A2) – 8 Abschnitte + Verbformen, 5 Lernschritte, 65 Übungen
- **Inhalt richtig:** Verb auf Position 2, Inversion bei anderem Satzanfang (lingolia „Hauptsätze“, 200); *und/aber/oder/denn* auf Position 0, *deshalb/trotzdem/dann* als Adverb auf Position 1 mit Inversion (lingolia „Konjunktionen“, 200); „Zeit vor Ort“ (lingolia „Hauptsätze“ ✓). Merkwort **TeKaMoLo**: ohne Quelle (DaF-Faustregel; Wikipedia-Artikel 404). 🇦🇹 *Ordination* (Duden: „Medizin, österreichisch“ ✓), *im Krankenstand sein* (Duden: „österreichisch“ ✓).
- **Umfang zu groß:** 5 Teilregeln (Position 2, Position 1, Verbklammer, Position 0/1, Satzmitte). Laut Lehrplan ≤ 3.
- **Vorschlag:** §8 Satzmitte (TeKaMoLo, Pronomen früh) nach d06 verschieben – lingolia behandelt die Mittelfeld-Ordnung zusammen mit der Objekt-Reihenfolge (Pronomen-Akkusativ vor Dativ), die d06 ohnehin braucht. In d02 nur „Zeit vor Ort“ als Satz behalten. Futur-Tabelle wie bei d01 durch Verweis ersetzen. Umsetzung nur anhängen/ausblenden.

#### d02b Wortstellung II: Nebensatz (A2) – 7 Abschnitte, 3 Lernschritte, 49 Übungen
- **Inhalt richtig:** Verb am Ende, zwei Verben (Modal/Perfekt) am Ende mit konjugiertem Verb zuletzt, Nebensatz zuerst → Hauptsatz beginnt mit Verb; *weil/da/obwohl* (lingolia „Konjunktionalsätze“, 200); *ob* in indirekten Fragen ohne Fragewort (lingolia „Indirekte Fragen“: „Gibt es kein Fragewort, verwenden wir … ob“ ✓); *weil* ↔ *denn* (lingolia „Konjunktionen“ ✓).
- **Umfang:** 3 Regeln ✓. *obwohl* ist laut DTZ B1 – im A2-Thema vertretbar, da Wortstellung gleich.
- **Lücke:** d03 verweist „*if* im Sinn von *whether* = *ob*, nicht *wenn* – siehe d02b“, d02b hat aber nur die Überblickszeilen „ob = whether, if“ / „wenn = if, when“, keinen Kontrast.
- **Vorschlag:** ⚠-Zeile anhängen: *Ich weiß nicht, wenn er kommt* ✗ → *ob er kommt* ✓ („if = whether → ob“), plus 2 Lückenübungen ob/wenn. Ersatzinfinitiv-Ausnahme bleibt bei d10 (richtig so).

#### d03 als, wenn, wann (B1) – 8 Abschnitte + Verbformen + Futur, 5 Lernschritte, 64 Übungen
- **Inhalt richtig:** *als* temporal für Vergangenes (Duden „als (temporal)“, 200: „drückt die Vor-, Gleich- oder Nachzeitigkeit aus … damals, als sie noch klein war“); *wenn* für Bedingung, Zukunft und „mehrfache [regelmäßige] Wiederholung; sooft … jedes Mal, wenn“ (Duden „wenn“, 200 ✓); *als* und *wenn* als Temporal-Subjunktionen mit Verb am Ende (lingolia „Konjunktionalsätze“ ✓). Die Faustregel „*als* = einmal/ein Zeitraum in der Vergangenheit“ ist so wörtlich nur in DaF-Lehrwerken zu finden (ohne Online-Quelle, aber durch die Duden-Beispiele gedeckt). *konnte* ↔ *könnte* (Präteritum ohne Umlaut, Konjunktiv II mit): lingolia „Konjunktiv“ ✓. *war/hatte/Modalverben* bleiben im Präteritum: Wikipedia „Oberdeutscher Präteritumschwund“ ✓, lingolia „Präteritum“ („im Mündlichen meist Perfekt“) ✓. *als* = Duden B1-Wortschatz ✓.
- **Umfang:** 3 Kernregeln (als/wenn/wann) ✓ + §8 Präteritum (Wiederholung aus d01b §8) + Futur-Tabelle (Dopplung, siehe d01).
- **Klarheit:** Überblick §3 als Entscheidungsfrage („Ask yourself“) ist sehr gut. Erster Lernschritt ist aber §8 Präteritum – das Thema heißt „als, wenn, wann“, beginnt aber mit einer Wiederholung. Verweis „*ob* – see d02b“ ohne Inhalt dort (siehe d02b).
- **Vorschlag:** §8 als „Wiederholung aus d01b“ kennzeichnen; Futur-Tabelle → Verweis; ⚠-Zeile *ob* ↔ *wenn* in d02b ergänzen (dann stimmt der Verweis).

#### d03b während, bevor, nachdem (B1) – 6 Abschnitte, 3 Lernschritte, 37 Übungen
- **Inhalt richtig:** *nachdem* „drückt die Vorzeitigkeit … aus: nachdem ich gegessen hatte, legte ich mich hin“ (Duden „nachdem“, 200 ✓); Plusquamperfekt = *hatte/war* + Partizip II für das Frühere (lingolia „Plusquamperfekt“ ✓); *bevor/während/nachdem* als Subjunktionen, Verb am Ende, Nebensatz auf Position 1 (lingolia „Konjunktionalsätze“ ✓). Tabelle Präposition – Konjunktion – Adverb: sachlich richtig, lingolia „Präpositionen temporal“ (*vor, nach, während* + Genitiv) ✓.
- **Hinweis Quelle:** lingolia hat auch *nachdem jeder Gast ein Zimmer hat* (gleiche Zeit bei Zustand). Die Regel „eine Zeit früher“ gilt für Handlungen – für B1 richtig vereinfacht.
- **🇦🇹 fehlt:** Duden kennt *nachdem* kausal = „da, weil“ (landschaftlich): *Nachdem du eh da bist, kannst du helfen.* In Österreich häufig – fürs Verstehen wichtig.
- **Umfang:** 3 Regeln ✓, nur 37 Übungen (Ziel laut D-1014-76 ≈ 50) → in Punkt 11.
- **Vorschlag:** 🇦🇹-Zeile anhängen: „*nachdem* in Austria often also = *since/because* (*Nachdem es regnet, bleiben wir daheim*)“ – Beispiel vorher mit Matthias abstimmen.

#### d04 der, die, das (A1) – 6 Abschnitte + Verbformen, 4 Lernschritte, 61 Übungen
- **Inhalt richtig:** Nominativ-Tabelle der/die/das, ein/eine/ein, kein/keine (lingolia „Artikel“ ✓). *kein* verneint Nomen mit unbestimmtem/ohne Artikel, *nicht* alles andere (lingolia „Verneinung“ ✓). Großschreibung aller Nomen ✓. Genus-Endungen: Die femininen Endungen sind durch lingolia „Plural“ belegt („feminine Nomen mit den Endungen *e, in, ion, ik, heit, keit, schaft, tät, ung*“ ✓). Die Liste selbst (*-chen* das, *Ge-…-e* meist das, Tage/Monate der) steht so nicht auf lingolia → **ohne Online-Quelle** (Standardwissen der Duden-Grammatik, nicht abrufbar). *-erl* = das: Duden „Sackerl, das“ ✓.
- **🇦🇹 belegt (Duden, Gebrauch „österreichisch“):** *Paradeiser* der, *Erdapfel* der, *Karfiol* der, *Semmel* die (bayrisch, österr.), *Sackerl* das, *Kassa* die (Plural *Kassen*), *Jänner* der ✓.
- **Umfang:** 3 Regeln (Genus-Endungen, ein/kein/nicht, Großschreibung) ✓.
- **Klarheit:** Endungsliste ist lang (13 Zeilen) – für A1 besser in „immer“ (*-ung, -heit, -keit, -schaft, -ion, -tät, -chen, -erl*) und „meistens“ trennen, Ausnahmen als eigene ⚠-Zeile. Futur-Zeile in den Verbformen („see d01“) → wie bei d01: Futur kommt erst mit d17.
- **Reihenfolge:** A1-Thema steht hinter A2/B1-Themen (d01–d03b) → Punkt 6.
- **Vorschlag:** Endungsliste zweiteilen (immer/meistens), Futur-Zeile durch Verweis ersetzen.

#### d04b Plural (A1) – 6 Abschnitte, 3 Lernschritte, 44 Übungen
- **Inhalt richtig:** Fünf Pluraltypen (-e, -(e)n, -er, -s, ohne Endung, teils mit Umlaut) – lingolia „Plural“ ✓: feminine Nomen auf *-e/-in/-ion/-ung* → *-n/-en*; *-s* nach Vokal (*Auto, Kino*); keine Endung bei Maskulina/Neutra auf *-el/-en/-er* und *-chen/-lein*; „feminine Nomen bilden den Plural nie auf *-er*“ ✓. Pluralartikel immer *die*, Negation *keine* ✓. Maßangaben bleiben Singular (*zwei Kilo*) – ohne Quelle (keine abrufbare Seite gefunden).
- **🇦🇹 belegt (Duden):** *Sackerl* → *Sackerl/Sackerln* ✓, *Paradeiser* → *Paradeiser* ✓, *Erdäpfel* ✓, *Semmeln* ✓, *Kassa* → *Kassen* ✓; *Museum → Museen*, *Zentrum → Zentren* ✓.
- **Umfang:** 3 Regeln ✓, aber nur 44 Übungen (Ziel ≈ 50) → Punkt 11.
- **Klarheit:** Gut: Faustregeln nach Genus geordnet. Fehlt: Hinweis, dass man den Plural mit der Vokabel lernen muss (lingolia: „immer besser, die Pluralform … gleich mitzulernen“ ✓) – eine Zeile „Learn every noun as *der Tisch, die Tische*“.
- **Vorschlag:** Lernstrategie-Zeile anhängen; Übungen auf ≈ 50 aufstocken (Punkt 11).

#### d05 Nominativ und Akkusativ (A1/A2) – 6 Abschnitte + Verbformen, 4 Lernschritte, 61 Übungen
- **Inhalt richtig:** Akkusativ: nur das Maskulinum ändert sich (*der → den, ein → einen*) – lingolia „Artikel“ (Deklinationstabelle) ✓; Fragen *wer/wen/was* – lingolia „Deklination“ („Nach dem Akkusativ fragt man mit *Wen/Was*“) ✓; *sein* + Nominativ ✓. Possessivartikel: *euer* verliert das *e* vor Endung – lingolia „Possessivpronomen“ („Bei *euer* entfällt dann das *e*“) ✓.
- **🇦🇹:** *Bonbonniere* „mostly in Austria“ – Duden („hübsch aufgemachte Pralinenpackung“, ohne Gebrauchsangabe österr.) und Wiktionary (ohne Regionalangabe) kennen das Wort, belegen aber **nicht**, dass es vor allem österreichisch ist → ohne Quelle (Variantenwörterbuch nicht abrufbar).
- **Umfang:** 3 Regeln (Akkusativ Maskulinum, wer/wen/was, der-/ein-Wörter mit Possessiven) ✓ – §6 ist dicht (Endungslogik + 8 Possessive + *euer* + *ihr/Ihr*).
- **Klarheit:** §5 „*Wen suchst du? – Herrn Gruber*“ setzt die n-Deklination (*Herr → Herrn*) voraus, die erst d05b §7 bringt → Beispiel tauschen (*Den Chef*). „ein-words have no ending in three places“ ist gut, aber abstrakt – eine Mini-Tabelle mit den drei leeren Feldern hervorgehoben wäre klarer.
- **Vorschlag:** Beispiel §5 tauschen; 🇦🇹-Zeile umformulieren („*Bonbonniere* = box of chocolates; in Germany more often *Pralinenschachtel*“) oder als „ohne Quelle“ mit Matthias klären.

#### d05b Dativ (A2) – 7 Abschnitte, 3 Lernschritte, 43 Übungen
- **Inhalt richtig:** Endungen *-m · -r · -m · -n* ✓ (lingolia „Artikel“); Dativ Plural *+n*, außer nach *-s* und *-n* – lingolia „Nomen Deklination“ („Nomen, die im Plural nicht auf *-s* oder *-n* enden, bekommen im Dativ Plural ein *-n*“) ✓; *wem?* – lingolia „Deklination“ ✓; *Herr → Herrn*, *Kollege → Kollegen* – lingolia „Nomen Deklination“ (n-Deklination) ✓. Verben mit Dativ-Person + Akkusativ-Sache (*schenken, geben …*) ✓.
- **Umfang:** 4 Teilregeln (Endungen, Plural-*n*, *wem*, n-Nomen) – knapp über 3; §7 ist bewusst als „Learn them as they are“ markiert ✓ (vertretbar). Nur 43 Übungen → Punkt 11.
- **Klarheit:** gut; Überblick §3 wiederholt d05 §3 wörtlich (gewollt, als Anker).
- **Vorschlag:** keine inhaltliche Änderung; Übungen auf ≈ 50 (Punkt 11).

#### d09 Präpositionen mit festem Kasus (A2) – 8 Abschnitte + Verbformen, 4 Lernschritte, 61 Übungen
- **Inhalt richtig:** Dativ-Präpositionen *aus, außer, bei, mit, nach, seit, von, zu, gegenüber* und Akkusativ-Präpositionen *durch, für, gegen, ohne, um* – lingolia „Präpositionen Liste“ (Kasus-Spalte) und „Deklination“ („mit bestimmten Präpositionen *aus … außer, bei … gegenüber, mit, nach, seit, von, zu*“) ✓; Kurzformen *beim, vom, zum, zur* ✓. *gegenüber* + Dativ – Duden „gegenüber (Präposition)“: „Präposition mit Dativ“, *gegenüber dem Rathaus / dem Rathaus gegenüber* ✓.
- **🇦🇹 belegt:** *die Öffis* – Duden „Öffi“: „besonders österreichisch umgangssprachlich“, Plural *Öffis* ✓. *die Bim* – Duden „Bim“: „österreichisch umgangssprachlich“ = Straßenbahn ✓ – die App sagt „tram **in Vienna**“; Duden schränkt nicht auf Wien ein → „tram, informal Austrian“.
- **Zu korrigieren:** „In everyday speech: *gegenüber vom Bahnhof*. In writing: *gegenüber dem Bahnhof*.“ – Duden „gegenüber (Adverb)“ führt *Ludwigshafen liegt gegenüber von Mannheim* **ohne** Stilangabe „umgangssprachlich“ → beides ist Standard; besser: „Also correct: *gegenüber vom Bahnhof*.“
- **Umfang:** 3 Teilregeln (Dativ-Liste, Akkusativ-Liste, Kurzformen) + Wegbeschreibung §7 als Wortschatz ✓.
- **Klarheit:** gut; ⚠ *für den Kollege* setzt die n-Deklination aus d05b voraus – d05b steht in `req` ✓.
- **Vorschlag:** 🇦🇹-Zeilen *Bim* und *gegenüber vom* umformulieren (2 Zeilen, kein Umbau).

#### d09b wo/wohin/woher; seit und vor (A2) – 6 Abschnitte + Verbformen, 4 Lernschritte, 53 Übungen
- **Inhalt richtig:** *aus Österreich, vor zwei Jahren … gezogen* – lingolia „Lokale Präpositionen“ ✓; *seit* (Beginn in der Vergangenheit, dauert an) und *vor* (Zeitpunkt in der Vergangenheit) – lingolia „Temporale Präpositionen“ ✓; beide + Dativ ✓.
- **🇦🇹:** *daheim* – Duden: „besonders süddeutsch, österreichisch, schweizerisch“ ✓. *heim* – Duden „heim“ hat **keine** regionale Angabe → die Zeile „In Austria and southern Germany also … *heim* = nach Hause“ stimmt so nicht; besser: „*daheim* = zu Hause (Austria, southern Germany). *heim* = nach Hause (everywhere).“
- **Doppelt:** Der Hinweis „*ziehen* … in the sense ‚to move house‘ it takes *sein*“ steht im ⚠-Block **und** unter den Verbformen → einmal genügt (die Tipp-Zeile unter den Verbformen streichen; das ist eine Textänderung im `th`, keine Vokabel oder Übung).
- **Verweis ohne Ziel:** „Countries with an article take *in*: *in die Schweiz* – later.“ – im `docs/lehrplan.md` und in `lektionen.json` gibt es kein Thema dazu → hier direkt zwei Beispiele geben: *in die Türkei* (wohin) – *in der Schweiz* (wo) – *aus der Schweiz* (woher); lingolia „Lokale Präpositionen“ („Länder mit Artikel“: *aus der Schweiz … Urlaub in der Schweiz*; *Wir reisen in die Türkei* (nicht: *zur Türkei*)) ✓.
- **Umfang:** 3 Regeln (wo/wohin/woher, zu/nach Hause, seit/vor) ✓.
- **Vorschlag:** 🇦🇹-Zeile *heim* korrigieren; doppelten *ziehen*-Hinweis streichen; „later“-Verweis auflösen.

#### d06 Personalpronomen (A2) – 6 Abschnitte + Verbformen, 4 Lernschritte, 57 Übungen (+ 35 ausgeblendet)
- **Inhalt richtig:** Tabelle Nominativ/Akkusativ/Dativ inkl. *euch – euch*, *ihnen/Ihnen* – lingolia „Personalpronomen“ (Deklinationstabelle) ✓; Pronomen ersetzt ein schon genanntes Nomen und übernimmt dessen Genus – lingolia „Personalpronomen“ ✓. Wortstellung: zwei Nomen Dativ vor Akkusativ – lingolia „Deklination“ („Normalerweise verwenden wir das Dativobjekt vor dem Akkusativobjekt“) ✓; Pronomen vor Nomen und zwei Pronomen Akkusativ vor Dativ – lingolia „Hauptsätze“ („Wenn das direkte Objekt ein Pronomen ist, steht es vor dem indirekten Objekt“) ✓. Formen *leihen – lieh – geliehen*, *annehmen – nahm an – angenommen*, *helfen – half – geholfen*, *gefallen – gefiel – gefallen* – Wiktionary ✓.
- **Fraglich:** „Like *der Kollege*: der Nachbar – den Nachbarn – dem Nachbarn. In everyday speech also *dem Nachbar*.“ – Duden „Nachbar“: Genitiv *des Nachbarn* (selten: *des Nachbars*); Wiktionary führt *dem Nachbar* als zweite Singularform, aber ohne Stilangabe → „everyday speech“ ist **ohne Quelle**. Vorschlag: die Zusatzzeile streichen oder „also seen: *dem Nachbar*“; für Aurora genügt *dem Nachbarn*.
- **Verbformen-Tabelle passt nicht zum Thema:** Sie listet vor allem die Verben aus d06b (*gefallen, gehören, passen, schmecken, danken, gratulieren*); das Hauptverb dieses Themas, *geben* (*gab – hat gegeben*), fehlt. → Tabelle auf *geben, annehmen, leihen, schicken, helfen* beschränken, die übrigen nach d06b (Lehrplan-Regel Verbkarten, Punkt 7).
- **Umfang:** 3 Teilregeln (Fälle, Genus bei Dingen, Reihenfolge) + §5 „gleiche Formen“ als Hilfe ✓.
- **Klarheit:** gut; der Satz „Only with two pronouns does the accusative come first“ ist die Kernregel und steht schon unter „Wichtigstes“ ✓. `req` enthält *d09*, das in der Datei vor d06 steht – Reihenfolge → Punkt 6.
- **Vorschlag:** *dem Nachbar*-Zeile anpassen; Verbformen-Tabelle neu zuschneiden.

#### d06b Verben mit Dativ (A2) – 6 Abschnitte, 3 Lernschritte, 45 Übungen
- **Inhalt richtig (Duden, jeweils Beispielsätze):** *kann ich dir helfen?* (helfen) ✓; *wir danken Ihnen für dieses Gespräch* (danken) ✓; *jemandem zum Geburtstag gratulieren* (gratulieren) ✓; *das Buch gehört mir* (gehören) ✓; *das Bild gefällt mir* (gefallen) ✓; *das Essen hat [mir] geschmeckt* (schmecken) ✓; *der Mantel passt [mir] nicht* und *um 15 Uhr passt es mir gut* (passen, auch „Passt dir Montag?“) ✓; *er hat mir noch nicht geantwortet* (antworten) ✓; *glaubt ihm jedes Wort* (glauben + Person) ✓; *einem Gespräch zuhören* (zuhören) ✓.
- **🇦🇹:** keine Austriazismen im Thema; Situation (Kuchen für die Nachbarin) ist alltagsnah ✓.
- **Umfang:** 3 Regeln (Dativ-Person, Ding als Subjekt, „I like“) ✓.
- **Klarheit:** sehr gut – das ist eines der klarsten Themen; die Gegenüberstellung „Ding = Subjekt, Verb richtet sich nach dem Ding“ ist für Englisch-Sprechende genau die Stolperstelle.
- **Vorschlag:** inhaltlich nichts; nur 45 Übungen → Punkt 11.
