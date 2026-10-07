/* Deutsch-Trainer – inhalte.js: Lerninhalte DIESER App (gehört zur App, nicht zur Engine).
   BASE_TOPICS bleibt leer: Die Themen entstehen nach dem Einstufungstest als Lektionen (lektionen/lektionen.json, d01, d02 …).
   Der Einstufungstest (PT, PT_READING): Aufgaben-IDs = Abschnitt + "." + Nummer, gleich wie im Claude-Testblatt –
   nie umbenennen oder umsortieren, sonst passen gespeicherte Antworten nicht mehr. */
const BASE_TOPICS = [];

/* Wörterbuch-Ergänzungen fürs Antippen (keine Lernkarten) */
const GLOSS_EXTRA = {};

/* ============================================================
   EINSTUFUNGSTEST – Inhalte
   ============================================================ */
const PT = [
  {
    id: "A",
    name: "Grammar",
    time: "approx. 70 minutes",
    sections: [
      {
        id: "A1",
        title: "Present tense verbs",
        items: [
          { k: "b", t: "Du ___ (sprechen) sehr gut Deutsch.", s: ["sprichst"] },
          { k: "b", t: "Er ___ (lesen) jeden Abend ein Buch.", s: ["liest"] },
          { k: "b", t: "Wann ___ der Zug ___? (abfahren)", s: ["fährt", "ab"] },
          { k: "b", t: "Sie ___ die Rechnung nicht. (verstehen)", s: ["versteht|verstehen"] }
        ]
      },
      {
        id: "A2",
        title: "Word order",
        hint: "Build correct sentences.",
        items: [
          { k: "r", t: "Morgen / ich / nach Linz / fahren", s: ["Morgen fahre ich nach Linz."] },
          {
            k: "r",
            t: "Ich bleibe zu Hause, weil / ich / krank / sein",
            s: ["Ich bleibe zu Hause, weil ich krank bin.", "weil ich krank bin"]
          },
          {
            k: "r",
            t: "Ich weiß nicht, ob / er / heute / kommen / können",
            s: ["Ich weiß nicht, ob er heute kommen kann.", "ob er heute kommen kann"]
          },
          {
            k: "r",
            t: "Gestern / ich / mit meiner Schwester / ins Kino / gehen",
            tag: "Perfekt",
            s: ["Gestern bin ich mit meiner Schwester ins Kino gegangen."]
          },
          {
            k: "r",
            t: "Er sagt, dass / er / das Paket / schon / abschicken",
            tag: "Perfekt",
            s: [
              "Er sagt, dass er das Paket schon abgeschickt hat.",
              "Er sagt, dass er schon das Paket abgeschickt hat.",
              "dass er das Paket schon abgeschickt hat",
              "dass er schon das Paket abgeschickt hat"
            ]
          }
        ]
      },
      {
        id: "A3",
        title: "Connectors",
        hint: "Choose from the word bank.",
        bank: [
          "aber",
          "sondern",
          "deshalb",
          "trotzdem",
          "obwohl",
          "damit",
          "denn",
          "weil",
          "je … desto",
          "weder … noch"
        ],
        items: [
          { k: "b", t: "Ich bin müde, ___ gehe ich früh ins Bett.", s: ["deshalb"] },
          { k: "b", t: "Es regnet. ___ gehen wir spazieren.", s: ["trotzdem"] },
          { k: "b", t: "___ es regnet, gehen wir spazieren.", s: ["obwohl"] },
          { k: "b", t: "Er trinkt nicht Kaffee, ___ Tee.", s: ["sondern"] },
          { k: "b", t: "Ich spare Geld, ___ ich im Sommer reisen kann.", s: ["damit"] },
          { k: "b", t: "___ mehr ich übe, ___ besser spreche ich.", s: ["je", "desto"] },
          { k: "b", t: "Sie spricht ___ Englisch ___ Französisch.", s: ["weder", "noch"] },
          { k: "b", t: "Ich komme nicht mit, ___ ich habe keine Zeit.", s: ["denn"] }
        ]
      },
      {
        id: "A4",
        title: "Infinitive with zu, um … zu, ohne … zu",
        items: [
          { k: "b", t: "Ich habe keine Lust, heute ___ (kochen).", s: ["zu kochen"] },
          { k: "b", t: "Vergiss nicht, die Tür ___ (abschließen).", s: ["abzuschließen"] },
          { k: "b", t: "Er lernt Deutsch, ___ in Österreich ___ (arbeiten).", s: ["um", "zu arbeiten"] },
          { k: "b", t: "Sie ging, ___ sich ___ (verabschieden).", s: ["ohne", "zu verabschieden"] },
          { k: "b", t: "Ich kann heute leider nicht ___ (kommen).", s: ["kommen"] }
        ]
      },
      {
        id: "A5",
        title: "Tenses",
        hint: "Rewrite the sentence in the tense shown.",
        items: [
          { k: "r", t: "Wir fahren nach Wien.", tag: "Perfekt", s: ["Wir sind nach Wien gefahren."] },
          { k: "r", t: "Er bringt die Unterlagen mit.", tag: "Perfekt", s: ["Er hat die Unterlagen mitgebracht."] },
          {
            k: "r",
            t: "Der Film beginnt um acht.",
            tag: "Perfekt",
            s: ["Der Film hat um acht begonnen.", "Der Film hat um acht Uhr begonnen."]
          },
          { k: "r", t: "Ich muss lange warten.", tag: "Perfekt", s: ["Ich habe lange warten müssen."] },
          { k: "r", t: "Wir sind müde und haben Hunger.", tag: "Präteritum", s: ["Wir waren müde und hatten Hunger."] },
          { k: "r", t: "Er denkt oft an sie.", tag: "Präteritum", s: ["Er dachte oft an sie."] },
          { k: "b", t: "Nachdem ich ___ (ankommen), rief ich dich an.", tag: "Plusquamperfekt", s: ["angekommen war"] },
          {
            k: "r",
            t: "Ich rufe dich morgen an.",
            tag: "Futur I",
            s: ["Ich werde dich morgen anrufen.", "Morgen werde ich dich anrufen."]
          }
        ]
      },
      {
        id: "A6",
        title: "Passive voice",
        items: [
          { k: "r", t: "Man repariert das Auto.", tag: "Präsens", s: ["Das Auto wird repariert."] },
          {
            k: "r",
            t: "Man baute die Brücke 1950.",
            tag: "Präteritum",
            s: ["Die Brücke wurde 1950 gebaut.", "1950 wurde die Brücke gebaut."]
          },
          { k: "r", t: "Man hat den Brief geschickt.", tag: "Perfekt", s: ["Der Brief ist geschickt worden."] },
          {
            k: "r",
            t: "Man muss die Rechnung bezahlen.",
            tag: "with modal verb",
            s: ["Die Rechnung muss bezahlt werden."]
          }
        ]
      },
      {
        id: "A7",
        title: "Subjunctive (Konjunktiv II)",
        items: [
          { k: "b", t: "Wenn ich mehr Zeit ___ (haben), ___ ich mehr reisen.", s: ["hätte", "würde|könnte"] },
          { k: "b", t: "___ Sie mir bitte helfen? (können, höflich)", s: ["könnten"] },
          { k: "b", t: "Ich wünschte, ich ___ jetzt am Meer. (sein)", s: ["wäre"] },
          { k: "b", t: "An deiner Stelle ___ ich mit dem Chef sprechen.", s: ["würde"] },
          { k: "b", t: "Wenn ich das gewusst ___, ___ ich früher gekommen.", s: ["hätte", "wäre"] }
        ]
      },
      {
        id: "A8",
        title: "Cases: articles, adjective endings, n-declension",
        hint: "Fill in the endings. If no ending is needed, type –.",
        items: [
          { k: "b", t: "Ich gebe d___ Kollegin ein___ Buch.", s: ["er", ""] },
          { k: "b", t: "Wir sprechen mit unser___ neu___ Chef.", s: ["em", "en"] },
          { k: "b", t: "Trotz d___ schlecht___ Wetter___ sind wir wandern gegangen.", s: ["es", "en", "s"] },
          { k: "b", t: "Das ist das Auto mein___ Bruder___.", s: ["es", "s"] },
          { k: "b", t: "Ich habe gestern ein___ alt___ Freund getroffen.", s: ["en", "en"] },
          { k: "b", t: "Bei schön___ Wetter sitzen wir gern draußen.", s: ["em"] },
          { k: "b", t: "Ich suche ein___ groß___ Wohnung mit ein___ hell___ Küche.", s: ["e", "e", "er", "en"] },
          { k: "b", t: "Kennst du d___ Herr___ dort drüben?", s: ["en", "n"] }
        ]
      },
      {
        id: "A9",
        title: "Prepositions",
        items: [
          { k: "b", t: "Sie legt das Handy auf d___ Tisch.", s: ["en"] },
          { k: "b", t: "Das Handy liegt auf d___ Tisch.", s: ["em"] },
          { k: "b", t: "Ich hänge das Bild an d___ Wand.", s: ["ie"] },
          { k: "b", t: "Wir fahren ___ Wochenende ___ meinen Eltern.", s: ["am", "zu"] },
          { k: "b", t: "Wir treffen uns ___ 18 Uhr ___ Bahnhof.", s: ["um", "am|beim|vor dem|vorm|im"] },
          { k: "b", t: "Während d___ Besprechung war das Handy aus.", s: ["er"] },
          { k: "b", t: "Ich muss morgen ___ Arzt.", s: ["zum"] }
        ]
      },
      {
        id: "A10",
        title: "Verbs with prepositions, da- and wo- words",
        items: [
          { k: "b", t: "Ich warte schon lange ___ den Bus.", s: ["auf"] },
          { k: "b", t: "Sie interessiert sich sehr ___ Kunst.", s: ["für"] },
          { k: "b", t: "Ich habe Angst ___ Spinnen.", s: ["vor"] },
          { k: "b", t: "___ denkst du? – An meine Prüfung.", s: ["woran"] },
          { k: "b", t: "Freust du dich auf den Urlaub? – Ja, ich freue mich sehr ___.", s: ["darauf"] },
          { k: "b", t: "___ hast du gesprochen? – Mit meiner Chefin.", s: ["mit wem"] }
        ]
      },
      {
        id: "A11",
        title: "Pronouns",
        items: [
          { k: "b", t: "Kennst du Lisa? – Ja, ich kenne ___ gut.", s: ["sie"] },
          { k: "b", t: "Hast du deinem Vater geholfen? – Ja, ich habe ___ geholfen.", s: ["ihm"] },
          { k: "b", t: "Ich wasche ___ die Hände.", s: ["mir"] },
          { k: "b", t: "Kannst du ___ das bitte erklären? (ich)", s: ["mir"] },
          { k: "b", t: "Gibst du mir das Buch? – Ja, ich gebe ___ ___ gleich.", s: ["es", "dir"] },
          { k: "b", t: "Hast du einen Stift? – Nein, leider habe ich ___.", s: ["keinen"] },
          { k: "b", t: "Ist das dein Schlüssel? – Nein, das ist nicht ___.", s: ["meiner"] }
        ]
      },
      {
        id: "A12",
        title: "Relative clauses",
        items: [
          { k: "b", t: "Das ist der Mann, ___ ich gestern geholfen habe.", s: ["dem"] },
          { k: "b", t: "Die Stadt, in ___ ich wohne, ist ziemlich klein.", s: ["der"] },
          { k: "b", t: "Die Kollegen, mit ___ ich arbeite, sind sehr nett.", s: ["denen"] },
          { k: "b", t: "Das ist die Frau, ___ Sohn in meiner Klasse ist.", s: ["deren"] },
          { k: "b", t: "Das Buch, ___ du mir empfohlen hast, war super.", s: ["das"] }
        ]
      },
      {
        id: "A13",
        title: "Subordinate clauses and indirect questions",
        items: [
          { k: "b", t: "___ ich ein Kind war, wohnten wir auf dem Land.", s: ["als"] },
          { k: "b", t: "___ ich in Wien bin, besuche ich immer meine Tante.", s: ["wenn"] },
          { k: "b", t: "Weißt du, ___ der Supermarkt heute offen hat?", s: ["ob"] },
          { k: "b", t: "___ du kochst, decke ich den Tisch.", s: ["während|wenn"] },
          { k: "b", t: "Wasch dir die Hände, ___ du isst.", s: ["bevor"] },
          {
            k: "r",
            t: "Wann beginnt der Kurs? → Können Sie mir sagen, …",
            s: ["Können Sie mir sagen, wann der Kurs beginnt?", "wann der Kurs beginnt"]
          },
          {
            k: "r",
            t: "Wo ist der Bahnhof? → Ich weiß leider nicht, …",
            s: ["Ich weiß leider nicht, wo der Bahnhof ist.", "wo der Bahnhof ist"]
          }
        ]
      },
      {
        id: "A14",
        title: "Comparatives and superlatives",
        items: [
          { k: "b", t: "Graz ist ___ (groß) als Salzburg.", s: ["größer"] },
          { k: "b", t: "Der Zug ist genauso schnell ___ das Auto.", s: ["wie"] },
          { k: "b", t: "Das ist die ___ (gut) Idee von allen.", s: ["beste"] },
          { k: "b", t: "Im Juli ist es meistens am ___ (warm).", s: ["wärmsten"] },
          { k: "b", t: "Ich trinke ___ (gern) Tee als Kaffee.", s: ["lieber"] }
        ]
      },
      {
        id: "A15",
        title: "Negation: nicht or kein",
        items: [
          { k: "b", t: "Ich habe heute ___ Zeit.", s: ["keine"] },
          { k: "b", t: "Ich kenne den Mann ___.", s: ["nicht"] },
          { k: "b", t: "Er ist ___ Arzt, sondern Lehrer.", s: ["kein"] },
          { k: "b", t: "Wir fahren ___ mit dem Auto, sondern mit dem Zug.", s: ["nicht"] }
        ]
      },
      {
        id: "A16",
        title: "Error correction",
        hint: "Each sentence has one mistake. Write the correct sentence.",
        items: [
          {
            k: "r",
            t: "Ich habe gestern nach Hause gegangen.",
            s: ["Ich bin gestern nach Hause gegangen.", "Gestern bin ich nach Hause gegangen."]
          },
          { k: "r", t: "Ich helfe dich gern.", s: ["Ich helfe dir gern.", "Ich helfe dir gerne."] },
          {
            k: "r",
            t: "Wenn ich gestern nach Hause kam, war niemand da.",
            s: ["Als ich gestern nach Hause kam, war niemand da."]
          },
          {
            k: "r",
            t: "Gestern ich habe meine Freundin getroffen.",
            s: ["Gestern habe ich meine Freundin getroffen.", "Ich habe gestern meine Freundin getroffen."]
          },
          {
            k: "r",
            t: "Ich freue mich für das Wochenende.",
            s: ["Ich freue mich auf das Wochenende.", "Ich freue mich aufs Wochenende."]
          },
          {
            k: "r",
            t: "Er hat einen Job bei ein großes Unternehmen gefunden.",
            s: ["Er hat einen Job bei einem großen Unternehmen gefunden."]
          },
          { k: "r", t: "Ich weiß nicht, wann kommt der Bus.", s: ["Ich weiß nicht, wann der Bus kommt."] },
          {
            k: "r",
            t: "Das ist die Kollegin, die ich das Projekt erklärt habe.",
            s: ["Das ist die Kollegin, der ich das Projekt erklärt habe."]
          }
        ]
      },
      {
        id: "A17",
        title: "Mixed B1 grammar",
        hint: "Look at the label next to each task.",
        items: [
          { k: "b", t: "___ mir bitte das Salz! (geben)", tag: "Imperativ, du", s: ["gib"] },
          { k: "b", t: "___ bitte leise, das Baby schläft! (sein)", tag: "Imperativ, ihr", s: ["seid"] },
          { k: "b", t: "Gestern ___ ich nicht kommen, ich war krank. (können)", tag: "Präteritum", s: ["konnte"] },
          { k: "b", t: "Als Kind ___ ich jeden Tag Klavier üben. (müssen)", tag: "Präteritum", s: ["musste"] },
          { k: "r", t: "Ich besuche meine Oma.", tag: "Perfekt", s: ["Ich habe meine Oma besucht."] },
          { k: "r", t: "Er versteht die Frage nicht.", tag: "Perfekt", s: ["Er hat die Frage nicht verstanden."] },
          { k: "r", t: "Wir telefonieren lange.", tag: "Perfekt", s: ["Wir haben lange telefoniert."] },
          { k: "b", t: "Ich wohne ___ drei Jahren in Graz.", s: ["seit"] },
          { k: "b", t: "Ich bin ___ zwei Wochen umgezogen.", s: ["vor"] },
          { k: "b", t: "Ich trinke gern kalt___ Wasser.", s: ["es"] },
          { k: "b", t: "Wir haben sehr nett___ Nachbarn.", s: ["e"] }
        ]
      }
    ]
  },
  {
    id: "B",
    name: "Vocabulary",
    time: "approx. 20 minutes",
    sections: [
      {
        id: "B1",
        title: "Fixed expressions",
        bank: ["treffen", "stellen", "vereinbaren", "nehmen", "machen", "sammeln"],
        items: [
          { k: "b", t: "einen Termin ___", s: ["vereinbaren"] },
          { k: "b", t: "eine Entscheidung ___", s: ["treffen"] },
          { k: "b", t: "eine Frage ___", s: ["stellen"] },
          { k: "b", t: "Rücksicht auf andere ___", s: ["nehmen"] },
          { k: "b", t: "einen Vorschlag ___", s: ["machen"] },
          { k: "b", t: "Erfahrungen ___", s: ["sammeln"] }
        ]
      },
      {
        id: "B2",
        title: "Forming nouns",
        hint: "Write the noun with its article.",
        items: [
          { k: "r", t: "entscheiden", s: ["die Entscheidung"] },
          { k: "r", t: "sich bewerben", s: ["die Bewerbung"] },
          { k: "r", t: "möglich", s: ["die Möglichkeit"] },
          { k: "r", t: "frei", s: ["die Freiheit"] },
          { k: "r", t: "erfahren", s: ["die Erfahrung"] }
        ]
      },
      {
        id: "B3",
        title: "Formal register",
        hint: "Rewrite the sentence for a formal email.",
        items: [
          {
            k: "r",
            t: "Hey, kannst du mir mal schnell sagen, wann das Meeting ist?",
            m: "Könnten Sie mir bitte mitteilen, wann das Meeting stattfindet?"
          },
          {
            k: "r",
            t: "Sorry, ich kann morgen nicht, mir ist was dazwischengekommen.",
            m: "Leider kann ich morgen nicht teilnehmen, da mir etwas dazwischengekommen ist. Ich bitte um Ihr Verständnis."
          }
        ]
      },
      {
        id: "B4",
        title: "Everyday life in Austria",
        hint: "Choose from the word bank. Two words are not needed.",
        bank: [
          "Meldezettel",
          "e-card",
          "Rezept",
          "Überweisung",
          "Betriebskosten",
          "Kaution",
          "Termin",
          "verbinden",
          "Jänner",
          "Sackerl",
          "Rechnung",
          "Zeugnis"
        ],
        items: [
          {
            k: "b",
            t: "Nach dem Umzug muss man sich innerhalb von drei Tagen anmelden. Dafür braucht man den ___.",
            s: ["Meldezettel"]
          },
          {
            k: "b",
            t: "Meine ___ ist die Karte von der Krankenversicherung. Ich brauche sie bei jedem Arztbesuch.",
            s: ["e-card"]
          },
          { k: "b", t: "Die Ärztin schreibt mir ein ___ für die Apotheke.", s: ["Rezept"] },
          { k: "b", t: "Mein Hausarzt gibt mir eine ___ zum Facharzt.", s: ["Überweisung"] },
          {
            k: "b",
            t: "Die Miete beträgt 650 Euro, dazu kommen noch die ___ für Heizung, Wasser und Müll.",
            s: ["Betriebskosten"]
          },
          { k: "b", t: "Beim Einzug zahlt man meistens drei Monatsmieten als ___.", s: ["Kaution"] },
          { k: "b", t: "Ich rufe in der Praxis an und vereinbare einen ___.", s: ["Termin"] },
          { k: "b", t: "Können Sie mich bitte mit Frau Berger ___?", s: ["verbinden"] },
          { k: "b", t: "Im ___ ist es oft sehr kalt und es schneit.", s: ["Jänner"] },
          { k: "b", t: "Brauchen Sie ein ___? – Nein danke, ich habe eine Tasche dabei.", s: ["Sackerl"] }
        ]
      },
      {
        id: "B5",
        title: "Articles",
        hint: "Write der, die or das.",
        items: [
          { k: "b", t: "___ Termin", s: ["der"] },
          { k: "b", t: "___ Rechnung", s: ["die"] },
          { k: "b", t: "___ Formular", s: ["das"] },
          { k: "b", t: "___ Monat", s: ["der"] },
          { k: "b", t: "___ Gehalt", s: ["das|der"] },
          { k: "b", t: "___ Uhr", s: ["die"] },
          { k: "b", t: "___ Gemüse", s: ["das"] },
          { k: "b", t: "___ Käse", s: ["der"] },
          { k: "b", t: "___ Tablette", s: ["die"] },
          { k: "b", t: "___ Ergebnis", s: ["das"] }
        ]
      }
    ]
  },
  {
    id: "C",
    name: "Reading",
    time: "approx. 10 minutes",
    sections: [
      {
        id: "C1",
        title: "Reparieren statt wegwerfen",
        reading: true,
        hint: "Read the text and answer the questions (richtig/falsch, then in full German sentences).",
        items: [
          { k: "rf", t: "Das Repair-Café findet jeden Samstag statt.", s: "falsch" },
          { k: "rf", t: "Für die Reparatur muss man nichts bezahlen.", s: "richtig" },
          { k: "rf", t: "Martina Huber arbeitet noch als Elektrikerin.", s: "falsch" },
          { k: "rf", t: "Ungefähr zwei Drittel der Geräte können repariert werden.", s: "richtig" },
          {
            k: "s",
            t: "Warum sind die meisten Besucher zufrieden, auch wenn ihr Gerät nicht repariert werden konnte?",
            m: "Sie sind zufrieden, weil sie etwas gelernt und nette Menschen kennengelernt haben."
          },
          {
            k: "s",
            t: "Was plant Frau Huber, und wen sucht sie dafür?",
            m: "Sie plant, Kurse für Jugendliche anzubieten. Dafür sucht sie weitere Helfer, besonders Leute, die sich mit Fahrrädern und Computern auskennen."
          }
        ]
      }
    ]
  },
  {
    id: "D",
    name: "Writing",
    time: "approx. 30 minutes",
    sections: [
      {
        id: "D1",
        title: "Formal email",
        items: [
          {
            k: "w",
            min: 80,
            max: 100,
            t: "You would like to volunteer at the Repair-Café. Write an email to Frau Huber (in German).",
            points: [
              "Introduce yourself.",
              "Say why you are interested.",
              "Say when you have time.",
              "Ask her one question."
            ]
          }
        ]
      },
      {
        id: "D2",
        title: "Free writing",
        items: [
          {
            k: "w",
            min: 130,
            max: 180,
            t: "Write (in German) about a special experience from your past, e.g. a trip, an important day, or a new beginning.",
            points: ["What happened?", "How did you feel?", "What are your plans for the future?"]
          }
        ]
      }
    ]
  }
];

const PT_READING = [
  "Seit einem Jahr gibt es im Gemeindezentrum von Kirchberg jeden ersten Samstag im Monat ein Repair-Café. Die Idee ist einfach: Wer einen kaputten Toaster, eine Lampe oder eine Hose mit Loch hat, bringt sie mit und repariert sie gemeinsam mit ehrenamtlichen Helferinnen und Helfern. Bezahlen muss man nichts, aber viele Besucher lassen eine kleine Spende da.",
  "Gegründet wurde das Café von Martina Huber, einer pensionierten Elektrikerin. „Früher hat man Dinge repariert, heute kauft man sofort etwas Neues“, sagt sie. „Das kostet nicht nur Geld, sondern schadet auch der Umwelt.“",
  "Anfangs kamen nur wenige Leute, inzwischen sind es oft mehr als vierzig an einem Vormittag. Nicht alles kann gerettet werden: Bei etwa einem Drittel der Geräte fehlen Ersatzteile, oder die Reparatur wäre zu kompliziert. Trotzdem gehen die meisten Besucher zufrieden nach Hause, denn sie haben etwas gelernt und nette Menschen kennengelernt.",
  "Für das nächste Jahr plant Frau Huber, auch Kurse für Jugendliche anzubieten. Sie sucht deshalb noch weitere Helfer, besonders Leute, die sich mit Fahrrädern und Computern auskennen."
];
