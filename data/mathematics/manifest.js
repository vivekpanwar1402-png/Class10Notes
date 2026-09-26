/*
 * CLASS10NOTES — MATHEMATICS SUBJECT MANIFEST
 * Class 10 | Uttarakhand Board (UBSE) | Session 2026-27
 *
 * Syllabus status: VERIFIED
 * Every chapter name, unit mapping, unit weightage and deleted-chapter
 * entry below is cross-checked against published UBSE/NCERT Class 10
 * Mathematics rationalised curriculum.
 */

export const MATHEMATICS_MANIFEST = {
  subjectId: "mathematics",
  subjectName: "Mathematics",
  board: "UBSE",
  classLevel: 10,
  session: "2026-27",
  medium: ["hindi", "english", "hinglish"],

  alignment: {
    followsNCERT: true,
    note:
      "UBSE Class 10 Mathematics follows the NCERT prescribed textbook and the " +
      "same 7-unit structure used by CBSE (subject code 041/241)."
  },

  /* ------------------------------------------------------------
     EXAM STRUCTURE (80 Marks Theory + 20 Internal = 100 Marks)
  ------------------------------------------------------------ */
  exam: {
    theoryMarks: 80,
    internalAssessmentMarks: 20,
    totalMarks: 100,
    durationHours: 3,

    questionPaperDesign: {
      competencies: [
        { name: "Remembering & Understanding", weight: "43-54%" },
        { name: "Applying (solve practical problems)", weight: "24-27%" },
        { name: "Analysing, Evaluating & Creating", weight: "22-25%" }
      ],
      typology: [
        "Multiple Choice Questions (MCQ)",
        "Assertion - Reasoning type questions",
        "Very Short Answer (VSA - 1 mark)",
        "Short Answer-I (SA-I - 2 marks)",
        "Short Answer-II (SA-II - 3 marks)",
        "Long Answer (LA - 5 marks)",
        "Case-based / Source-based integrated assessment units (4 marks)"
      ],
      internalChoicePercent: 33
    },

    internalAssessment: [
      { component: "Pen-Paper Test and Multiple Assessments", marks: 10, split: "05 + 05" },
      { component: "Portfolio", marks: 5 },
      { component: "Lab Practical / Subject Enrichment Activities", marks: 5 }
    ]
  },

  /* ------------------------------------------------------------
     UNITS — official UBSE weightage (sums to exactly 80 marks)
  ------------------------------------------------------------ */
  units: [
    {
      id: "unit-1",
      number: 1,
      name: "Number Systems",
      nameHi: "संख्या पद्धति",
      shortName: "Number Systems",
      theme: "Number Systems",
      marks: 6
    },
    {
      id: "unit-2",
      number: 2,
      name: "Algebra",
      nameHi: "बीजगणित",
      shortName: "Algebra",
      theme: "Algebra",
      marks: 20
    },
    {
      id: "unit-3",
      number: 3,
      name: "Coordinate Geometry",
      nameHi: "निर्देशांक ज्यामिति",
      shortName: "Coordinate Geometry",
      theme: "Coordinate Geometry",
      marks: 6
    },
    {
      id: "unit-4",
      number: 4,
      name: "Geometry",
      nameHi: "ज्यामिति",
      shortName: "Geometry",
      theme: "Geometry",
      marks: 15
    },
    {
      id: "unit-5",
      number: 5,
      name: "Trigonometry",
      nameHi: "त्रिकोणमिति",
      shortName: "Trigonometry",
      theme: "Trigonometry",
      marks: 12
    },
    {
      id: "unit-6",
      number: 6,
      name: "Mensuration",
      nameHi: "क्षेत्रमिति",
      shortName: "Mensuration",
      theme: "Mensuration",
      marks: 10
    },
    {
      id: "unit-7",
      number: 7,
      name: "Statistics and Probability",
      nameHi: "सांख्यिकी और प्रायिकता",
      shortName: "Stats & Prob",
      theme: "Statistics & Probability",
      marks: 11
    }
  ],

  /* ------------------------------------------------------------
     CHAPTERS — 14 active chapters in NCERT rationalised syllabus
  ------------------------------------------------------------ */
  chapterCount: 14,

  chapters: [
    {
      id: "math-01",
      chapterId: "chapter-01",
      number: 1,
      title: {
        en: "Real Numbers",
        hi: "वास्तविक संख्याएँ",
        hinglish: "Real Numbers"
      },
      unit: "unit-1",
      stream: "number-systems",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "math-02",
      chapterId: "chapter-02",
      number: 2,
      title: {
        en: "Polynomials",
        hi: "बहुपद",
        hinglish: "Polynomials"
      },
      unit: "unit-2",
      stream: "algebra",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "math-03",
      chapterId: "chapter-03",
      number: 3,
      title: {
        en: "Pair of Linear Equations in Two Variables",
        hi: "दो चरों वाले रैखिक समीकरण युग्म",
        hinglish: "Two Variables ke Linear Equations"
      },
      unit: "unit-2",
      stream: "algebra",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "math-04",
      chapterId: "chapter-04",
      number: 4,
      title: {
        en: "Quadratic Equations",
        hi: "द्विघात समीकरण",
        hinglish: "Quadratic Equations"
      },
      unit: "unit-2",
      stream: "algebra",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "math-05",
      chapterId: "chapter-05",
      number: 5,
      title: {
        en: "Arithmetic Progressions",
        hi: "समांतर श्रेढ़ियाँ",
        hinglish: "Arithmetic Progressions"
      },
      unit: "unit-2",
      stream: "algebra",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "math-06",
      chapterId: "chapter-06",
      number: 6,
      title: {
        en: "Triangles",
        hi: "त्रिभुज",
        hinglish: "Triangles"
      },
      unit: "unit-4",
      stream: "geometry",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "math-07",
      chapterId: "chapter-07",
      number: 7,
      title: {
        en: "Coordinate Geometry",
        hi: "निर्देशांक ज्यामिति",
        hinglish: "Coordinate Geometry"
      },
      unit: "unit-3",
      stream: "coordinate-geometry",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "math-08",
      chapterId: "chapter-08",
      number: 8,
      title: {
        en: "Introduction to Trigonometry",
        hi: "त्रिकोणमिति का परिचय",
        hinglish: "Trigonometry Introduction"
      },
      unit: "unit-5",
      stream: "trigonometry",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "math-09",
      chapterId: "chapter-09",
      number: 9,
      title: {
        en: "Some Applications of Trigonometry",
        hi: "त्रिकोणमिति के कुछ अनुप्रयोग",
        hinglish: "Trigonometry Applications"
      },
      unit: "unit-5",
      stream: "trigonometry",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "math-10",
      chapterId: "chapter-10",
      number: 10,
      title: {
        en: "Circles",
        hi: "वृत्त",
        hinglish: "Circles"
      },
      unit: "unit-4",
      stream: "geometry",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "math-11",
      chapterId: "chapter-11",
      number: 11,
      title: {
        en: "Areas Related to Circles",
        hi: "वृत्तों से संबंधित क्षेत्रफल",
        hinglish: "Areas Related to Circles"
      },
      unit: "unit-6",
      stream: "mensuration",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "math-12",
      chapterId: "chapter-12",
      number: 12,
      title: {
        en: "Surface Areas and Volumes",
        hi: "पृष्ठीय क्षेत्रफल और आयतन",
        hinglish: "Surface Areas aur Volumes"
      },
      unit: "unit-6",
      stream: "mensuration",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "math-13",
      chapterId: "chapter-13",
      number: 13,
      title: {
        en: "Statistics",
        hi: "सांख्यिकी",
        hinglish: "Statistics"
      },
      unit: "unit-7",
      stream: "statistics",
      syllabus: { included: true, sourceVerified: true }
    },
    {
      id: "math-14",
      chapterId: "chapter-14",
      number: 14,
      title: {
        en: "Probability",
        hi: "प्रायिकता",
        hinglish: "Probability"
      },
      unit: "unit-7",
      stream: "probability",
      syllabus: { included: true, sourceVerified: true }
    }
  ],

  /* ------------------------------------------------------------
     DELETED CHAPTERS — removed by NCERT rationalisation.
     These must NEVER be presented as UBSE 2026-27 syllabus.
  ------------------------------------------------------------ */
  deletedChapters: [
    {
      originalNumber: 11,
      title: {
        en: "Constructions",
        hi: "रचनाएँ"
      },
      reason: "Entire chapter removed by NCERT rationalisation for Class 10."
    }
  ],

  /* ------------------------------------------------------------
     BUILD PROGRESS
  ------------------------------------------------------------ */
  build: {
    batch: 1,
    stream: "number-systems",
    chapters: ["chapter-01"],
    status: "in-progress"
  }
};

export default MATHEMATICS_MANIFEST;

