/*
 * SCIENCE — UNIT I: CHEMICAL SUBSTANCES – NATURE AND BEHAVIOUR
 * Chapter 01 — Chemical Reactions and Equations
 * Class 10 | UBSE | Session 2026-27
 *
 * SCHEMA: follows data/material/material-schema.js. Per-question
 * subjectId/chapterId are inherited from the chapter root to stay
 * consistent with js/core/material-ids.js
 *   question : science:chapter-01:q:<n>
 *   flashcard: science:chapter-01:fc:<n>
 */

export const scienceChapter01 = {
  subjectId: "science",
  chapterId: "chapter-01",
  chapterName: "रासायनिक अभिक्रियाएँ एवं समीकरण",
  chapterNameEn: "Chemical Reactions and Equations",
  board: "UBSE",
  classLevel: 10,
  session: "2026-27",

  syllabus: {
    included: true,
    sourceVerified: true,
    assessmentType: "board",
    unit: "unit-1",
    unitName: "Chemical Substances – Nature and Behaviour",
    unitMarks: 25,
    marks: null
  },

  topics: [
    {
      id: "t1-1",
      name: "रासायनिक अभिक्रिया और समीकरण",
      note: "परिवर्तन की पहचान, समीकरण लिखने के नियम और अभिक्रियाओं को संख्यात्मक रूप देना।"
    },
    {
      id: "t1-2",
      name: "संतुलित रासायनिक समीकरण",
      note: "द्रव्यमान संरक्षण के आधार पर दोनों पक्षों पर परमाणुओं की संख्या बराबर करना।"
    },
    {
      id: "t1-3",
      name: "अभिक्रियाओं के प्रकार",
      note: "संयोजन, अपघटन, विस्थापन, दोहरा विस्थापन, उदासीनन और उष्माक्षेपण।"
    },
    {
      id: "t1-4",
      name: "ऑक्सीकरण और अपचयन",
      note: "ऑक्सीजन/हाइड्रोजन के आदान-प्रदान और इलेक्ट्रॉन स्थानांतरण आधारित परिभाषाएँ।"
    },
    {
      id: "t1-5",
      name: "अपचयक-ऑक्सीकारक अभिक्रियाएँ",
      note: "धातु अयस्कों से धातु निकालने में अपचयन की भूमिका।"
    },
    {
      id: "t1-6",
      name: "जंग और विकृति",
      note: "धातुओं का ऑक्सीकरण (जंग) और वसाओं का ऑक्सीकरण (विकृति) तथा रोकथाम।"
    }
  ],

  notes: {
    overview:
      "यह अध्याय विज्ञान की नींव है। जब किसी पदार्थ में रासायनिक परिवर्तन होता है और उसकी " +
      "रासायनिक पहचान बदल जाती है, तो उसे रासायनिक अभिक्रिया कहते हैं। अभिक्रिया को शब्दों के " +
      "बजाय समीकरण के रूप में लिखने से वे संक्षिप्त, सटीक और गणना के योग्य हो जाती हैं। समीकरण " +
      "को संतुलित करना द्रव्यमान संरक्षण के नियम का सीधा अनुप्रयोग है। अंत में अध्याय दो " +
      "व्यावहारिक घटनाओं — धातुओं पर जंग और वसाओं की विकृति — को ऑक्सीकरण की कड़ी के रूप में " +
      "जोड़ता है, जिससे पढ़ी हुई अवधारणा रोज़मर्रा की जिंदगी से जुड़ जाती है।",

    concepts: [
      {
        title: "रासायनिक अभिक्रिया",
        body:
          "वह प्रक्रिया जिसमें पदार्थों के परमाणुओं का पुनर्व्यवस्थापन होकर नए पदार्थ बनते हैं, " +
          "रासायनिक अभिक्रिया कहलाती है। अभिक्रिया में बनने वाले नए पदार्थ को उत्पाद कहते हैं। " +
          "इसके विपरीत भौतिक परिवर्तन में नई पदार्थ नहीं बनती, केवल अवस्था या रूप बदलता है।"
      },
      {
        title: "समीकरण लिखने के नियम",
        body:
          "अभिक्रियी बाईं ओर और उत्पाद दाईं ओर लिखे जाते हैं; दोनों के बीच '+' चिह्न लगता है; " +
          "अभिक्रिया और उत्पाद के बीच '→' चिह्न लगता है; गैसीय उत्पाद पर '↑' तथा अवक्षेपित ठोस " +
          "पर '↓' चिह्न लगाया जाता है; और आवश्यक अवस्था ऊपर लिखी जाती है, जैसे (गर्म) या (तरल विलयन)।"
      },
      {
        title: "संतुलित समीकरण",
        body:
          "संतुलित समीकरण वह है जिसमें अभिक्रिया और उत्पाद पक्ष पर प्रत्येक तत्व के परमाणुओं की " +
          "संख्या बराबर होती है। यह द्रव्यमान संरक्षण के नियम का परिणाम है — अभिक्रिया में न तो " +
          "पदार्थ बनती है न नष्ट होती है। कोष्ठक के बाहर रखे गुणांक कोष्ठक के भीतर के अंकों को " +
          "असंतुलित नहीं करते।"
      },
      {
        title: "अभिक्रियाओं के प्रकार",
        body:
          "संयोजन में दो या अधिक अभिक्रियी मिलकर एक ही उत्पाद बनाते हैं (A + B → AB)। अपघटन में " +
          "एक अभिक्रियी दो या अधिक भागों में टूटता है (AB → A + B) — ताप, विद्युत या प्रकाश से। " +
          "विस्थापन में अधिक सक्रिय धातु अपने से कम सक्रिय धातु को यौगिक से बाहर निकाल देती है। " +
          "दोहरे विस्थापन में दो यौगिकों के आयन आपस में स्थान बदल लेते हैं और अवक्षेप बनता है।"
      },
      {
        title: "उदासीनन और उष्माक्षेपण अभिक्रियाएँ",
        body:
          "जो अभिक्रिया आसपास से ऊष्मा ग्रहण करती है उदासीनन (endothermic) कहलाती है, जैसे चूने का " +
          "अपघटन। जो अभिक्रिया ऊष्मा मुक्त करती है उष्माक्षेपण (exothermic) कहलाती है, जैसे प्राकृतिक " +
          "गैस जलना या चूने पर पानी डालना। श्वसन भी एक उष्माक्षेपण अभिक्रिया है।"
      },
      {
        title: "ऑक्सीकरण और अपचयन",
        body:
          "ऑक्सीकरण का अर्थ है ऑक्सीजन की प्राप्ति या हाइड्रोजन का क्षय। अपचयन का अर्थ है ऑक्सीजन " +
          "का क्षय या हाइड्रोजन की प्राप्ति। इलेक्ट्रॉन आधार पर ऑक्सीकरण वह है जिसमें इलेक्ट्रॉन का " +
          "क्षय हो और अपचयन वह जिसमें इलेक्ट्रॉन की प्राप्ति हो। किसी अभिक्रिया में ऑक्सीकरण व " +
          "अपचयन सदैव साथ-साथ होते हैं, इसलिए इन्हें अपचयक-ऑक्सीकारक अभिक्रिया कहते हैं।"
      },
      {
        title: "जंग",
        body:
          "धातु का अपने वातावरण के साथ अभिक्रिया करके क्षीण हो जाना जंग (corrosion) कहलाता है। लोहे " +
          "पर लाल-भूरा चूड़ा जंग का सबसे सामान्य उदाहरण है, जो नम वातावरण में बने जलयुक्त लौह " +
          "ऑक्साइड के कारण होता है। ताँबा और चाँदी पर भी जंग होता है, पर धीरे-धीरे।"
      },
      {
        title: "विकृति",
        body:
          "खाद्य तेलों और वसाओं का वायुमंडलीय ऑक्सीकरण होने पर उनकी संरचना बदल जाती है और उनका " +
          "गंध व स्वाद बिगड़ जाता है — यही विकृति (rancidity) है। इसे रोकने के लिए तेल में BHA, BHT " +
          "जैसे एंटीऑक्सीडेंट मिलाए जाते हैं, पैकेट में नाइट्रोजन गैस भरी जाती है, और खाना फ्रिज में " +
          "रखा जाता है।"
      }
    ],

    keyFacts: [
      "रासायनिक अभिक्रिया में नई पदार्थ बनती है; भौतिक परिवर्तन में नहीं।",
      "संतुलित समीकरण द्रव्यमान संरक्षण के नियम को दर्शाता है।",
      "2Mg + O₂ → 2MgO एक संयोजन अभिक्रिया है।",
      "CaCO₃ --(ताप)--> CaO + CO₂ उदासीनन अपघटन अभिक्रिया है।",
      "Fe + CuSO₄ → FeSO₄ + Cu में नीला रंग हरा हो जाता है।",
      "जंग धातु का ऑक्सीकरण है; विकृति वसा का ऑक्सीकरण है।",
      "चूने पर पानी डालने पर ऊष्मा मुक्त होती है, अतः अभिक्रिया उष्माक्षेपण है।",
      "नाइट्रोजन गैस तेलों को विकृति से बचाने के लिए पैकेटों में भरी जाती है।",
      "जंग रोकने के लिए धातु पर पेंट, तेल या जस्ता की परत चढ़ाई जाती है।",
      "लोहे को ताँबे या टिन के साथ मिलाकर अलॉय बनाने से जंग कम होता है।"
    ],

    definitions: [
      {
        term: "रासायनिक अभिक्रिया (Chemical Reaction)",
        meaning:
          "वह प्रक्रिया जिसमें पदार्थों के परमाणु पुनर्व्यवस्थित होकर नए पदार्थ का निर्माण करते हैं।"
      },
      {
        term: "संतुलित समीकरण (Balanced Equation)",
        meaning:
          "वह समीकरण जिसमें अभिक्रिया व उत्पाद पक्ष पर प्रत्येक तत्व के परमाणुओं की संख्या बराबर हो।"
      },
      {
        term: "संयोजन अभिक्रिया (Combination)",
        meaning: "दो या अधिक पदार्थ मिलकर एकमात्र उत्पाद बनाते हैं: A + B → AB।"
      },
      {
        term: "अपघटन अभिक्रिया (Decomposition)",
        meaning:
          "एक पदार्थ ताप, विद्युत या प्रकाश के प्रभाव से दो या अधिक सरल पदार्थों में टूटता है: AB → A + B।"
      },
      {
        term: "विस्थापन अभिक्रिया (Displacement)",
        meaning:
          "अधिक सक्रिय धातु अपने से कम सक्रिय धातु को उसके यौगिक से बाहर निकाल देती है।"
      },
      {
        term: "अपचयक (Reducing Agent)",
        meaning: "स्वयं ऑक्सीकरित होकर दूसरे पदार्थ का अपचयन करने वाला पदार्थ, जैसे कार्बन।"
      },
      {
        term: "जंग (Corrosion)",
        meaning: "धातु का वातावरण के ऑक्सीजन व नमी से अभिक्रिया करके क्षीण हो जाना।"
      },
      {
        term: "विकृति (Rancidity)",
        meaning: "खाद्य तेलों के ऑक्सीकरण से उनके गंध व स्वाद में आने वाली खराबी।"
      }
    ],

    examples: [
      "2Mg + O₂ → 2MgO  (संयोजन)",
      "CaO + H₂O → Ca(OH)₂  (संयोजन, उष्माक्षेपण)",
      "CaCO₃ --(ताप)--> CaO + CO₂ ↑  (अपघटन)",
      "2AgBr --(प्रकाश)--> 2Ag + Br₂  (प्रकाश-अपघटन)",
      "Fe + CuSO₄ → FeSO₄ + Cu  (विस्थापन)",
      "NaOH + HCl → NaCl + H₂O  (उदासीनन)",
      "ZnO + C → Zn + CO ↑  (अपचयन)",
      "3Fe + 4H₂O --(उच्च ताप)--> Fe₃O₄ + 4H₂ ↑  (संतुलित रूप)"
    ],

    importantPoints: [
      "समीकरण संतुलित करते समय कोष्ठक के बाहर रखे गुणांक का पूरे तत्व पर प्रभाव पड़ता है।",
      "विस्थापन अभिक्रिया के लिए अभिक्रियी धातु का अभिक्रियी श्रेणी में ऊपर होना आवश्यक है।",
      "ऑक्सीकरण और अपचयन एक साथ होते हैं — किसी एक के बिना दूसरा संभव नहीं।",
      "धातु अयस्क से धातु प्राप्त करने में अपचयक का चयन आर्थिक दक्षता को देखकर किया जाता है।",
      "प्लास्टर ऑफ पेरिस का सख्त होना और जीवाश्म ईंधन जलाना उष्माक्षेपण अभिक्रियाएँ हैं।",
      "जस्ता की परत चढ़ाना गैल्वेनाइज़ेशन कहलाता है।",
      "विकृति रोकने का भौतिक तरीका नाइट्रोजन भरना और रासायनिक तरीका एंटीऑक्सीडेंट मिलाना है।",
      "कोष्ठक के भीतर के अंक विकास कोष्ठक के अंकों को बदलने से नहीं बदलते।"
    ]
  },

  dates: [],

  questions: {
    /* ----------------------------------------------------------
       MCQs — each answer is the exact option string
    ---------------------------------------------------------- */
    mcq: [
      {
        id: "science:chapter-01:q:1",
        type: "mcq",
        topic: "t1-2",
        marks: 1,
        question: "समीकरण 3Fe + 4H₂O → Fe₃O₄ + 4H₂ संतुलित है या नहीं? H₂O के गुणांक का मान क्या है?",
        options: ["3", "4", "5", "6"],
        answer: "4",
        explanation:
          "दोनों पक्षों पर लोहे के 3, ऑक्सीजन के 4 और हाइड्रोजन के 8 परमाणु हैं, अतः समीकरण संतुलित है और H₂O का गुणांक 4 है।",
        difficulty: "easy",
        competency: "understand",
        isPYQ: false,
        isImportant: true,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:2",
        type: "mcq",
        topic: "t1-3",
        marks: 1,
        question: "CaO + H₂O → Ca(OH)₂ अभिक्रिया किस प्रकार की है?",
        options: ["अपघटन", "विस्थापन", "संयोजन", "दोहरा विस्थापन"],
        answer: "संयोजन",
        explanation:
          "दो पदार्थ मिलकर एक ही उत्पाद बना रहे हैं (A + B → AB), इसलिए यह संयोजन अभिक्रिया है। साथ ही ऊष्मा मुक्त होती है, अतः यह उष्माक्षेपण भी है।",
        difficulty: "easy",
        competency: "remember",
        isPYQ: false,
        isImportant: true,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:3",
        type: "mcq",
        topic: "t1-6",
        marks: 1,
        question: "लोहे पर लाल-भूरा चूड़ा बनना किसे दर्शाता है?",
        options: ["विकृति", "जंग", "अपघटन", "अवक्षेपण"],
        answer: "जंग",
        explanation:
          "नम वातावरण में लोहा ऑक्सीजन और जल से अभिक्रिया कर जलयुक्त लौह ऑक्साइड बनाता है, जिसे जंग कहते हैं।",
        difficulty: "easy",
        competency: "remember",
        isPYQ: false,
        isImportant: true,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:4",
        type: "mcq",
        topic: "t1-3",
        marks: 1,
        question: "2H₂ + O₂ → 2H₂O अभिक्रिया को कहा जाता है —",
        options: ["उदासीनन", "उष्माक्षेपण", "अपघटन", "विस्थापन"],
        answer: "उष्माक्षेपण",
        explanation:
          "इस अभिक्रिया में बड़ी मात्रा में ऊष्मा व प्रकाश मुक्त होती है, इसलिए यह उष्माक्षेपण अभिक्रिया है।",
        difficulty: "easy",
        competency: "understand",
        isPYQ: false,
        isImportant: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:5",
        type: "mcq",
        topic: "t1-3",
        marks: 1,
        question: "नीले CuSO₄ विलयन में लोहे की चूर्ण डालने पर क्या दिखाई देता है?",
        options: [
          "विलयन का रंग लाल हो जाना",
          "विलयन का रंग हरा हो जाना",
          "विलयन का रंग बिना बदले ताँबा जमना",
          "कोई परिवर्तन न होना"
        ],
        answer: "विलयन का रंग हरा हो जाना",
        explanation:
          "Fe + CuSO₄ → FeSO₄ + Cu में बना FeSO₄ हरे रंग का होता है, इसलिए विलयन हरा दिखाई देता है।",
        difficulty: "easy",
        competency: "apply",
        isPYQ: false,
        isImportant: true,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:6",
        type: "mcq",
        topic: "t1-6",
        marks: 1,
        question: "तेल की पैकेटिंग में नाइट्रोजन गैस भरने का कारण क्या है?",
        options: [
          "तेल का स्वाद बढ़ाने के लिए",
          "तेल को ऑक्सीकरण से बचाकर विकृति रोकने के लिए",
          "पैकेट को भारी बनाने के लिए",
          "तेल को जलाने से रोकने के लिए"
        ],
        answer: "तेल को ऑक्सीकरण से बचाकर विकृति रोकने के लिए",
        explanation:
          "नाइट्रोजन अवस्थित गैस है, यह तेल को वायुमंडलीय ऑक्सीजन के संपर्क में नहीं आने देती, अतः विकृति नहीं होती।",
        difficulty: "easy",
        competency: "apply",
        isPYQ: false,
        isImportant: true,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:7",
        type: "mcq",
        topic: "t1-3",
        marks: 1,
        question: "2AgBr --(प्रकाश)--> 2Ag + Br₂ किस प्रकार की अभिक्रिया है?",
        options: [
          "संयोजन",
          "प्रकाश-अपघटन",
          "दोहरा विस्थापन",
          "उष्माक्षेपण"
        ],
        answer: "प्रकाश-अपघटन",
        explanation:
          "प्रकाश की उपस्थिति में एक पदार्थ दो तत्वों में टूट रहा है, इसलिए यह प्रकाश-अपघटन अभिक्रिया है।",
        difficulty: "medium",
        competency: "understand",
        isPYQ: false,
        isImportant: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:8",
        type: "mcq",
        topic: "t1-5",
        marks: 1,
        question: "अभिक्रिया ZnO + C → Zn + CO में ZnO पर क्या होता है?",
        options: ["ऑक्सीकरण", "अपचयन", "उदासीनन", "अवक्षेपण"],
        answer: "अपचयन",
        explanation:
          "ZnO से ऑक्सीजन का क्षय होकर Zn बन रहा है, अतः ZnO का अपचयन हुआ है और C अपचयक का कार्य कर रहा है।",
        difficulty: "medium",
        competency: "understand",
        isPYQ: false,
        isImportant: true,
        label: "board-aligned-practice"
      }
    ],

    /* Very short answer (1 mark) */
    veryShort: [
      {
        id: "science:chapter-01:q:9",
        type: "veryShort",
        topic: "t1-3",
        marks: 1,
        question: "अभिक्रिया Fe + CuSO₄ → FeSO₄ + Cu में बनने वाले उत्पाद लिखिए।",
        answer: "FeSO₄ और Cu",
        explanation:
          "लोहा ताँबे को अपने से कम सक्रिय धातु होने के कारण CuSO₄ से बाहर निकाल देता है।",
        difficulty: "easy",
        competency: "remember",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:10",
        type: "veryShort",
        topic: "t1-2",
        marks: 1,
        question: "समीकरण संतुलित करने के पीछे कौन-सा सिद्धांत कार्य करता है?",
        answer: "द्रव्यमान संरक्षण का सिद्धांत",
        explanation:
          "अभिक्रिया में न तो पदार्थ बनती है न नष्ट होती है, इसलिए प्रत्येक तत्व के परमाणुओं की संख्या दोनों ओर बराबर रखनी पड़ती है।",
        difficulty: "easy",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:11",
        type: "veryShort",
        topic: "t1-3",
        marks: 1,
        question: "उदासीनन अभिक्रिया किसे कहते हैं?",
        answer: "वह अभिक्रिया जो आसपास से ऊष्मा ग्रहण करती है।",
        explanation:
          "जैसे CaCO₃ का ऊष्मा देकर अपघटन — यहाँ ताप अभिक्रिया को चलाने के लिए आवश्यक है।",
        difficulty: "easy",
        competency: "remember",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:12",
        type: "veryShort",
        topic: "t1-6",
        marks: 1,
        question: "लोहे पर बनने वाली जंग का रासायनिक सूत्र लिखिए।",
        answer: "Fe₂O₃·xH₂O (जलयुक्त लौह ऑक्साइड)",
        explanation:
          "यह लाल-भूरे रंग का पदार्थ है जो नमी और ऑक्सीजन की उपस्थिति में बनता है।",
        difficulty: "medium",
        competency: "remember",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:13",
        type: "veryShort",
        topic: "t1-6",
        marks: 1,
        question: "विकृति किस प्रक्रिया से होती है?",
        answer: "खाद्य तेलों के ऑक्सीकरण से",
        explanation:
          "वायुमंडलीय ऑक्सीजन तेल के असंतृप्त फैटी अम्लों से अभिक्रिया कर गंध व स्वाद बिगाड़ देती है।",
        difficulty: "easy",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:14",
        type: "veryShort",
        topic: "t1-3",
        marks: 1,
        question: "CaO का व्यावसायिक नाम क्या है?",
        answer: "चूना (quick lime)",
        explanation:
          "CaO को पानी मिलाने पर Ca(OH)₂ बनता है, जिसे चूना-पानी कहते हैं — यह संयोजन अभिक्रिया है।",
        difficulty: "easy",
        competency: "remember",
        isPYQ: false,
        label: "board-aligned-practice"
      }
    ],

    /* Short answer (2–3 marks) */
    short: [
      {
        id: "science:chapter-01:q:15",
        type: "short",
        topic: "t1-3",
        marks: 3,
        question:
          "संयोजन, अपघटन और विस्थापन अभिक्रियाओं की परिभाषा देकर प्रत्येक का एक-एक उदाहरण लिखिए।",
        answer:
          "संयोजन: दो या अधिक पदार्थ मिलकर एक उत्पाद बनाते हैं — 2Mg + O₂ → 2MgO।\n" +
          "अपघटन: एक पदार्थ ताप/विद्युत/प्रकाश से दो या अधिक पदार्थों में टूटता है — CaCO₃ → CaO + CO₂।\n" +
          "विस्थापन: अधिक सक्रिय धातु कम सक्रिय धातु को यौगिक से बाहर निकाल देती है — Zn + CuSO₄ → ZnSO₄ + Cu।",
        explanation:
          "तीनों में अंतर संरचना का है: संयोजन में एक उत्पाद, अपघटन में एक अभिक्रियी और विस्थापन में तत्वों का स्थान-परिवर्तन।",
        difficulty: "easy",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:16",
        type: "short",
        topic: "t1-2",
        marks: 3,
        question:
          "संतुलित रासायनिक समीकरण क्यों आवश्यक है? समीकरण संतुलित करने के दो नियम बताइए।",
        answer:
          "संतुलित समीकरण आवश्यक है क्योंकि यह द्रव्यमान संरक्षण के नियम को पूरा करता है और उत्पादों की मात्रा की सही गणना संभव बनाता है।\n" +
          "नियम 1: अभिक्रिया व उत्पाद पक्ष पर प्रत्येक तत्व के परमाणुओं की संख्या समान हो।\n" +
          "नियम 2: समीकरण संतुलित करते समय किसी अणु में तत्वों की आपसी संख्या नहीं बदलती।",
        explanation: "उदाहरण: 2H₂ + O₂ → 2H₂O में हाइड्रोजन व ऑक्सीजन दोनों ओर बराबर हैं।",
        difficulty: "medium",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:17",
        type: "short",
        topic: "t1-4",
        marks: 3,
        question:
          "ऑक्सीकरण और अपचयन की परिभाषा ऑक्सीजन के आधार पर दें और एक अभिक्रिया से स्पष्ट कीजिए।",
        answer:
          "ऑक्सीकरण: पदार्थ द्वारा ऑक्सीजन प्राप्त करना या हाइड्रोजन खोना।\n" +
          "अपचयन: पदार्थ द्वारा ऑक्सीजन खोना या हाइड्रोजन प्राप्त करना।\n" +
          "उदाहरण: 2Cu + O₂ → 2CuO में Cu का ऑक्सीकरण; CuO + H₂ → Cu + H₂O में CuO का अपचयन।",
        explanation:
          "एक ही अभिक्रिया में जहाँ एक पदार्थ ऑक्सीकरित होता है वहीं दूसरा अपचयित — इसलिए दोनों सदैव साथ चलते हैं।",
        difficulty: "medium",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:18",
        type: "short",
        topic: "t1-6",
        marks: 3,
        question: "जंग क्या है? यह किन धातुओं में होती है और रोकने के दो उपाय बताइए।",
        answer:
          "जंग धातु का वातावरण के साथ अभिक्रिया करके क्षीण हो जाना है। लोहे में लाल-भूरा, ताँबे में हरा और चाँदी में काला जंग होता है।\n" +
          "रोकथाम: (i) पेंट/तेल/ग्रीस की परत चढ़ाना, (ii) जस्ता की परत चढ़ाना (गैल्वेनाइज़ेशन)।",
        explanation: "परत धातु को ऑक्सीजन और नमी से अलग रखती है, जिससे अभिक्रिया रुक जाती है।",
        difficulty: "medium",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:19",
        type: "short",
        topic: "t1-6",
        marks: 3,
        question: "विकृति क्या है? इसे रोकने के तीन उपाय बताइए।",
        answer:
          "खाद्य तेलों के ऑक्सीकरण से उनके गंध व स्वाद में आने वाली खराबी को विकृति कहते हैं।\n" +
          "उपाय: (i) पैकेट में नाइट्रोजन गैस भरना, (ii) BHA/BHT जैसे एंटीऑक्सीडेंट मिलाना, (iii) खाने को फ्रिज में रखना।",
        explanation: "तीनों उपाय तेल को वायुमंडलीय ऑक्सीजन के संपर्क में आने से रोकते हैं।",
        difficulty: "medium",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      }
    ],

    /* Long answer (5 marks) */
    long: [
      {
        id: "science:chapter-01:q:20",
        type: "long",
        topic: "t1-3",
        marks: 5,
        question: "अभिक्रियाओं के प्रकारों को उदाहरण सहित विस्तार से समझाइए।",
        answer:
          "(i) संयोजन: A + B → AB, जैसे 2Mg + O₂ → 2MgO।\n" +
          "(ii) अपघटन: AB → A + B (ताप/विद्युत/प्रकाश द्वारा), जैसे CaCO₃ → CaO + CO₂ और 2AgBr → 2Ag + Br₂।\n" +
          "(iii) विस्थापन: अधिक सक्रिय धातु कम सक्रिय को खदेड़ती है, जैसे Zn + CuSO₄ → ZnSO₄ + Cu।\n" +
          "(iv) दोहरा विस्थापन: दो यौगिकों के आयन आपस में स्थान बदलते हैं, जैसे NaCl + AgNO₃ → AgCl ↓ + NaNO₃।\n" +
          "(v) उदासीनन/उष्माक्षेपण: ऊष्मा ग्रहण करने वाली जैसे CaCO₃ का अपघटन, ऊष्मा मुक्त करने वाली जैसे CH₄ का जलना।",
        explanation:
          "उत्तर में प्रत्येक प्रकार की परिभाषा, सामान्य सूत्र और कम से कम एक सही समीकरण अवश्य लिखें।",
        difficulty: "medium",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:21",
        type: "long",
        topic: "t1-2",
        marks: 5,
        question:
          "समीकरण 3Fe + 4H₂O → Fe₃O₄ + 4H₂ को चरणबद्ध तरीके से संतुलित कीजिए और संतुलन का अर्थ बताइए।",
        answer:
          "चरण 1: प्रत्येक तत्व की संख्या गिनिए — बाईं ओर Fe=1, H=2, O=1; दाईं ओर Fe=3, H=2, O=4।\n" +
          "चरण 2: लोहे को बराबर करने के लिए बाईं ओर Fe को 3 करें।\n" +
          "चरण 3: ऑक्सीजन 4 करने के लिए H₂O का गुणांक 4 रखें, जिससे H भी 8 हो जाता है।\n" +
          "चरण 4: दाईं ओर H₂ का गुणांक 4 रखें।\n" +
          "संतुलन का अर्थ: दोनों पक्षों पर Fe=3, O=4, H=8 — द्रव्यमान संरक्षण सिद्धांत पूरा हुआ।",
        explanation:
          "कोष्ठक में लिखा Fe₃O₄ एक यौगिक है, उसके भीतर की संख्या बाहर के गुणांक से गुणा करके ही बदली जा सकती है।",
        difficulty: "medium",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:22",
        type: "long",
        topic: "t1-5",
        marks: 5,
        question:
          "धातु अयस्कों से धातु निकालने में अपचयन की भूमिका समझाइए और उदाहरण दीजिए।",
        answer:
          "धातु अयस्क में धातु ऑक्साइड के रूप में पाई जाती है। उसे शुद्ध धातु में बदलने के लिए ऑक्सीजन हटानी पड़ती है, अर्थात अपचयन करना पड़ता है।\n" +
          "उदाहरण: ZnO + C → Zn + CO में C ऑक्सीजन लेकर CO बनाता है और ZnO का अपचयन कर देता है।\n" +
          "उदाहरण: Fe₂O₃ + 3CO → 2Fe + 3CO₂ में CO अपचयक है।\n" +
          "चयन आर्थिक दक्षता से होता है — कम सक्रिय धातुओं के लिए कार्बन/CO पर्याप्त है, अधिक सक्रिय के लिए विद्युत-अपचयन आवश्यक है।",
        explanation:
          "जो पदार्थ स्वयं ऑक्सीकरित होकर दूसरे का अपचयन करता है उसे अपचयक कहते हैं।",
        difficulty: "hard",
        competency: "analyze",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:23",
        type: "long",
        topic: "t1-6",
        marks: 5,
        question:
          "जंग और विकृति — कारण, परिणाम और रोकथाम की तुलना कीजिए।",
        answer:
          "जंग — कारण: धातु का ऑक्सीजन व नमी से अभिक्रिया; परिणाम: धातु का क्षीण होना; रोकथाम: पेंट/तेल/ग्रीस, गैल्वेनाइज़ेशन, अलॉय बनाना।\n" +
          "विकृति — कारण: तेलों का वायुमंडलीय ऑक्सीकरण; परिणाम: गंध व स्वाद बिगड़ना; रोकथाम: नाइट्रोजन पैकिंग, एंटीऑक्सीडेंट, फ्रिज में रखना।\n" +
          "समानता: दोनों ही ऑक्सीकरण की प्रक्रिया हैं जिनमें ऑक्सीजन प्रमुख भूमिका में है।",
        explanation:
          "तुलनात्मक उत्तर में कम से कम कारण, परिणाम और रोकथाम — तीनों आयाम अवश्य शामिल करें।",
        difficulty: "medium",
        competency: "analyze",
        isPYQ: false,
        label: "board-aligned-practice"
      }
    ],

    /* Assertion – Reasoning */
    assertionReason: [
      {
        id: "science:chapter-01:q:24",
        type: "assertionReason",
        topic: "t1-1",
        marks: 1,
        question:
          "(A) रासायनिक अभिक्रिया में नई पदार्थ का निर्माण होता है। (R) अभिक्रिया में परमाणुओं का पुनर्व्यवस्थापन होता है।",
        options: [
          "दोनों सत्य हैं और R, A की सही व्याख्या है",
          "दोनों सत्य हैं परंतु R, A की सही व्याख्या नहीं है",
          "A सत्य है, R असत्य है",
          "A असत्य है, R सत्य है"
        ],
        answer: "दोनों सत्य हैं और R, A की सही व्याख्या है",
        explanation:
          "परमाणुओं के पुनर्व्यवस्थापन के कारण ही नई पदार्थ बनती है, अतः R सीधे A को स्पष्ट करता है।",
        difficulty: "easy",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:25",
        type: "assertionReason",
        topic: "t1-2",
        marks: 1,
        question:
          "(A) संतुलित समीकरण में दोनों पक्षों पर प्रत्येक तत्व के परमाणु समान होते हैं। (R) अभिक्रिया में द्रव्यमान संरक्षण का नियम लागू होता है।",
        options: [
          "दोनों सत्य हैं और R, A की सही व्याख्या है",
          "दोनों सत्य हैं परंतु R, A की सही व्याख्या नहीं है",
          "A सत्य है, R असत्य है",
          "A असत्य है, R सत्य है"
        ],
        answer: "दोनों सत्य हैं और R, A की सही व्याख्या है",
        explanation:
          "द्रव्यमान संरक्षण ही यह सुनिश्चित करता है कि दोनों ओर परमाणुओं की संख्या बराबर रहे।",
        difficulty: "easy",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:26",
        type: "assertionReason",
        topic: "t1-6",
        marks: 1,
        question:
          "(A) लोहे की सतह पर पेंट चढ़ाकर जंग रोका जाता है। (R) पेंट की परत धातु को ऑक्सीजन और नमी से अलग रखती है।",
        options: [
          "दोनों सत्य हैं और R, A की सही व्याख्या है",
          "दोनों सत्य हैं परंतु R, A की सही व्याख्या नहीं है",
          "A सत्य है, R असत्य है",
          "A असत्य है, R सत्य है"
        ],
        answer: "दोनों सत्य हैं और R, A की सही व्याख्या है",
        explanation:
          "जंग के लिए ऑक्सीजन और नमी दोनों आवश्यक हैं; परत इन्हें धातु तक पहुँचने से रोक देती है।",
        difficulty: "easy",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      }
    ],

    /* Case / source based */
    caseBased: [
      {
        id: "science:chapter-01:q:27",
        type: "caseBased",
        topic: "t1-6",
        marks: 3,
        caseText:
          "एक बेकरी में खुले बर्तन में रखा घी कुछ दिनों में बासी गंध का हो जाता है, जबकि सीलबंद पैकेट में रखा समान घी लंबे समय तक ठीक रहता है। सीलबंद पैकेट पर लिखा होता है — 'Packed under nitrogen atmosphere'.",
        question: "घी के बासी होने की प्रक्रिया का नाम क्या है और यह किससे होती है?",
        subQuestions: [
          {
            question: "घी के बासी होने की प्रक्रिया का नाम बताइए।",
            answer: "विकृति (Rancidity), जो तेल/वसा के ऑक्सीकरण से होती है।"
          },
          {
            question: "नाइट्रोजन भरने से विकृति क्यों रुक जाती है?",
            answer:
              "नाइट्रोजन अवस्थित गैस है, यह ऑक्सीजन को वसा तक पहुँचने से रोक देती है, अतः ऑक्सीकरण नहीं होता।"
          }
        ],
        answer:
          "प्रक्रिया का नाम विकृति है। नाइट्रोजन ऑक्सीजन के स्थान पर भरी जाती है जिससे वसा का वायुमंडलीय ऑक्सीकरण रुक जाता है।",
        explanation:
          "यह प्रश्न अध्याय की 'विकृति' अवधारणा को वास्तविक पैकिंग से जोड़कर पूछता है।",
        difficulty: "medium",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:28",
        type: "caseBased",
        topic: "t1-3",
        marks: 3,
        caseText:
          "पुराने लोहे के दरवाज़े की जंजीर बारिश में कुछ ही दिनों में जंग खा जाती है, जबकि जस्ता चढ़ी (galvanised) जंजीर वर्षों तक चलती है।",
        question: "जंजीर के जंग खाने का रासायनिक कारण क्या है?",
        subQuestions: [
          {
            question: "जंग खाने की अभिक्रिया को समतल लिखिए।",
            answer: "लगभग 4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O"
          },
          {
            question: "जस्ता चढ़ाने से जंग क्यों नहीं लगती?",
            answer:
              "जस्ता लोहे से अधिक सक्रिय होकर स्वयं ऑक्सीकरित हो जाता है और लोहे की रक्षा करता है (कैथोडिक सुरक्षा)।"
          }
        ],
        answer:
          "लोहा नमी और ऑक्सीजन से अभिक्रिया कर जलयुक्त लौह ऑक्साइड बनाता है; जस्ता की परत लोहे को इनसे अलग रखती है।",
        explanation:
          "जंग रोकने के दो स्तर समझने आवश्यक हैं — भौतिक अवरोध और धातु का सक्रिय संरक्षण।",
        difficulty: "medium",
        competency: "analyze",
        isPYQ: false,
        label: "board-aligned-practice"
      }
    ],

    /* Application / competency based */
    application: [
      {
        id: "science:chapter-01:q:29",
        type: "application",
        topic: "t1-6",
        marks: 2,
        question:
          "बारिश के मौसम में लोहे की जंजीर जल्दी जंग खा जाती है जबकि शुष्क मौसम में नहीं। कारण बताइए।",
        answer:
          "जंग के लिए ऑक्सीजन और जल दोनों आवश्यक हैं। बारिश में नमी अधिक होने से लोहे की सतह पर पानी की पतली परत बनी रहती है, जो अभिक्रिया को तेज कर देती है।",
        explanation:
          "शुष्क वातावरण में जल का अभाव होने से जलयुक्त लौह ऑक्साइड नहीं बन पाता, अतः जंग धीमी हो जाती है।",
        difficulty: "medium",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:30",
        type: "application",
        topic: "t1-6",
        marks: 2,
        question:
          "खुली हवा में रखा तेल समय के साथ बदबूदार हो जाता है। यह किस प्रक्रिया का परिणाम है और इसे रोकने के दो उपाय बताइए।",
        answer:
          "यह विकृति है, जो तेल के वायुमंडलीय ऑक्सीकरण से होती है। रोकथाम: (i) तेल को सीलबंद बोतल में रखना व फ्रिज में रखना, (ii) तेल में BHA/BHT जैसा एंटीऑक्सीडेंट मिलाना।",
        explanation:
          "दोनों उपाय ऑक्सीजन के संपर्क को घटाते हैं या ऑक्सीकरण की श्रृंखला अभिक्रिया को रोकते हैं।",
        difficulty: "medium",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:31",
        type: "application",
        topic: "t1-3",
        marks: 2,
        question:
          "सड़क पर बिछा चूना (CaO) बरसात में गर्म हो जाता है और सख्त पड़ जाता है। अभिक्रिया का प्रकार व समीकरण लिखिए।",
        answer:
          "प्रकार: संयोजन तथा उष्माक्षेपण अभिक्रिया। समीकरण: CaO + H₂O → Ca(OH)₂ + ऊष्मा।",
        explanation:
          "यही कारण है कि चूना पानी मिलाने पर हाथ जला सकता है, इसलिए सावधानी से इस्तेमाल करना चाहिए।",
        difficulty: "easy",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      }
    ],

    /* Numerical / balancing practice */
    numerical: [
      {
        id: "science:chapter-01:q:32",
        type: "numerical",
        topic: "t1-2",
        marks: 2,
        question: "समीकरण को संतुलित कीजिए: Al + O₂ → Al₂O₃",
        answer: "4Al + 3O₂ → 2Al₂O₃",
        explanation:
          "ऑक्सीजन 3 और 2 का लघुत्तम समापवर्त्य 6 लेते हैं; फिर एल्यूमिनियम को 4 करते हैं। दोनों ओर Al=4, O=6।",
        difficulty: "medium",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:33",
        type: "numerical",
        topic: "t1-2",
        marks: 2,
        question: "समीकरण को संतुलित कीजिए: C₃H₈ + O₂ → CO₂ + H₂O",
        answer: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",
        explanation:
          "कार्बन 3, हाइड्रोजन 8 के लिए CO₂ का गुणांक 3 और H₂O का 4 रखते हैं; ऑक्सीजन (3×2 + 4) = 10 अर्थात O₂ का गुणांक 5।",
        difficulty: "hard",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:34",
        type: "numerical",
        topic: "t1-5",
        marks: 2,
        question: "समीकरण को संतुलित कीजिए: Fe₂O₃ + CO → Fe + CO₂",
        answer: "Fe₂O₃ + 3CO → 2Fe + 3CO₂",
        explanation:
          "Fe₂O₃ में ऑक्सीजन 3 होने से CO का गुणांक 3 रखते हैं; फिर लोहा 2 और CO₂ भी 3 हो जाता है।",
        difficulty: "medium",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      }
    ],

    /* Diagram / figure based */
    diagramBased: [
      {
        id: "science:chapter-01:q:35",
        type: "diagramBased",
        topic: "t1-3",
        marks: 3,
        question:
          "CuSO₄ विलयन में लोहे की पिन डालने पर होने वाले परिवर्तन का चित्र बनाकर उस पर लेबल लिखिए।",
        answer:
          "चित्र में दिखाएँ — (i) प्रारंभ में नीला CuSO₄ विलयन व भूरे रंग की लोहे की पिन, (ii) कुछ समय बाद विलयन का हरा होना (FeSO₄), (iii) पिन पर ताँबे की परत चढ़ना, (iv) विलयन का धीरे-धीरे रंगहीन होना जब Fe पूरी तरह घुल जाए।",
        explanation:
          "लेबल अनिवार्य हैं — पिन, विलयन, रंग परिवर्तन और जमा हुआ ताँबा। चित्र के बिना अंक नहीं मिलते।",
        difficulty: "easy",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-01:q:36",
        type: "diagramBased",
        topic: "t1-5",
        marks: 3,
        question:
          "कार्बन द्वारा लौह ऑक्साइड के अपचयन की अभिक्रिया का स्केच बनाकर अभिक्रियी व उत्पाद लेबल कीजिए।",
        answer:
          "स्केच में दिखाएँ — भट्टे में Fe₂O₃ (अभिक्रियी) व CO/C (अपचयक), नीचे पिघला Fe (उत्पाद) और निकलती CO₂ गैस। लेबल: अयस्क, अपचयक, उष्मा आपूर्ति, शुद्ध धातु, निकास गैस।",
        explanation:
          "यह प्रश्न प्रक्रिया-आधारित चित्र बनाने की क्षमता जाँचता है और 'Formulate, Analyze, Evaluate' श्रेणी में आता है।",
        difficulty: "medium",
        competency: "analyze",
        isPYQ: false,
        label: "board-aligned-practice"
      }
    ]
  },

  revision: {
    flashcards: [
      {
        id: "science:chapter-01:fc:1",
        front: "रासायनिक अभिक्रिया किसे कहते हैं?",
        back: "वह प्रक्रिया जिसमें परमाणुओं का पुनर्व्यवस्थापन होकर नई पदार्थ बनती है।",
        tags: ["अभिक्रिया", "परिभाषा"],
        difficulty: "easy",
        important: true
      },
      {
        id: "science:chapter-01:fc:2",
        front: "संतुलित समीकरण किसे कहते हैं?",
        back: "जिसमें दोनों पक्षों पर प्रत्येक तत्व के परमाणुओं की संख्या बराबर हो।",
        tags: ["समीकरण", "द्रव्यमान संरक्षण"],
        difficulty: "easy",
        important: true
      },
      {
        id: "science:chapter-01:fc:3",
        front: "A + B → AB किस प्रकार की अभिक्रिया है?",
        back: "संयोजन अभिक्रिया।",
        tags: ["प्रकार"],
        difficulty: "easy",
        important: false
      },
      {
        id: "science:chapter-01:fc:4",
        front: "उदासीनन और उष्माक्षेपण में अंतर?",
        back: "उदासीनन में ऊष्मा ग्रहण होती है, उष्माक्षेपण में ऊष्मा मुक्त होती है।",
        tags: ["ऊष्मागतिकी"],
        difficulty: "easy",
        important: true
      },
      {
        id: "science:chapter-01:fc:5",
        front: "ऑक्सीकरण की ऑक्सीजन-आधारित परिभाषा?",
        back: "पदार्थ द्वारा ऑक्सीजन प्राप्त करना या हाइड्रोजन खोना।",
        tags: ["ऑक्सीकरण"],
        difficulty: "easy",
        important: true
      },
      {
        id: "science:chapter-01:fc:6",
        front: "लोहे की जंग का सूत्र?",
        back: "Fe₂O₃·xH₂O — जलयुक्त लौह ऑक्साइड।",
        tags: ["जंग"],
        difficulty: "medium",
        important: true
      },
      {
        id: "science:chapter-01:fc:7",
        front: "विकृति रोकने के दो उपाय?",
        back: "नाइट्रोजन गैस भरना और एंटीऑक्सीडेंट (BHA/BHT) मिलाना।",
        tags: ["विकृति"],
        difficulty: "easy",
        important: true
      },
      {
        id: "science:chapter-01:fc:8",
        front: "जस्ता चढ़ाने की प्रक्रिया क्या कहलाती है?",
        back: "गैल्वेनाइज़ेशन।",
        tags: ["रोकथाम"],
        difficulty: "easy",
        important: false
      },
      {
        id: "science:chapter-01:fc:9",
        front: "अपचयक (reducing agent) क्या है?",
        back: "वह पदार्थ जो स्वयं ऑक्सीकरित होकर दूसरे पदार्थ का अपचयन करता है, जैसे C और CO।",
        tags: ["अपचयन"],
        difficulty: "medium",
        important: true
      },
      {
        id: "science:chapter-01:fc:10",
        front: "3Fe + 4H₂O → Fe₃O₄ + 4H₂ में संतुलित गुणांक?",
        back: "Fe = 3, H₂O = 4, H₂ = 4 — दोनों ओर Fe=3, O=4, H=8।",
        tags: ["संतुलन"],
        difficulty: "medium",
        important: false
      }
    ],

    quickRevision: [
      "अभिक्रिया = नई पदार्थ; भौतिक परिवर्तन ≠ नई पदार्थ।",
      "समीकरण संतुलित करने का आधार: द्रव्यमान संरक्षण।",
      "संयोजन: A + B → AB; अपघटन: AB → A + B; विस्थापन: A + BC → AC + B।",
      "दोहरा विस्थापन → अवक्षेप के साथ उत्पाद (जैसे AgCl ↓)।",
      "ऑक्सीकरण = ऑक्सीजन प्राप्ति / H₂ नाश; अपचयन = इसका विपरीत।",
      "इलेक्ट्रॉन-आधार पर: ऑक्सीकरण में e⁻ क्षय, अपचयन में e⁻ प्राप्ति।",
      "धातु अयस्क → धातु: अपचयन द्वारा (C, CO या विद्युत-अपचयन)।",
      "जंग = धातु का ऑक्सीकरण; विकृति = वसा का ऑक्सीकरण।",
      "जंग रोकथाम: पेंट/तेल, गैल्वेनाइज़ेशन, अलॉय।",
      "विकृति रोकथाम: नाइट्रोजन पैकिंग, एंटीऑक्सीडेंट, रेफ्रिजरेशन।"
    ],

    mistakes: [
      "कोष्ठक के अंदर के अंक (जैसे Fe₃O₄ का 3, 4) अकेले नहीं बदलते — बाहर का गुणांक बदलें।",
      "समीकरण बनाते समय कभी पदार्थ का सूत्र न बदलें, केवल गुणांक बदलें।",
      "जंग और विकृति — दोनों को ही सिर्फ 'ऑक्सीकरण' कहकर छोड़ न दें; अंतर स्पष्ट करें।",
      "अपचयक और ऑक्सीकारक उलटे समझ लेना — जो अपचयित होता है वह अपचयक है।",
      "अभिक्रिया में ऊपर '↑' या नीचे '↓' चिह्न लगाना भूल जाना।",
      "उष्माक्षेपण और उदासीनन का अर्थ उलटा कर देना।"
    ]
  },

  /* No verified previous-year question is attached to this chapter yet.
     Entries must only be added with a verified source and year. */
  pyq: [],

  sources: [
    {
      id: "ch01-src-ncert",
      type: "prescribed-textbook",
      title: "Science — Textbook for Class X, NCERT Publication",
      publisher: "NCERT",
      chapter: "Chemical Reactions and Equations",
      verified: true
    },
    {
      id: "ch01-src-curriculum",
      type: "official-curriculum",
      title: "CBSE Class 10 Science Curriculum 2026-27, Subject Code 086",
      publisher: "CBSE Academic",
      usedFor: ["Unit I topic list", "unit weightage"],
      verified: true
    },
    {
      id: "ch01-src-ubse",
      type: "official-syllabus",
      title: "UBSE Class 10 Science syllabus — Unit I: Chemical Substances",
      publisher: "Uttarakhand Board of School Education",
      usedFor: ["topic inclusion for UBSE"],
      verified: true
    }
  ],

  metadata: {
    difficulty: "mixed",
    competencyLevels: ["remember", "understand", "apply", "analyze"],
    verified: true,
    lastVerified: "2026-09-25"
  }
};









