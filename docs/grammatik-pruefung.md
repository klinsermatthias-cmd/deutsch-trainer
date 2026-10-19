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

#### d07 Ist das deiner? – meiner, einer, keiner (A2) – 6 Abschnitte + 🇦🇹 + Verbformen, 4 Lernschritte, 64 Übungen (+ 16 ausgeblendet)
- **Inhalt richtig:** Possessivpronomen ohne Nomen mit den Endungen von *der/die/das* (*meiner, meine, meins*), Abweichung nur in Nom. Mask. sowie Nom./Akk. Neutrum, *unseres, eures* – lingolia „Possessivpronomen“ (Deklinationstabellen, „abweichende Endungen … hervorgehoben“) ✓. *meins* = Nom./Akk. Sg. Neutrum „bei nicht attributivem Gebrauch“, Nebenform *meines* – Wiktionary „meins“ ✓. *welche* als Indefinitpronomen im Plural, Synonym *einige*, Singular *einer, eine, eins/eines* – Wiktionary „welche“ (Indefinitpronomen, Bedeutung [4]–[6]) ✓. *keiner* = „nicht einer“ – Wiktionary „keiner“ ✓. *vergessen – vergaß – vergessen*, *verlieren – verlor – verloren*, *finden – fand – gefunden*, *abholen* (trennbar, schwach) – Wiktionary ✓.
- **🇦🇹 belegt:** *das Häferl* – Duden: „österreichisch umgangssprachlich“, Bedeutung „Tasse“, Plural *die Häferl, Häferln* ✓ („informal“ steht schon in der App ✓). *der Kasten* = Schrank – Duden: „süddeutsch, österreichisch, schweizerisch“ ✓.
- **Ohne Quelle:** „*meines, deines …* are also correct – **more formal**“ – Wiktionary nennt *meines* nur als Nebenform, ohne Stilangabe; lingolia nennt es nicht. → „also correct (less common)“ oder nur „also correct“.
- **Technik:** Lernschritt 3 „Wiederholung: Dativ, Pronomen, Plural“ hat kein `sec` (leere Liste). `lektionen/README.md` (S-1014-1) verlangt für jeden Schritt `{t, sec, ex}` mit gelehrter Theorie – ein reiner Wiederholungsschritt ist dort nicht vorgesehen → Abweichung; ob die App den Schritt sauber anzeigt, prüfe ich bei Punkt 10. Vorschlag bei Punkt 8: Wiederholungsschritte ausdrücklich erlauben oder `sec` auf die wiederholten Abschnitte setzen.
- **Umfang:** 3 Teilregeln (Endungen, meins/meines, welche) ✓; Übungsmix breit (10 Formate) ✓.
- **Klarheit:** gut; die Zeile „Only three forms are different“ ist die Kernaussage und sollte unter „Wichtigstes“ stehen (dort steht nur die Endungsregel).
- **Vorschlag:** „more formal“ ersetzen; Kernsatz „nur drei Formen anders“ nach oben.

#### d07b Den nehme ich! – der, die, das allein und welcher? (A2) – 6 Abschnitte, 3 Lernschritte, 41 Übungen
- **Inhalt richtig:** *der/die/das* als Demonstrativpronomen haben die Formen des Artikels, betont gesprochen; ohne Nomen im Dativ Plural *denen* – lingolia „Demonstrativpronomen“ („Als Ersatz (ohne Nomen) verwenden wir im Dativ Plural *denen*“) ✓; Duden „der (Demonstrativpronomen)“: „immer betont“, Beispiel *denen muss man gute Noten geben* ✓. „Very common in speech, also for people; in writing *er/sie/es* more neutral“ – Duden: „statt des Personalpronomens, Gebrauch umgangssprachlich: *Suchst du deinen Bruder? Der (er) kommt gleich*“ ✓. *welcher/welche/welches* fragt nach einer Auswahl, Endungen von *der* – lingolia „Interrogativpronomen“ (Deklinationstabelle, Beispiel *Welcher (Hund) gehört Manuela? – Der kleine.*) ✓. *Gehören die Häferl …* – Duden Plural *die Häferl* ✓.
- **🇦🇹:** kein eigener Kasten, Häferl aus d07 ✓; keine Verbformen-Tabelle (keine neuen Verben) ✓.
- **Umfang:** 3 Teilregeln ✓.
- **Klarheit:** sehr gut, knapp; ⚠-Tabelle trifft die typischen Fehler (*Der nehme ich*, *den gehören*).
- **Vorschlag:** inhaltlich nichts; nur 41 Übungen (unter D-1014-76 ≈ 50) → Punkt 11.

#### d08 Nehmen Sie die Tabletten! – in der Apotheke (A2) – 7 Abschnitte + ⚠ + Verbformen, 4 Lernschritte, 56 Übungen
- **Inhalt richtig (lingolia „Imperativ“):** *Sie*- und *wir*-Form = Infinitiv + Pronomen, *Seien Sie / Seien wir* ✓; *ihr*-Form = Präsens ohne Pronomen ✓; *du*-Endung *-e* ist gehoben und fällt im Alltag meist weg („sounds formal“) ✓; Vokalwechsel *e → i/ie* auch im Imperativ, dann nie mit *-e* (*Lies!*, *Nimm!*) ✓; *a → ä* gilt nicht (*Fahr!*) ✓; Stamm auf *-d/-t* und Konsonant + *m/n* immer mit *-e* (*Warte!*, *Atme!*) ✓; trennbares Präfix am Ende (*Ruhen Sie sich aus!*) ✓; *bitte* für Höflichkeit ✓. Verbformen *einnehmen – nahm ein – eingenommen*, *setzen*, *ausruhen* – Wiktionary ✓. *der Beipackzettel* – Duden, ohne Regionalvermerk ✓.
- **Vereinfachung (in Ordnung):** Die App bildet die *du*-Form als „*du*-Präsens ohne *-st*“, lingolia als „Infinitiv ohne *-en*“ – mit den genannten Ausnahmen kommt dasselbe heraus. Bei *-eln/-ern* nennt die App nur *sammle*; lingolia erlaubt *Angele/Angle/Angel* – kommt in keiner Übung vor, also unschädlich.
- **Ohne Quelle:** Intonation „rising for a question, falling for a request“ – in keiner geprüften Quelle. → als Faustregel kennzeichnen („usually“) oder streichen; das Satzzeichen (*?* oder *!*) trägt die Unterscheidung schon.
- **🇦🇹:** kein eigener Kasten; Dialog mit *Grüß Gott* ✓. Möglich wäre *der Paracetamol-Saft*/*das Zäpfchen* o. Ä. – nicht nötig.
- **Umfang:** 3 Teilregeln (Sie/wir/ihr, du, Sonderfälle) ✓; 4 Schritte mit 13/13/16/14 Übungen ✓.
- **Klarheit:** gut; die drei Wege zur *du*-Form sind die einzige Stelle, an der man mehrfach lesen muss – eine Zeile „Faustregel: *du nimmst* → *Nimm!*“ ganz oben genügt.
- **Reihenfolge:** `req` enthält *d09* (steht in der Datei nach d08) → Punkt 6.
- **Vorschlag:** Intonationssatz anpassen; Faustregel unter „Wichtigstes“.

#### d08b Ich habe mir den Fuß verletzt – beim Arzt (A2) – 5 Abschnitte + ⚠ + 🇦🇹 + Verbformen, 3 Lernschritte, 48 Übungen
- **Inhalt richtig:** Tabelle der Reflexivpronomen, „Dativ, wenn es noch ein Objekt gibt; nur *mich/mir*, *dich/dir* unterscheiden sich“ – lingolia „Reflexive Verben“ und „Reflexivpronomen“ ✓; *uns/euch/sich* = *einander* (*Wir treffen uns*) – lingolia „Reflexivpronomen“ ✓. Duden „verletzen“: *ich habe mich am Kopf verletzt*, *ich habe mir das Bein verletzt* ✓ (also auch die App-Zeile „Just as common: *Ich habe mich am Fuß verletzt*“). Duden „wehtun“: *der Kopf tut mir weh*, *wo tut es dir denn weh?*, Perfekt *wehgetan* ✓. Duden „fehlen“: *fehlt dir etwas? (fühlst du dich nicht wohl …)* ✓ → *Was fehlt Ihnen?* passt. *verletzen, verkühlen, untersuchen* schwach – Wiktionary ✓.
- **🇦🇹 belegt (Duden):** *die Ordination* = Arztpraxis „Medizin, österreichisch“ ✓; *die E-Card* „österreichisch für elektronische Krankenversicherungskarte“ ✓; *im Krankenstand sein* „österreichisch: wegen Krankheit nicht zur Arbeit kommen“ ✓; *sich verkühlen* „besonders österreichisch“ = sich erkälten ✓. Deutschland: *die (elektronische) Gesundheitskarte* ✓, *krankgeschrieben sein* (krankschreiben) ✓.
- **Zu korrigieren:** „Body parts take the article, **not the possessive**“ und ⚠-Zeile ✗ *Ich habe meinen Fuß verletzt.* – Duden „wehtun“ zeigt ausdrücklich *mein/der Kopf tut mir weh*; *meinen Fuß verletzt* ist grammatisch richtig, nur weniger üblich. Als ✗ ist es zu streng (und widerspricht der eigenen Musterlösung in Übung 35: *Mein Fuß tut weh.*). → „Usually the article: *mir den Fuß*. *meinen Fuß* is possible but less common.“ und die Zeile aus der ✗-Tabelle nehmen.
- **Übung dazu:** Übung 22 (*I've hurt my foot.* → Deutsch) akzeptiert nur *mir den Fuß* / *mich am Fuß*; die wörtliche Übersetzung *Ich habe meinen Fuß verletzt.* wäre falsch gewertet → als dritte Lösung anhängen (Punkt 11).
- **Umfang:** 3 Teilregeln (Formen, Akk./Dat., Körperteile + wehtun) ✓. Schritte 13/11/24 – Schritt 3 trägt die Hälfte (Mischschritt) ✓.
- **Klarheit:** sehr gut; die Gegenüberstellung *mich verkühlt* / *mir den Fuß verletzt* im Dialog ist genau das Muster.
- **Reihenfolge:** `req` enthält *d09* → Punkt 6.
- **Vorschlag:** Possessiv-Regel abschwächen, ⚠-Zeile ändern, Übung 22 ergänzen.

#### d11 Wohin kommt das Sofa? – Wechselpräpositionen (A2) – 6 Abschnitte + ⚠ + 🇦🇹 + Verbformen, 4 Lernschritte, 56 Übungen
- **Inhalt richtig:** genau neun Wechselpräpositionen *an, auf, hinter, in, neben, über, unter, vor, zwischen* – lingolia „Liste der Präpositionen“ (Filter „Wechselpräpositionen“) ✓; *wo?* = Position → Dativ, *wohin?* = Richtung → Akkusativ – lingolia „Lokale Präpositionen“ ✓; *im/am/ins/ans* ✓; Musterpaare (*setzen sich an den Tisch / sitzen am Tisch*, *zwischen die zwei Stühle stellen*) wie bei lingolia ✓. Verbpaare: *liegen, stehen, sitzen* stark (*lag, stand, saß*), *legen, stellen, setzen* schwach – Wiktionary ✓; *hängen – hing – gehangen* (Position) und *hängen – hängte – gehängt* (Handlung) – Duden „hängen (gehangen)“ und „hängen (gehängt)“ ✓.
- **🇦🇹 belegt (Duden):** Perfekt mit *sein* bei *liegen* („ist gelegen“), *stehen*, *sitzen*, *hängen (hing)* – jeweils „süddeutsch, österreichisch, schweizerisch: ist …“ ✓; *der Sessel* = Stuhl „Gebrauch österreichisch“ ✓; *der Kasten* = Schrank (bei d07 belegt) ✓.
- **Zu ungenau:** „*an* = on a vertical surface such as a wall“ – Duden „an (Präposition)“: „zur Angabe der Lage, der Nähe, der Berührung“ (*Trier liegt an der Mosel*, *die Leiter lehnt an einem Baum*); „vertical“ steht in keiner geprüften Quelle und passt nicht zu *am Tisch sitzen*, *an der Mosel*. → „*an* = at, touching the side of something (*an der Wand, am Fenster, am Tisch*); *auf* = on top of something.“
- **Klein:** ⚠-Zeile ✗ *Ich gehe in der Küche.* ist nur falsch, wenn eine Richtung gemeint ist (*in der Küche auf und ab gehen* ist richtig) – als Hinweis „(= into the kitchen)“ ergänzen.
- **Umfang:** 3 Teilregeln (wo?, wohin?, Verbpaare) ✓; Schritte 13/13/15/15 ✓.
- **Technik:** Schritt 4 „Alles zusammen“ zeigt als Theorie nur §7 (Verbformen-Tabelle) – wie bei d07 ein Wiederholungsschritt ohne eigene Regel → Punkt 8 (Wiederholungsschritte ausdrücklich erlauben).
- **Klarheit:** sehr gut – die Gegenüberstellungstabelle in §6 ist der Kern; der Dialog markiert jede Form mit *wo?/wohin?*.
- **Reihenfolge:** `req` passend (d05/d05b Kasus, d09/d09b feste Präpositionen) ✓.
- **Vorschlag:** *an*-Zeile neu formulieren; ⚠-Zeile präzisieren.

#### d14 Die helle Wohnung im zweiten Stock – Adjektivendungen I (A2+) – 7 Abschnitte + ⚠ + 🇦🇹 + Verbformen, 4 Lernschritte, 51 Übungen
- **Inhalt richtig:** Endungen nach bestimmtem Artikel: *-e* im Nominativ Singular und im Akkusativ Singular f/n, sonst *-en* (Akk. m, ganzer Dativ, ganzer Plural) – lingolia „Adjektiv-Deklination“, Tabelle „mit dem bestimmten Artikel“ ✓; dieselbe Tabelle gilt nach *dieser, jeder, welcher, alle, derselbe* – lingolia ✓; *dunkel → die dunkle Küche*, *teuer → das teure Zimmer* – lingolia („nicht dunkeler“, „nicht teueres“) ✓. Ordinalzahlen: *dritte, siebente* (neben *siebte*), *zwanzigste* – Duden ✓; *derselbe* mit beiden Teilen dekliniert (*demselben, denselben*) – Duden „derselbe“ ✓; *am selben Tag, zur selben Zeit* nach Verschmelzung nur *selb-* – Duden „selbe“ (a), genau diese Beispiele ✓; *in demselben* ebenfalls richtig – Duden „derselbe“ (*aus demselben Dorf*) ✓. *besichtigen, renovieren* regelmäßig schwach – Wiktionary ✓.
- **🇦🇹 belegt (Duden):** *Jänner* „österreichisch, seltener süddeutsch“ ✓; *Feber* „österreichisch, besonders Amtssprache“ ✓ (= „mostly in official texts“); *Erdgeschoß* „süddeutsch, österreichisch“ ✓; *Stock* = Geschoss „das höher liegt als das Erdgeschoss“ ✓ (→ *erster Stock* über dem Erdgeschoß); *Kasten* = Schrank „süddeutsch, österreichisch, schweizerisch“ ✓; *Vorzimmer* = Diele „österreichisch“ ✓.
- **Zu ungenau:** *Ablöse* – Duden: „österreichisch, sonst umgangssprachlich“, Synonym *Abstand*. Auch in Deutschland sagt man umgangssprachlich *Ablöse*; → „(Germany officially: *Abstand*; colloquially also *Ablöse*)“.
- **Ohne Quelle:** die Faustregel „bis 19 *-te*, ab 20 *-ste*“ als Regel (Einzelformen *dritte, siebente, zwanzigste* belegt; Duden „neunzehnte“ ohne eigene Seite).
- **Umfang:** 3 Teilregeln (§4 Nom/Akk, §5 Dativ/Plural, §6 Ordinalzahlen + *derselbe*) ✓ – §6 bündelt aber zwei verschiedene Dinge; Schritte 14/11/15/11 ✓; 10 Übungstypen ✓.
- **Technik:** Schritt 4 „Alles zusammen“ zeigt als Theorie nur §7 (Verbformen-Tabelle) – wie d07, d11 → Punkt 8.
- **Klarheit:** sehr gut – die Kernregel steht als zwei Zeilen ganz oben; ein Satzpaar je Genus (*Der alte Kasten … / den alten Kasten*) macht die einzige Änderung (Akk. m) sichtbar. Genitiv fehlt bewusst (A2+), die Regel „sonst -en“ deckt ihn mit ab ✓.
- **Reihenfolge:** `req` mit 15 Themen inkl. d11 passend ✓.
- **Vorschlag:** *Ablöse*-Zeile ergänzen; *derselbe* in §6 als eigene Unterüberschrift „derselbe = the same“ absetzen.

#### d15 Ein großer Balkon, frisches Brot – Adjektivendungen II (A2+) – 9 Abschnitte + ⚠ + 🇦🇹 + Verbformen (§7), 5 Lernschritte, 62 Übungen
- **Inhalt richtig:** Endungen nach *ein/kein/mein …*: nur drei Formen anders als nach *der/die/das* (*ein neuer Tisch*, *ein neues Zimmer* Nom./Akk.), sonst wie d14, Plural nach *keine/meine* immer *-en* – lingolia „Adjektiv-Deklination“, Tabelle „mit dem unbestimmten Artikel“ (gilt auch für *kein* und Possessivartikel) ✓; ohne Artikel = Endung des Artikels, Dativ f *-er*, Dativ Pl. *-en* – lingolia Tabelle „ohne Artikel“ ✓; nach Zahlwörtern im Plural wie ohne Artikel (*zwei große Zimmer*) – lingolia ✓; Partizip II als Adjektiv mit denselben Endungen (*geriebener Käse, gekochte Eier*) – lingolia ✓; *dunkel → ein dunkles Zimmer* – lingolia ✓. Komparativ + Endung (*ein größeres Zimmer, den kleineren Tisch*; prädikativ ohne Endung) – lingolia „Steigerung“ ✓; Formen *größer, älter, wärmer, kälter, teurer, dunkler, besser, heller, billiger* – Wiktionary ✓. Substantivierte Adjektive: *der Bekannte / ein Bekannter*, *der Deutsche / ein Deutscher* – Duden ✓; *etwas, nichts, viel … Gutes*, *alles Gute*, *Guten Appetit* – Duden „gut“ (substantiviert) ✓. Verben *einladen* (lädt ein, lud ein, eingeladen), *mitbringen* (brachte mit, mitgebracht), *kochen*, *schneiden* (schnitt, geschnitten), *reiben* (rieb, gerieben) – Wiktionary ✓.
- **🇦🇹 belegt (Duden):** *Topfen* = Quark „bayrisch, österreichisch“ ✓; *Palatschinke* „österreichisch“ = dünner Eierkuchen, „meist Plural“ ✓; *Knödel* = Kloß „besonders süddeutsch, österreichisch“ ✓; *Paradeiser, Erdäpfel* bereits in d04 belegt.
- **Zu ungenau:** nichts – *Palatschinke* „(Germany: *Pfannkuchen, Eierkuchen*)“ stimmt: Duden „Pfannkuchen“ (1) = flache Mehlspeise, *Eierpfannkuchen* ✓; Bedeutung (2) „Berliner“ nur „besonders norddeutsch und ostmitteldeutsch“ (→ Klein).
- **Ohne Quelle:** keine offenen Punkte.
- **Klein:** Zeile „die Palatschinke, die Palatschinken“ ohne Kennzeichnung Singular/Plural → „(Sg.) / (Pl.)“ ergänzen. *Pfannkuchen* heißt in Nord-/Ostdeutschland auch Krapfen (Duden) – Hinweis optional. *dunkel*: Wiktionary nennt für Österreich zusätzlich die Umlautform *dünkler*; die Theorie lehrt nur *dunkler* – ausreichend, eventuell als 🇦🇹-Zeile.
- **Umfang:** 5 Teilregeln (§4, §5, §6, §8, §9) > 3; Schritte 13/12/14/11/12 ✓; 10 Übungstypen ✓; 62 Übungen (über D-1014-76 ≈ 50, unkritisch).
- **Technik:** §8 und §9 stehen **nach** den Verbformen (§7) – gegen S-1013-34; der Schritt „Alles zusammen“ ist nicht der letzte, der letzte Schritt bringt zwei neue Regeln (gegen README S-1014-1 „nur der letzte Schritt mischt“); „Alles zusammen“ zeigt als Theorie nur §7 (Verbformen) – wie d07, d11, d14 → Punkt 8.
- **Klarheit:** gut – „nur drei Formen anders“ ist die richtige Kernaussage; die Vergleichszeile mit d14 hilft. Komparativ und Adjektiv als Nomen wirken angehängt und machen das Thema lang.
- **Reihenfolge:** `req` mit 16 Themen inkl. d14 passend ✓ (d09 in `req` → Punkt 6).
- **Vorschlag:** §8/§9 vor die Verbformen ziehen oder als eigenes kleines Thema „d15b“ auslagern (Komparativ vor dem Nomen, Adjektive als Nomen); dann „Alles zusammen“ als letzten Schritt; *Palatschinke*-Zeile präzisieren.

#### d16 Könnten Sie mir sagen, ob …? – Konjunktiv II höflich (A2++) – 6 Abschnitte + ⚠ + 🇦🇹 + Verbformen, 4 Lernschritte, 52 Übungen
- **Inhalt richtig:** Konjunktiv II für höfliche Bitten und Fragen; Formen *hätte, wäre, würde* in allen Personen (*ihr wärt* – lingolia „wär(e)t“) – lingolia „Konjunktiv“ ✓; Bildung aus dem Präteritumstamm mit Umlaut, *würde*-Form als Ersatz für die meisten Verben – lingolia ✓; *könnte, möchte* – lingolia „Modalverben“ ✓; *sollte* ohne Umlaut (= Präteritumform) – Wiktionary „sollen“ ✓; indirekte Ja/Nein-Frage mit *ob*, Verb am Ende – lingolia „Indirekte Fragen“ ✓; *gern – lieber – am liebsten* – Wiktionary ✓. Komma nach der Briefanrede, danach klein weiter (*Sehr geehrter Herr Schneider, gestern …*), Grußformel ohne Satzzeichen – Duden Rechtschreibregeln D 132 ✓; *du/dein* in Briefen klein oder groß – Duden Rechtschreibregeln (Anredepronomen) ✓. Verben *zurückrufen* (rief zurück, zurückgerufen), *reparieren, funktionieren, stellen* regelmäßig – Wiktionary ✓.
- **🇦🇹 belegt (Duden):** *das E-Mail* „besonders süddeutsch, österreichisch, schweizerisch“ neben *die E-Mail* ✓; *Auf Wiederhören!* „Abschiedsformel beim Telefonieren“ ✓; *Installateur* = Handwerker für Rohre, Gas-, Elektroleitungen ✓ (Duden: Aussprache österreichisch meist [ʃt]).
- **Zu ungenau:** ⚠-Zeile „✗ *Ich würde gern einen Termin haben*“ – der Satz ist grammatisch richtig, nur weniger üblich (das sagt §4 selbst: „sounds better“). Als ✗ lernt Aurora eine falsche Regel → in der ⚠-Tabelle durch einen echten Fehler ersetzen (z. B. „✗ *Ich würde gern einen Termin.*“ → „✓ *Ich hätte gern einen Termin.*“) oder kennzeichnen „(correct, but *hätte gern* is more natural)“.
- **Ohne Quelle:** „(Germany often: *Klempner*)“ – Duden markiert weder *Installateur* noch *Klempner* regional; *Installateur* ist auch in Deutschland üblich. Die 🇦🇹-Zeile so nicht belegt → umformulieren: „*Installateur* is the usual word in Austria (Germany also: *Klempner*, *Sanitärinstallateur*)“ – auch das ohne Quelle für den Häufigkeitsvergleich.
- **Umfang:** 3 Teilregeln (§4 Formen, §5 Bitten/Rat, §6 indirekte Fragen + E-Mail) ✓ – §6 bündelt zwei verschiedene Dinge; Schritte 14/13/14/11 ✓; 10 Übungstypen ✓.
- **Technik:** Schritt 4 „Alles zusammen“ zeigt als Theorie nur §7 (Verbformen) – wie d07, d11, d14, d15 → Punkt 8. Gliederung nach S-1013-34 ✓.
- **Klarheit:** sehr gut – „vier Formen“ als Kern, Herleitung aus dem Präteritum, Gegenüberstellung direkt/höflich; *wenn* vs. *ob* steht im ⚠ ✓.
- **Reihenfolge:** `req` mit 19 Themen inkl. d03 (Präteritum), d08 (Imperativ), d15 passend ✓; d03b und d08b fehlen in `req`, werden aber nicht vorausgesetzt.
- **Vorschlag:** ⚠-Zeile *würde … haben* ersetzen; 🇦🇹-Zeile *Installateur* umformulieren; in §6 die formelle E-Mail als eigene Unterüberschrift.
