export const MATERIAL_SCHEMA = {
  subjectId: "",
  chapterId: "",
  chapterName: "",
  board: "UBSE",
  classLevel: 10,
  session: "2026-27",

  syllabus: {
    included: true,
    assessmentType: "board",
    marks: null
  },

  topics: [],

  notes: {
    overview: "",
    concepts: [],
    keyFacts: [],
    definitions: [],
    examples: [],
    importantPoints: []
  },

  questions: {
    mcq: [],
    veryShort: [],
    short: [],
    long: [],
    assertionReason: [],
    caseBased: [],
    application: [],
    numerical: [],
    diagramBased: []
  },

  revision: {
    flashcards: [],
    quickRevision: [],
    mistakes: []
  },

  dates: [],

  pyq: [],

  sources: [],

  metadata: {
    difficulty: "mixed",
    competencyLevels: [],
    lastVerified: null
  }
};
