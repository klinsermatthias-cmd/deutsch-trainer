# Formen gegen Wiktionary und DWDS (D-1025-6), 26.10.2026

| Prüfung | Werkzeug | Ergebnis |
|---|---|---|
| 142 Verbkarten (Präsens, Präteritum, Perfekt, Stammformen) | `node tools/verbformen.mjs` gegen DWDS-Flexionstabellen | **keine falsche Form**. 27 Meldungen sind Grenzen des Werkzeugs: *sich überlegen* (DWDS lieferte das trennbare *überlegen*), *passieren* (bewusst nur 3. Person), *ziehen* (zwei Perfekt-Bedeutungen in einer Zeile). *möchten* und *hängen* von Hand geprüft (Wiktionary: hing/gehangen mit haben oder sein; transitiv hängte/gehängt). |
| 304 Nomen der Wortlisten (Genus, Plural) | `node tools/quellen.mjs --sprache de` (en.wiktionary, de-noun) | **293 stimmen**; *Sozialversicherungen* laut Duden richtig (Wiktionary: ohne Plural); *die Möbel* als Plural richtig; 8 ohne Wiktionary-Eintrag (Zusammensetzungen und reine Pluralwörter: Firmenfeier, Beipackzettel, Hausverwaltung, Aufenthaltsbewilligung, Öffis, Kopfschmerzen, Betriebskosten, Faschierte) – Grundwort geprüft. |

Damit sind alle Wortformen der Wortlisten belegt. Die Formen in Übungen wurden in D-1025-8 geprüft.
