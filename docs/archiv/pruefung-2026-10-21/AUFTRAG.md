# Auftrag: vollständige Prüfung einer Themengruppe (Deutsch-Trainer, 21.10.2026)

Du bist erfahrene DaF-Lehrerin (Österreich) und prüfst Inhalte der App „Deutsch-Trainer“ für Aurora: Finnin, sehr gutes Englisch, Deutsch B1 (vieles aus A1/A2 vergessen, muss gefestigt werden), lebt in Österreich, Ziel B2. Erklärungen sind auf Englisch, Beispiele auf österreichischem Standarddeutsch. NUR LESEN – nichts im Repo ändern, nichts committen.

Pflichtlektüre zuerst: /home/user/deutsch-trainer/CLAUDE.md, lektionen/pruefliste.md, lektionen/README.md, docs/ablauf-thema.md (Abschnitt „Theorie verständlich schreiben“), docs/quellen.md. lektionen/lektionen.json NIE ganz öffnen – mit python gezielt die Themen deiner Gruppe auslesen (th, v, ex, steps, req, title). Theorie mit `re.sub('<[^>]+>',...)` lesbar machen. Reihenfolge der Themen = Reihenfolge im Array. Das Fälle-Paket d35 (Teil 1) und d36 (Teil 2) ist die zentrale Referenz für die Fälle; d05/d05b/d34 sind bewusst Übungsthemen mit Kurztheorie (D-1020-53). Wörter lernt Aurora in den Übungen (Antippen, D-1020-48); die Wortliste `v` jedes Themas ist ein Wörterbuch.

Prüfe JEDES Thema deiner Gruppe auf:
1. **Vollständigkeit:** fehlt etwas, das für das Thema und B1/B2-Alltag in Österreich nötig ist? Sind Tabellen vollständig (alle Personen/Fälle/Genera)? Werden Ausnahmen genannt?
2. **Sinnhaftigkeit und Richtigkeit:** jede Regel und jedes deutsche Beispiel korrekt? Natürliches österreichisches Standarddeutsch? Englische Erklärung korrekt?
3. **Einfachheit und Aufbau:** leicht verständlich, ein Gedanke je Satz, klare Gliederung, Übersicht zuerst; nichts Verwirrendes, Doppeltes oder Überladenes; stimmen Rückverweise („see d35, section 4“) auf existierende Abschnitte?
4. **Aufbau aufeinander und Reihenfolge:** setzt das Thema nur voraus, was vorher kam? Stimmt `req` (alle Themen, auf denen es aufbaut)? Ist die Position in der Reihenfolge schlüssig? Vorgriffe auf spätere Grammatik in Übungen?
5. **Übungen:** genug (≈ 50 je Grammatikthema, ≥ 8 je Lernschritt), vielfältige Formate, Mix laut Prüfliste; vermitteln sie guten, vielfältigen Alltagswortschatz (B1/B2, Österreich)? Lösungen vollständig (alle richtigen Varianten in `a`)? Hinweise `h` klar? Falsche/mehrdeutige Aufgaben? Jede Pflichtantwort eines Lernschritts in seiner Theorie gelehrt?
6. **Wortkarten (`v`):** Format D-1020-29 (README „Wortkarten“): Verben mit k, s (Stammformen), f (Präsens/Präteritum/Perfekt alle 6 Personen), g wo nötig; Wendungen `wa:"Wendung"` ohne Tabelle; Nomen mit Artikel und Plural; Adjektive mit k und Steigerung; sonst `wa`. Stimmen Formen, Genus, Plural, Hilfsverb (haben/sein, österr. „ist gesessen“), englische Bedeutung? Stichproben gegen DWDS-Flexionstabellen.

**Quellen sind Pflicht** für jeden Fund zu Formen/Genus/Wendungen/Österreichisch/Niveau: `cd /home/user/deutsch-trainer && node tools/quellen.mjs --sprache de <wort>`; DWDS `curl -sL -A "Mozilla/5.0" https://www.dwds.de/wb/<wort>` bzw. `/lemma/flexion/<wort>`; Duden `https://www.duden.de/rechtschreibung/<Wort>`; nur Ausschnitte greppen. Ein Fund ohne gelesene Fundstelle heißt „ohne Quelle“. Nur echte Probleme melden, keine Geschmacksfragen; „zu leicht“ ist kein Fund (Aurora muss A1/A2 festigen).

Ausgabe: Datei `AUSGABE` (Markdown) mit
- je Thema: kurzes Urteil (1–2 Zeilen: gut / Schwächen) und
- nummerierte Funde: `[Thema · Ort (Theorie Abschnitt n / ex i / v i) · Schwere: Fehler|Lücke|Unklar|Struktur|Wortschatz] Befund – Vorschlag (konkreter neuer Text) – Quelle`
- am Ende: 3–5 wichtigste Empfehlungen für die Gruppe.
Höchstens ~250 Zeilen. Antwort an mich: 10 Zeilen Kurzfassung (Zahl der Funde je Schwere, die 3 wichtigsten).
