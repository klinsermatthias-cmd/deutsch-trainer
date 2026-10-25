# Simulation einer Lernenden und Wiederholungsplan (D-1025-11, D-1025-20), 25.10.2026

365 Tage mit der echten App im Browser (`tools/simulation.mjs`, Lernmodell-Modus): simulierte Lernende mit realistischem Zeitbudget (10–30 min an etwa zwei Dritteln der Tage, Ferien), Fehlerprofil aus einem Einstufungstest (Profil und Einzelergebnisse privat), nachgebauter Coach.

## Fehler in der Simulation behoben (Engine opi-suomea)
Der nachgebaute Coach wertete Schreibaufgaben und Dialoge in Lernschritten an **aller** Grammatik; die App verlangt dort nur die Regel des Themas (S-1014-10). Dadurch blieb ein Thema in der Simulation 134 Tage in einem Lernschritt hängen. Nachbau und Erwartung entsprechen jetzt dem echten Auftrag.

## Ergebnis (nach dem Fix)
| Messung | Wert |
|---|---|
| Grammatikthemen im ersten Jahr | 8 |
| Schritt-Runden unter 80 % | 60–75 % je Thema (Schwächen-Thema: 16 von 21) |
| Zeit je Lerntag (Budget 20 min) | Ø 41 min; 74 % der Tage über 150 % – Runden werden zu Ende gespielt |
| Schreibaufgaben richtig im 1. Versuch | 21 % (andere Formate 70–91 %) |
| Wiedererkennung statt Können | 7 % der richtigen Antworten – kein Auswendiglernen |
| Fehlerzuordnung | wiederkehrende Fehler in gelernten Themen werden erkannt und das Thema vorgezogen; Fehler in gesperrten Themen ziehen nichts vor (richtig) |

## Wiederholungsplan (D-1025-20)
106 Themen-Wiederholungen: 82 % bei einem Können von 65–90 % (richtiger Zeitpunkt), 15 % hätten warten können, 3 % zu spät. Ø Ergebnis 77 %. Abstände wachsen bis 60 Tage, Schwächen-Themen bleiben enger (14–24 Tage). **Der Plan arbeitet wie gewollt.**

## Hinweise für die Inhalte
- Lernschritte mit vielen Schreib-/Dialogaufgaben bremsen: d01b Schritt 5 (3 von 8), d01 Schritt 5 (5 von 12), d09 Schritt 4 (6 von 17), Wortpakete Schritt 3 (4–5 von 8–9). Beim nächsten Bearbeiten dieser Themen einfache Übungen in den Schritt ergänzen.
- Das Zeitbudget wird regelmäßig überschritten (bekannt seit 14.10.); eine Entscheidung zur Rundenlänge bleibt offen.
