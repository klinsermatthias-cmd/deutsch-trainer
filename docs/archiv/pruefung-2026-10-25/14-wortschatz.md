# Wortschatz-Analyse (D-1025-14), 25.10.2026

Vergleich des Wortschatzes der App mit der offiziellen **Wortliste Zertifikat B1** (Goethe/ÖSD, PDF von goethe.de, alphabetischer Teil, 2.249 Einträge nach Bereinigung).

| Wortschatz der App | Anzahl |
|---|---|
| verschiedene Wortformen in aktiven Übungen (Lösungen, Lesetexte, Dialoge) | 2.680 |
| Vokabeln in Wortlisten (Themen + Wortpakete w01–w06) | 556 Einträge |
| Wörterbuch-Einträge `GLOSS_EXTRA` (antippbar) | 1.779 |
| **B1-Wortliste in der App vorhanden** | **≈ 38 %** (844 von 2.249) |

Methode: Eintrag gilt als vorhanden, wenn das Wort selbst, eine übliche Beugungsform oder ein Wörterbuch-Eintrag vorkommt. Trennbare Verben in getrennter Form (*passt … auf*) werden nicht erkannt – die echte Abdeckung liegt daher etwas höher (Schätzung 40–45 %).

## Einordnung
- Für 25 Grammatikthemen und 6 Wortpakete ist das viel (am 14.10.: 143 Karten); seit D-1020-48 lernt Aurora Wörter in den Übungen.
- Für B1 fehlen noch rund 1.400 Wörter, vor allem Alltagsnomen (*die Meinung, die Lösung, der Betrieb, die Garage, die Mühe*) und Verben (*begleiten, beraten, besitzen, benötigen, einfallen, aufpassen*).
- Die vorgemerkten Wortpakete w07–w11 (Telefonieren/Reklamieren, Medien, Dialekt, Familie/Schule, Feste) decken davon nur einen Teil.

## Umgesetzt
- Liste der fehlenden B1-Wörter: `docs/b1-woerter-fehlend.txt`.
- `docs/ablauf-thema.md`: neue Übungen nehmen bevorzugt Wörter aus dieser Liste – so wächst der B1-Wortschatz mit jedem neuen Thema ohne Pflicht-Wortlisten (D-1020-48 bleibt).
