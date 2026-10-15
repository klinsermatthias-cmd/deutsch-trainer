/* Deutsch-Trainer – app.js: EINSTELLUNGEN DIESER APP (wird als Erstes geladen).
   Alles, was den Deutsch-Trainer von Opi suomea unterscheidet, steht hier, in farben.css, js/inhalte.js, lektionen/,
   manifest.webmanifest und den Icons. Alle anderen Dateien sind die gemeinsame Lern-Engine aus opi-suomea
   (siehe docs/engine.md). Diese Datei wird beim Übernehmen der Engine NICHT überschrieben. */
const APP = {
  id: "deutsch-trainer", // Speicherschlüssel im Browser, Datei- und Datenbanknamen – nie ändern (sonst ist der Fortschritt weg)
  name: "Deutsch-Trainer",
  tagline: "Dein Deutschkurs mit Coach",
  color: "#c8102e", // Farbe der Statusleiste am Handy
  learner: "Aurora",
  teacher: "Coach",
  teacherRole: "KI-Coach",
  teacherKind: "Deutschlehrerin", // „Analysiere wie eine erfahrene …“
  /* Grundhaltung der KI (Systemanweisung) */
  persona:
    'You are "Coach", a patient, honest and encouraging German teacher based in Austria. Your student is Aurora, who is at B1 level and working towards B2. She lives and works in Austria, so everyday life in Austria matters (authorities, doctor, shopping, flat, small talk, phone calls, understanding a bit of dialect). Always explain in clear, simple English. German examples must always be correct. Prefer Austrian standard German (e.g. Jänner, Paradeiser, Grüß Gott, Servus) and mention the German-German word where useful (e.g. "Paradeiser (Germany: Tomate)"). Her known weak spots are pronouns, tenses and cases.',
  explain: "Englisch", // Sprache der KI-Erklärungen
  levelHint: "„B1-“, „B1“, „B1+“, „B2-“", // Beispiele für die Niveau-Schätzung
  /* Wortregel für KI-Übungen und Rollenspiel (S-1013-10): B1-Lernerin – Grundwortschatz bis B1 ist erlaubt */
  wordRule:
    "Verwende auf Deutsch vor allem Wörter aus der WORTLISTE; allgemeiner Grundwortschatz bis zum Niveau B1 (wie in der Goethe-Wortliste B1) und Eigennamen sind ebenfalls erlaubt. Seltenere Wörter über B1 nur, wenn sie in der WORTLISTE stehen.",
  /* Lernsprache (target) und Sprache der Übersetzungen (base) */
  target: {
    code: "de",
    name: "Deutsch",
    adj: "deutsch",
    ins: "ins Deutsche",
    tts: "de-AT",
    sample: "Servus! Wie geht's dir heute?",
    keys: ["ä", "ö", "ü", "ß"] // Sonderzeichen-Tasten unter Eingabefeldern (finnische Tastatur hat kein ü und ß)
  },
  base: { name: "Englisch", adj: "englisch", ins: "ins Englische" },
  /* Eigene Wörter wie die Kurskarten (S-1014-50): Nomen mit Artikel und Plural, Österreich-Hinweis, Verben mit Formzeilen (S-1014-26) */
  ownRule:
    'Deutsch ("fi"): Nomen immer mit Artikel und Plural wie im Kurs, z. B. „der Sohn, die Söhne“ (ohne Plural nur, wenn es keinen gibt). Englisch ("de"): bei österreichischen Wörtern „(Austria; Germany: …)“ anhängen, z. B. „snack (Austria; Germany: Imbiss)“.',
  ownForms:
    "nur bei Verben, sonst leer: vier Zeilen wie im Kurs – „Präsens: er/sie/es fährt“ (bei Vokalwechsel, sein/haben/werden/wissen, Modalverben und reflexiven Verben „Präsens: ich … · du … · er/sie/es …“), „Präteritum: er/sie/es fuhr“, „Perfekt: er/sie/es ist gefahren“, „Futur: er/sie/es wird fahren“; trennbare und reflexive Verben ganz ausschreiben; Österreich: „Perfekt: er/sie/es ist gesessen (Germany: hat gesessen)“",
  locale: "de-AT",
  vocabName: "Wörter", // Überschrift der Wortkarten-Seite (S-1013-22)
  pruefVarianten: 3, // Prüfskript: mindestens 3 les/sch/dlg je Thema (Prüfliste 15, S-1013-23)
  /* Tabs unten: [groß, klein] */
  tabs: [
    ["Heute", "Tänään"],
    ["Themen", "Aiheet"],
    ["Wörter", "Sanat"],
    ["Fortschritt", "Edistys"]
  ],
  greeting(h) {
    return h < 10 ? "Guten Morgen" : h < 17 ? "Servus" : "Guten Abend";
  },
  doneTitle: "Super gemacht!",
  askPlaceholder: "z. B. Warum heißt es „dem Kollegen“?",
  /* S-1014-4: Fehlerarten für die laufende Analyse; neue Arten („neu: …“ im Bericht) nach der Auswertung hier ergänzen */
  errorKinds: [
    "Verbstellung",
    "Artikel/Genus",
    "Kasus (Akkusativ/Dativ)",
    "Adjektivendung",
    "Präposition",
    "Hilfsverb haben/sein",
    "Konjugation/Verbform",
    "Pluralform",
    "Groß-/Kleinschreibung",
    "Rechtschreibung",
    "Wortwahl"
  ],
  /* Beispiele im Auftrag „Neue Übungen von Coach“ (dir "de" = Übersetzung in die Lernsprache) */
  genExamples: `{"t":"gap","q":"Gestern ___ ich mit meiner Schwester ins Kino gegangen.","h":"sein – Perfekt","a":["bin"]}
{"t":"tr","dir":"de","q":"I have been living in Linz for two years.","a":["Ich wohne seit zwei Jahren in Linz","Seit zwei Jahren wohne ich in Linz"]}
{"t":"tr","dir":"fi","q":"Kannst du mir bitte helfen?","a":["Can you please help me","Could you help me please"]}
{"t":"tab","q":"Bestimmter Artikel im Dativ","head":["Nominativ","Dativ"],"r":[["der Mann","[dem Mann]"],["die Frau","[der Frau]"]]}`,
  /* Funktionen, die nicht jede App braucht */
  features: { placement: true, grammarFirst: true }, // D-1014-43/-44: Grammatik zuerst
  /* Einstufungstest: Angaben für die KI-Auswertung */
  placement: {
    level: "B1, selbst eingeschätzt",
    goal: "B2",
    weak: "Pronomen, Zeiten, Fälle",
    intro:
      "Grammatik, Wortschatz, Lesen und Schreiben – etwa 2 Stunden in 4 Teilen. Deine Themen werden auf deinem Ergebnis aufgebaut.",
    askPlaceholder: "z. B. Warum heißt es „der Kollegin“ und nicht „die“?"
  },
  /* Logo im Kopf (österreichische Flagge) */
  logo: '<svg width="32" height="32" viewBox="0 0 34 34" aria-hidden="true"><rect width="34" height="34" rx="8" fill="#fff"/><rect x="4" y="7" width="26" height="20" rx="2" fill="#c8102e"/><rect x="4" y="13.6" width="26" height="6.8" fill="#fff"/></svg>',
  /* Landschaft im Kopf: Alpenkamm */
  landscape(svg) {
    let seed = 7;
    const r = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };
    const ridge = (base, amp, step) => {
      let d = `M0 44 L0 ${base}`,
        x = 0;
      while (x < 1200) {
        const w = step * (0.6 + r());
        const peak = base - amp * (0.35 + r() * 0.65);
        d += ` L${(x + w * 0.5).toFixed(1)} ${peak.toFixed(1)} L${(x + w).toFixed(1)} ${(base - amp * 0.15 * r()).toFixed(1)}`;
        x += w;
      }
      return d + " L1200 44 Z";
    };
    svg.innerHTML = `<path style="fill:var(--ridge)" d="${ridge(30, 26, 70)}"/><path style="fill:var(--lumi)" d="${ridge(40, 20, 46)}"/>`;
  }
};
