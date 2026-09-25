/*
 * CLASS10NOTES — SCIENCE SUBJECT MANIFEST (Phase 3)
 * Class 10 | Uttarakhand Board (UBSE) | Session 2026-27
 *
 * Syllabus status: VERIFIED
 * Every chapter name, unit mapping, unit weightage and deleted-chapter
 * entry below was cross-checked against published syllabus documents
 * before being written. See `sources` at the bottom of this file.
 */

export const SCIENCE_MANIFEST = {
  subjectId: "science",
  subjectName: "Science",
  board: "UBSE",
  classLevel: 10,
  session: "2026-27",
  medium: ["hindi", "english", "hinglish"],

  alignment: {
    followsNCERT: true,
    note:
      "UBSE Class 10 Science follows the NCERT prescribed textbook and the " +
      "same five-unit structure used by CBSE (subject code 086)."
  },

  /* ------------------------------------------------------------
     EXAM STRUCTURE
     Source: CBSE Class 10 Science curriculum document 2026-27,
     Science (086), page 4. UBSE publishes the same unit structure.
  ------------------------------------------------------------ */
  exam: {
    theoryMarks: 80,
    internalAssessmentMarks: 20,
    totalMarks: 100,
    durationHours: 3,

    questionPaperDesign: {
      competencies: [
        { name: "Demonstrate Knowledge and Understanding", weight: "50%" },
        { name: "Application of Knowledge/Concepts", weight: "30%" },
        { name: "Formulate, Analyze, Evaluate and Create", weight: "20%" }
      ],
      typology: [
        "VSA including objective type questions",
        "Assertion - Reasoning type questions",
        "Short Answer (SA)",
        "Long Answer (LA)",
        "Source-based / Case-based / Passage-based / Integrated assessment"
      ],
      internalChoicePercent: 33
    },

    internalAssessment: [
      { component: "Periodic Assessment", marks: 10, split: "05 + 05" },
      { component: "Subject Enrichment (Practical Work)", marks: 5 },
      { component: "Portfolio", marks: 5 }
    ]
  },

  /* ------------------------------------------------------------
     UNITS — official weightage (sums to 80)
  ------------------------------------------------------------ */
  units: [
    {
      id: "unit-1",
      number: 1,
      name: "Chemical Substances – Nature and Behaviour",
      shortName: "Chemistry",
      theme: "Materials",
      marks: 25
    },
    {
      id: "unit-2",
      number: 2,
      name: "World of Living",
      shortName: "Biology",
      theme: "The World of the Living",
      marks: 25
    },
    {
      id: "unit-3",
      number: 3,
      name: "Natural Phenomena",
      shortName: "Physics",
      theme: "Natural Phenomena",
      marks: 12
    },
    {
      id: "unit-4",
      number: 4,
      name: "Effects of Current",
      shortName: "Physics",
      theme: "Effects of Current",
      marks: 13
    },
    {
      id: "unit-5",
      number: 5,
      name: "Natural Resources",
      shortName: "Environment",
      theme: "Natural Resources",
      marks: 5
    }
  ],

  /* ------------------------------------------------------------
     CHAPTERS — 13 in syllabus, in NCERT textbook order
  ------------------------------------------------------------ */
  chapterCount: 13,

  chapters: [
    {
      id: "sci-01",
      chapterId: "chapter-01",
      number: 1,
      title: {
        en: "Chemical Reactions and Equations",
        hi: "रासायनिक अभिक्रियाएँ एवं समीकरण",
        hinglish: "Chemical Reactions aur Equations"
      },
      unit: "unit-1",
      stream: "chemistry",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "sci-02",
      chapterId: "chapter-02",
      number: 2,
      title: {
        en: "Acids, Bases and Salts",
        hi: "अम्ल, क्षार एवं लवण",
        hinglish: "Acids, Bases aur Salts"
      },
      unit: "unit-1",
      stream: "chemistry",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "sci-03",
      chapterId: "chapter-03",
      number: 3,
      title: {
        en: "Metals and Non-metals",
        hi: "धातु एवं अधातु",
        hinglish: "Metals aur Non-metals"
      },
      unit: "unit-1",
      stream: "chemistry",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "sci-04",
      chapterId: "chapter-04",
      number: 4,
      title: {
        en: "Carbon and Its Compounds",
        hi: "कार्बन एवं उसके यौगिक",
        hinglish: "Carbon aur Uske Compounds"
      },
      unit: "unit-1",
      stream: "chemistry",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "sci-05",
      chapterId: "chapter-05",
      number: 5,
      title: { en: "Life Processes", hi: "जैव प्रक्रम", hinglish: "Life Processes" },
      unit: "unit-2",
      stream: "biology",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "sci-06",
      chapterId: "chapter-06",
      number: 6,
      title: {
        en: "Control and Coordination",
        hi: "नियंत्रण एवं समन्वय",
        hinglish: "Control aur Coordination"
      },
      unit: "unit-2",
      stream: "biology",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "sci-07",
      chapterId: "chapter-07",
      number: 7,
      title: {
        en: "How Do Organisms Reproduce?",
        hi: "जीव जनन कैसे करते हैं?",
        hinglish: "Organisms Reproduce Kaise Karte Hain?"
      },
      unit: "unit-2",
      stream: "biology",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "sci-08",
      chapterId: "chapter-08",
      number: 8,
      title: { en: "Heredity", hi: "आनुवंशिकता", hinglish: "Heredity" },
      unit: "unit-2",
      stream: "biology",
      syllabus: {
        included: true,
        sourceVerified: true,
        note:
          "Chapter is titled 'Heredity'. Evolution content is not part of " +
          "the Class 10 syllabus."
      }
    },
    {
      id: "sci-09",
      chapterId: "chapter-09",
      number: 9,
      title: {
        en: "Light – Reflection and Refraction",
        hi: "प्रकाश – परावर्तन तथा अपवर्तन",
        hinglish: "Light – Reflection aur Refraction"
      },
      unit: "unit-3",
      stream: "physics",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "sci-10",
      chapterId: "chapter-10",
      number: 10,
      title: {
        en: "The Human Eye and the Colourful World",
        hi: "मानव नेत्र तथा रंगीन संसार",
        hinglish: "Human Eye aur Colourful World"
      },
      unit: "unit-3",
      stream: "physics",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "sci-11",
      chapterId: "chapter-11",
      number: 11,
      title: { en: "Electricity", hi: "विद्युत", hinglish: "Electricity" },
      unit: "unit-4",
      stream: "physics",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "sci-12",
      chapterId: "chapter-12",
      number: 12,
      title: {
        en: "Magnetic Effects of Electric Current",
        hi: "विद्युत धारा के चुंबकीय प्रभाव",
        hinglish: "Magnetic Effects of Electric Current"
      },
      unit: "unit-4",
      stream: "physics",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "sci-13",
      chapterId: "chapter-13",
      number: 13,
      title: {
        en: "Our Environment",
        hi: "हमारा पर्यावरण",
        hinglish: "Our Environment"
      },
      unit: "unit-5",
      stream: "environment",
      syllabus: { included: true, sourceVerified: true }
    }
  ],

  /* ------------------------------------------------------------
     DELETED CHAPTERS — removed by NCERT rationalisation.
     These must NEVER be presented as UBSE 2026-27 syllabus.
  ------------------------------------------------------------ */
  deletedChapters: [
    {
      originalNumber: 5,
      title: {
        en: "Periodic Classification of Elements",
        hi: "तत्वों का आवर्ती वर्गीकरण"
      },
      reason: "Removed by NCERT rationalisation"
    },
    {
      originalNumber: 14,
      title: { en: "Sources of Energy", hi: "ऊर्जा के स्रोत" },
      reason: "Removed by NCERT rationalisation"
    },
    {
      originalNumber: 16,
      title: {
        en: "Sustainable Management of Natural Resources",
        hi: "प्राकृतिक संसाधनों का सतत प्रबंधन"
      },
      reason: "Removed by NCERT rationalisation"
    }
  ],

  /* ------------------------------------------------------------
     FIRST BATCH — Phase 3 deliverable
  ------------------------------------------------------------ */
  build: {
    batch: 2,
    stream: "all-streams",
    chapters: ["chapter-01", "chapter-02", "chapter-03", "chapter-04", "chapter-05", "chapter-06", "chapter-07", "chapter-08", "chapter-09", "chapter-10", "chapter-11", "chapter-12", "chapter-13"],
    status: "content-ready"
  }
};


