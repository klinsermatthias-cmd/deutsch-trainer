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

