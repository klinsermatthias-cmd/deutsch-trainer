# Antwortbewertung testen (D-1025-12), 25.10.2026

Massentest der lokalen Bewertung (ohne KI) mit allen aktiven Übungen des Deutsch-Trainers (Übersetzung ins Deutsche, Satz ordnen, Lücke, Lückentext, Tabelle, Dialog).

| Test | Anzahl | Ergebnis vorher | nach dem Fix |
|---|---|---|---|
| Richtige Varianten: jede Alternative, ohne Schlusszeichen, klein am Satzanfang, doppelte Leerzeichen | 16.489 | 126 abgelehnt | 0 abgelehnt |
| Gezielt falsche Varianten: anderer Artikel (der/den/dem …), andere Endung (-e/-en/-em/-er/-es), Umlaut weg (Brüder → Bruder), Nomen klein, „sie“ statt „Sie“ | 26.615 | 0 als richtig gewertet, 0 als „nur vertippt“ angeboten | unverändert |

Gefunden und behoben (Engine opi-suomea, D-1025-12):
- Lücke mit ganzem Satz („Finde den Fehler: … → ___“, „Als Ja/Nein-Frage: … → ___“): ein klein geschriebener Satzanfang galt als Groß-/Kleinschreibfehler und wurde **ohne KI als falsch** gewertet (109 Fälle in 50 Übungen). Jetzt gilt wie bei Übersetzungen: nur der erste Buchstabe am Satzanfang ist frei.
- „zu  Hause“ mit doppeltem Leerzeichen wurde nicht als „zuhause“/„zu Hause“ erkannt (17 Fälle).
- `tools/pruefen.mjs` prüft jetzt bei jedem Push alle Alternativen aller Freitext-Formate (bisher nur Tabellen), auch klein und mit Leerzeichen.

Ohne Befund: Übersetzungen ins Englische (alle Alternativen angenommen); die Tippfehler-Erkennung bietet bei Artikeln und Endungen nie „nur vertippt“ an (Endungen sind ausgenommen, kurze Wörter ebenso).
