/*
 * SCIENCE — UNIT I: CHEMICAL SUBSTENTS – NATURE AND BEHAVIOUR
 * Chapter 02 — Acids, Bases and Salts
 * Class 10 | UBSE | Session 2026-27
 * ID convention: science:chapter-02:q:<n> / science:chapter-02:fc:<n>
 */

export const scienceChapter02 = {
  subjectId: "science",
  chapterId: "chapter-02",
  chapterName: "अम्ल, क्षार एवं लवण",
  chapterNameEn: "Acids, Bases and Salts",
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
      id: "t2-1",
      name: "अम्ल और क्षार की परिभाषा",
      note: "H⁺ और OH⁻ देने वाले पदार्थ; अर्ध संकेती व यौगिक अम्ल-क्षार।"
    },
    {
      id: "t2-2",
      name: "संकेतक और pH स्केल",
      note: "लिटमस, फिनॉल्थैलीन, मिथाइल ऑरेंज, यूनिवर्सल संकेतक तथा pH की व्यावहारिक भूमिका।"
    },
    {
      id: "t2-3",
      name: "अम्ल व क्षार के रासायनिक गुणधर्म",
      note: "धातु, धातु ऑक्साइड, कार्बोनेट/हाइड्रोजनकार्बोनेट के साथ अभिक्रियाएँ।"
    },
    {
      id: "t2-4",
      name: "उदासीनन अभिक्रिया",
      note: "अम्ल और क्षार मिलकर लवण तथा जल बनाते हैं।"
    },
    {
      id: "t2-5",
      name: "महत्वपूर्ण यौगिक — तैयारी एवं उपयोग",
      note: "सोडियम हाइड्रॉक्साइड, ब्लीचिंग पाउडर, बेकिंग सोडा, वाशिंग सोडा, प्लास्टर ऑफ पेरिस।"
    },
    {
      id: "t2-6",
      name: "लवण — प्रकार व भूमिका",
      note: "साधारण लवण, अम्लीय लवण और क्षारीय लवण तथा रोज़मर्रा में उनका उपयोग।"
    }
  ],

  notes: {
    overview:
      "यह अध्याय हर रोज़ के अनुभवों से जुड़ा है — नींबू की खटास, साबुन का क्षारीय स्पर्श, " +
      "और एंटासिड खाने के बाद आराम। अम्ल वह पदार्थ है जो जलीय विलयन में H⁺ आयन देता है और " +
      "क्षार वह जो OH⁻ आयन देता है। संकेतक इन आयनों की उपस्थिति को रंग बदलकर दिखाते हैं। " +
      "pH स्केल H⁺ सांद्रता को संख्यात्मक रूप देती है, जिससे यह पता चलता है कि कोई विलयन कितना " +
      "अम्लीय या क्षारीय है। अंत में अध्याय पाँच प्रमुख यौगिकों की तैयारी, गुण और उपयोग पढ़ाता है, " +
      "जो बोर्ड परीक्षा में सर्वाधिक पूछे जाते हैं।",

    concepts: [
      {
        title: "अम्ल और क्षार",
        body:
          "जलीय विलयन में H⁺ आयन मुक्त करने वाले पदार्थ अम्ल कहलाते हैं, जैसे HCl, H₂SO₄, " +
          "CH₃COOH। जो पदार्थ OH⁻ आयन देते हैं वे क्षार कहलाते हैं, जैसे NaOH, Ca(OH)₂। " +
          "कुछ अम्ल विलयन में पूर्णतः आयनित नहीं होते — इन्हें कमज़ोर या अर्ध संकेती अम्ल कहते हैं, " +
          "जैसे CH₃COOH।"
      },
      {
        title: "संकेतक",
        body:
          "लिटमस पेपर अम्ल में लाल और क्षार में नीला होता है। फिनॉल्थैलीन अम्लीय विलयन में रंगहीन " +
          "और क्षारीय विलयन में गुलाबी रंग का होता है। मिथाइल ऑरेंज अम्लीय में लाल तथा क्षारीय में " +
          "पीला दिखता है। यूनिवर्सल संकेतक कई रंग परिवर्तन दिखाकर pH का अनुमान लगाता है।"
      },
      {
        title: "pH स्केल",
        body:
          "pH का अर्थ है हाइड्रोजन आयन सांद्रता का ऋण लॉगारिथम: pH = –log[H⁺]। लॉगारिथम गणना " +
          "की परिभाषा परीक्षा में नहीं पूछी जाती, केवल अवधारणा आवश्यक है। pH का मान 0 से 14 के बीच " +
          "होता है। 7 से कम मान अम्लीय, 7 पर उदासीन और 7 से अधिक मान क्षारीय दर्शाता है। जितना " +
          "pH कम, उतनी अधिक H⁺ सांद्रता और उतना अधिक अम्लीय व्यवहार।"
      },
      {
        title: "शरीर में pH का महत्व",
        body:
          "पेट में हाइड्रोक्लोरिक अम्ल खाए हुए भोजन को पचाता है और हानिकारक जीवाणुओं को नष्ट " +
          "करता है। यदि अधिक अम्ल बन जाए तो जलन होती है, जिसे एंटासिड दवाइयों से ठीक किया जाता है। " +
          "रक्त का pH लगभग 7.35–7.45 बना रहना चाहिए; इससे छोटा बदलाव भी जानलेवा हो सकता है। " +
          "क्षारीय वर्षा फसलों और इमारतों को नुकसान पहुँचाती है।"
      },
      {
        title: "उदासीनन",
        body:
          "अम्ल और क्षार आपस में अभिक्रिया करके लवण और जल बनाते हैं — इसे उदासीनन कहते हैं। " +
          "जैसे NaOH + HCl → NaCl + H₂O। यह अभिक्रिया अम्लीय और क्षारीय दोनों के अतिरेक को समाप्त " +
          "कर देती है, इसलिए यह प्रयोगशाला तथा दैनिक जीवन दोनों में महत्वपूर्ण है।"
      },
      {
        title: "क्लोर-एल्कली अभिक्रिया",
        body:
          "सोडियम क्लोराइड जलीय विलयन के विद्युत-अपघटन से सोडियम हाइड्रॉक्साइड, क्लोरीन और " +
          "हाइड्रोजन गैस बनती है। इसे क्लोर-एल्कली प्रक्रिया कहते हैं और यह औद्योगिक रूप से बहुत " +
          "महत्वपूर्ण है।"
      }
    ],

    keyFacts: [
      "pH < 7 → अम्लीय, pH = 7 → उदासीन, pH > 7 → क्षारीय।",
      "जैविक अम्लों का अर्थ है प्राकृतिक स्रोतों से प्राप्त अम्ल, जैसे साइट्रिक अम्ल (नींबू)।",
      "पेट में पाया जाने वाला अम्ल हाइड्रोक्लोरिक अम्ल (HCl) है।",
      "अम्लीय वर्षा को तब कहा जाता है जब वर्षा का pH 5.6 से कम हो।",
      "लिटमस सबसे साधारण संकेतक है — अम्ल में लाल, क्षार में नीला।",
      "NaOH को दही-जल विधि (सोडा-एश प्रक्रिया) द्वारा बनाया जाता है।",
      "ब्लीचिंग पाउडर का सूत्र CaOCl₂ है।",
      "बेकिंग सोडा NaHCO₃ और वाशिंग सोडा Na₂CO₃·10H₂O है।",
      "प्लास्टर ऑफ पेरिस CaSO₄·½H₂O है; जल मिलाने पर यह जिप्सम बनता है।",
      "एंटासिड दवाइयाँ क्षारीय पदार्थ होती हैं जो अतिरिक्त अम्ल का उदासीनन करती हैं।"
    ],

    definitions: [
      {
        term: "अम्ल (Acid)",
        meaning: "जलीय विलयन में H⁺ आयन मुक्त करने वाला पदार्थ।"
      },
      {
        term: "क्षार (Base)",
        meaning: "जलीय विलयन में OH⁻ आयन देने वाला पदार्थ, जो सामान्यतः चिपचिपा स्पर्श देता है।"
      },
      {
        term: "उदासीनन (Neutralisation)",
        meaning: "अम्ल और क्षार की अभिक्रिया से लवण व जल बनना।"
      },
      {
        term: "pH",
        meaning: "हाइड्रोजन आयन सांद्रता का ऋण लॉगारिथम, जो विलयन की अम्लीयता मापता है।"
      },
      {
        term: "संकेतक (Indicator)",
        meaning: "वह पदार्थ जो विलयन की अम्लीयता या क्षारीयता के अनुसार रंग बदलता है।"
      },
      {
        term: "अर्ध संकेती अम्ल",
        meaning: "वे अम्ल जो विलयन में आंशिक रूप से आयनित होते हैं, जैसे CH₃COOH।"
      },
      {
        term: "एंटासिड",
        meaning: "अतिरिक्त अम्ल को उदासीनित करने के लिए प्रयोग की जाने वाली क्षारीय दवा।"
      },
      {
        term: "अम्लीय वर्षा",
        meaning: "जब वर्षा का pH 5.6 से कम हो तो उसे अम्लीय वर्षा कहते हैं।"
      }
    ],

    examples: [
      "HCl → H⁺ + Cl⁻  (मज़बूत अम्ल)",
      "NaOH → Na⁺ + OH⁻  (मज़बूत क्षार)",
      "NaOH + HCl → NaCl + H₂O  (उदासीनन)",
      "Zn + 2HCl → ZnCl₂ + H₂ ↑  (धातु + अम्ल)",
      "CuO + 2HCl → CuCl₂ + H₂O  (मूल धातु ऑक्साइड + अम्ल)",
      "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂ ↑",
      "NaHCO₃ + HCl → NaCl + H₂O + CO₂ ↑",
      "Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O  (ब्लीचिंग पाउडर)"
    ],

    importantPoints: [
      "2NaCl + 2H₂O --(विद्युत-अपघटन)--> 2NaOH + Cl₂ ↑ + H₂ ↑ (क्लोर-एल्कली)।",
      "CaSO₄·2H₂O --(100°C)--> CaSO₄·½H₂O + 3/2 H₂O (POP बनाना)।",
      "ब्लीचिंग पाउडर का उपयोग कपड़े ब्लीच करने और पानी की शुद्धि में होता है।",
      "बेकिंग सोडा अम्लता को कम करता है और आग बुझाने (सोडा-एसिड अग्निशामक) में सहायक है।",
      "वाशिंग सोडा कार्यशालाओं में क्षारीयता बनाए रखने व तैयारी में प्रयुक्त होता है।",
      "धातु क्षारों से अभिक्रिया कर हाइड्रोजन देती हैं — जैसे Zn + 2NaOH → Na₂ZnO₂ + H₂।",
      "क्षारीय धातु ऑक्साइड (Na₂O) अम्लों से लवण बनाते हैं।",
      "अम्ल का स्वाद खट्टा और क्षार का चिकना/कड़वा होता है — पर चखकर पहचानना खतरनाक है।"
    ]
  },

  dates: [],

  questions: {
    mcq: [
      {
        id: "science:chapter-02:q:1",
        type: "mcq",
        topic: "t2-2",
        marks: 1,
        question: "pH का मान 4 होने पर विलयन को कहा जाएगा —",
        options: ["क्षारीय", "उदासीन", "अम्लीय", "लवणीय"],
        answer: "अम्लीय",
        explanation:
          "pH 7 से कम होने पर विलयन अम्लीय होता है; 4 अर्थात H⁺ सांद्रता अपेक्षाकृत अधिक है।",
        difficulty: "easy",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:2",
        type: "mcq",
        topic: "t2-2",
        marks: 1,
        question: "फिनॉल्थैलीन संकेतक क्षारीय विलयन में कौन-सा रंग दिखाता है?",
        options: ["लाल", "गुलाबी", "नीला", "रंगहीन"],
        answer: "गुलाबी",
        explanation:
          "फिनॉल्थैलीन अम्लीय व उदासीनन विलयन में रंगहीन और क्षारीय विलयन में गुलाबी हो जाता है।",
        difficulty: "easy",
        competency: "remember",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:3",
        type: "mcq",
        topic: "t2-5",
        marks: 1,
        question: "ब्लीचिंग पाउडर का सूत्र क्या है?",
        options: ["Ca(OH)₂", "CaOCl₂", "CaCO₃", "CaSO₄·½H₂O"],
        answer: "CaOCl₂",
        explanation:
          "ब्लीचिंग पाउडर कैल्सियम ऑक्सीक्लोराइड है, जो स्लैक चूने में क्लोरीन गुजारकर बनाया जाता है।",
        difficulty: "easy",
        competency: "remember",
        isPYQ: false,
        isImportant: true,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:4",
        type: "mcq",
        topic: "t2-5",
        marks: 1,
        question: "प्लास्टर ऑफ पेरिस का सूत्र है —",
        options: ["CaSO₄·2H₂O", "CaSO₄·½H₂O", "CaSO₄", "Ca(HSO₃)₂"],
        answer: "CaSO₄·½H₂O",
        explanation:
          "जिप्सम को लगभग 100°C पर ताप देने पर जल का एक भाग निकलकर POP बन जाता है।",
        difficulty: "easy",
        competency: "remember",
        isPYQ: false,
        isImportant: true,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:5",
        type: "mcq",
        topic: "t2-4",
        marks: 1,
        question: "अभिक्रिया NaOH + HCl → NaCl + H₂O को कहते हैं —",
        options: ["संयोजन", "उदासीनन", "विस्थापन", "अपघटन"],
        answer: "उदासीनन",
        explanation:
          "अम्ल और क्षार मिलकर लवण व जल बनाते हैं, इसलिए यह उदासीनन अभिक्रिया है।",
        difficulty: "easy",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:6",
        type: "mcq",
        topic: "t2-5",
        marks: 1,
        question: "बेकिंग सोडा का रासायनिक सूत्र है —",
        options: ["Na₂CO₃", "NaHCO₃", "NaOH", "NaCl"],
        answer: "NaHCO₃",
        explanation:
          "बेकिंग सोडा सोडियम हाइड्रोजनकार्बोनेट है, जबकि वाशिंग सोडा Na₂CO₃·10H₂O है।",
        difficulty: "easy",
        competency: "remember",
        isPYQ: false,
        isImportant: true,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:7",
        type: "mcq",
        topic: "t2-3",
        marks: 1,
        question: "अम्ल के साथ धातु की अभिक्रिया से कौन-सा गैस निकलती है?",
        options: ["ऑक्सीजन", "हाइड्रोजन", "क्लोरीन", "कार्बन डाइऑक्साइड"],
        answer: "हाइड्रोजन",
        explanation:
          "धातु H⁺ आयन ग्रहण कर H₂ गैस मुक्त करती है: Zn + 2HCl → ZnCl₂ + H₂ ↑।",
        difficulty: "easy",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:8",
        type: "mcq",
        topic: "t2-2",
        marks: 1,
        question: "मानव रक्त का सामान्य pH मान लगभग कितना होता है?",
        options: ["6.8", "7.0", "7.35–7.45", "8.5"],
        answer: "7.35–7.45",
        explanation:
          "रक्त का pH इसी सीमा में बना रहना चाहिए; छोटा परिवर्तन भी शरीर के लिए घातक हो सकता है।",
        difficulty: "medium",
        competency: "remember",
        isPYQ: false,
        label: "board-aligned-practice"
      }
    ],

    veryShort: [
      {
        id: "science:chapter-02:q:9",
        type: "veryShort",
        topic: "t2-1",
        marks: 1,
        question: "अम्ल की परिभाषा आयनों के आधार पर दीजिए।",
        answer: "जो पदार्थ जलीय विलयन में H⁺ आयन मुक्त करते हैं।",
        explanation: "जैसे HCl जल में H⁺ और Cl⁻ आयन देता है।",
        difficulty: "easy",
        competency: "remember",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:10",
        type: "veryShort",
        topic: "t2-2",
        marks: 1,
        question: "अम्लीय वर्षा की सीमा बताइए।",
        answer: "जब वर्षा का pH 5.6 से कम हो।",
        explanation: "सामान्य वर्षा भी थोड़ी अम्लीय होती है, इसलिए सीमा 5.6 रखी गई है।",
        difficulty: "easy",
        competency: "remember",
        isPYQ: false,
        isImportant: true,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:11",
        type: "veryShort",
        topic: "t2-5",
        marks: 1,
        question: "ब्लीचिंग पाउडर किससे बनाया जाता है?",
        answer: "स्लैक चूने (Ca(OH)₂) में क्लोरीन गुजारकर।",
        explanation: "अभिक्रिया: Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O।",
        difficulty: "medium",
        competency: "remember",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:12",
        type: "veryShort",
        topic: "t2-6",
        marks: 1,
        question: "एंटासिड दवाइयाँ किस प्रकार के पदार्थ होती हैं?",
        answer: "क्षारीय पदार्थ, जो अतिरिक्त अम्ल का उदासीनन करते हैं।",
        explanation: "ये अम्ल को लवण और जल में बदलकर जलन में आराम देती हैं।",
        difficulty: "easy",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:13",
        type: "veryShort",
        topic: "t2-5",
        marks: 1,
        question: "प्लास्टर ऑफ पेरिस के दो उपयोग लिखिए।",
        answer: "मोटे प्लास्टर बनाना तथा टूटी हड्डी पर पट्टा (cast) चढ़ाना।",
        explanation: "जल मिलाने पर POP जिप्सम बनकर सख्त हो जाता है।",
        difficulty: "easy",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:14",
        type: "veryShort",
        topic: "t2-3",
        marks: 1,
        question: "अम्ल और क्षार की अभिक्रिया से क्या बनता है?",
        answer: "लवण और जल।",
        explanation: "इसी को उदासीनन कहते हैं: अम्ल + क्षार → लवण + जल।",
        difficulty: "easy",
        competency: "remember",
        isPYQ: false,
        label: "board-aligned-practice"
      }
    ],

    short: [
      {
        id: "science:chapter-02:q:15",
        type: "short",
        topic: "t2-2",
        marks: 3,
        question:
          "pH स्केल की व्याख्या कीजिए और बताइए कि pH 3 तथा pH 11 वाले विलयनों में कौन अधिक अम्लीय है।",
        answer:
          "pH = –log[H⁺] द्वारा परिभाषित होता है और 0 से 14 के बीच होता है। 7 से कम अम्लीय, 7 उदासीन, 7 से अधिक क्षारीय।\n" +
          "pH 3 वाला विलयन अधिक अम्लीय है क्योंकि उसमें H⁺ सांद्रता pH 11 से बहुत अधिक है।",
        explanation:
          "pH घटने पर अम्लीयता बढ़ती है — यानी संबंध व्युत्क्रमानुपाती लॉग स्तर पर है।",
        difficulty: "medium",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:16",
        type: "short",
        topic: "t2-3",
        marks: 3,
        question:
          "अम्ल के साथ (i) धातु, (ii) धातु ऑक्साइड और (iii) धातु कार्बोनेट की अभिक्रिया के उदाहरण दीजिए।",
        answer:
          "(i) Zn + 2HCl → ZnCl₂ + H₂ ↑\n" +
          "(ii) CuO + 2HCl → CuCl₂ + H₂O\n" +
          "(iii) CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂ ↑",
        explanation:
          "तीनों अभिक्रियाओं में अम्ल H⁺ आयन देकर उत्पाद बनाता है; कार्बोनेट से CO₂ गैस निकलती है।",
        difficulty: "medium",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:17",
        type: "short",
        topic: "t2-5",
        marks: 3,
        question:
          "बेकिंग सोडा और वाशिंग सोडा — सूत्र, तैयारी और एक-एक उपयोग लिखिए।",
        answer:
          "बेकिंग सोडा — NaHCO₃; NaCl, H₂O और NH₃ से अभिक्रिया द्वारा (सोल्वे प्रक्रिया) बनता है; उपयोग: खाना पकाना व अम्लता कम करना।\n" +
          "वाशिंग सोडा — Na₂CO₃·10H₂O; सोडियम कार्बोनेट को जलीय अवस्था में क्रिस्टलीकृत कर बनता है; उपयोग: कारखानों में क्षारीयता व सफाई।",
        explanation:
          "दोनों को अक्सर उलझाया जाता है — NaHCO₃ (हाइड्रोजनकार्बोनेट) और Na₂CO₃·10H₂O (डेकाहाइड्रेट)।",
        difficulty: "medium",
        competency: "understand",
        isPYQ: false,
        isImportant: true,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:18",
        type: "short",
        topic: "t2-4",
        marks: 3,
        question: "उदासीनन की अभिक्रिया लिखिए और बताइए कि यह अम्ल व क्षार के अतिरेक को कैसे रोकती है।",
        answer:
          "अम्ल + क्षार → लवण + जल, जैसे NaOH + HCl → NaCl + H₂O।\n" +
          "अभिक्रिया में अम्ल के H⁺ और क्षार के OH⁻ मिलकर जल बना देते हैं, अतः दोनों ही सक्रिय आयन समाप्त हो जाते हैं और विलयन उदासीन हो जाता है।",
        explanation:
          "इसी सिद्धांत से मिट्टी को अम्लीय बनाम क्षारीय होने पर चूना/जिप्सम डालकर सुधारा जाता है।",
        difficulty: "medium",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      }
    ],

    long: [
      {
        id: "science:chapter-02:q:19",
        type: "long",
        topic: "t2-5",
        marks: 5,
        question:
          "सोडियम हाइड्रॉक्साइड, ब्लीचिंग पाउडर, बेकिंग सोडा, वाशिंग सोडा और प्लास्टर ऑफ पेरिस — इन पाँचों के सूत्र, तैयारी और उपयोग लिखिए।",
        answer:
          "1) NaOH — क्लोर-एल्कली विधि: 2NaCl + 2H₂O → 2NaOH + Cl₂ + H₂; उपयोग: साबुन, कागज़, रेयॉन।\n" +
          "2) CaOCl₂ — Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O; उपयोग: कपड़ा ब्लीच, पानी की शुद्धि।\n" +
          "3) NaHCO₃ — सोल्वे प्रक्रिया; उपयोग: खाना फुलाना, एंटासिड, अग्निशामक।\n" +
          "4) Na₂CO₃·10H₂O — सोडियम कार्बोनेट का जलीय क्रिस्टलीकरण; उपयोग: सफाई, काँच-साबुन उद्योग।\n" +
          "5) CaSO₄·½H₂O — जिप्सम को 100°C पर ताप देकर; उपयोग: प्लास्टर, हड्डी का पट्टा।",
        explanation:
          "प्रत्येक यौगिक के लिए सूत्र + तैयारी अभिक्रिया + कम से कम दो उपयोग लिखने पर पूरे अंक मिलते हैं।",
        difficulty: "medium",
        competency: "understand",
        isPYQ: false,
        isImportant: true,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:20",
        type: "long",
        topic: "t2-2",
        marks: 5,
        question:
          "pH स्केल का चित्र सहित वर्णन कीजिए और बताइए कि हमारे दैनिक जीवन में pH की क्या भूमिका है।",
        answer:
          "चित्र: 0 से 14 तक की पट्टी — बाईं ओर लाल/अम्लीय, मध्य में 7 उदासीन, दाईं ओर नीला/क्षारीय।\n" +
          "भूमिका: (i) पेट में HCl पाचन व जीवाणुनाशक, (ii) एंटासिड से अतिरिक्त अम्ल नियंत्रण, (iii) कृषि में मिट्टी का pH बीज व उर्वरक के लिए उपयुक्त रखना, (iv) अम्लीय वर्षा से फसल व इमारतों की सुरक्षा, (v) शरीर का रक्त pH स्थिर रखना आवश्यक।",
        explanation:
          "चित्र अनिवार्य है — बिना चित्र के अंक नहीं मिलते; लेबल में अम्लीय, उदासीन, क्षारीय अवश्य लिखें।",
        difficulty: "medium",
        competency: "analyze",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:21",
        type: "long",
        topic: "t2-6",
        marks: 5,
        question:
          "प्लास्टर ऑफ पेरिस और जिप्सम के बीच संबंध समझाइए और POP के तीन उपयोग बताइए।",
        answer:
          "जिप्सम का सूत्र CaSO₄·2H₂O है। इसे लगभग 100°C पर नियंत्रित ताप देने पर तीन अणु जल का एक भाग (1½ H₂O) निकल जाता है और CaSO₄·½H₂O यानी POP बन जाता है।\n" +
          "CaSO₄·2H₂O --(100°C)--> CaSO₄·½H₂O + 3/2 H₂O\n" +
          "POP में जल मिलाने पर यह पुनः जिप्सम बनकर सख्त हो जाता है।\n" +
          "उपयोग: (i) छत व दीवार का मोटा प्लास्टर, (ii) टूटी हड्डी पर पट्टा, (iii) दंत चिकित्सा में मुहावरे व मूर्ति निर्माण।",
        explanation:
          "याद रखें — POP को कभी खुले में नहीं रखना चाहिए, अन्यथा यह नमी सोखकर अपनी शक्ति खो देता है।",
        difficulty: "medium",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      }
    ],

    assertionReason: [
      {
        id: "science:chapter-02:q:22",
        type: "assertionReason",
        topic: "t2-2",
        marks: 1,
        question:
          "(A) pH 5 का विलयन pH 9 के विलयन से अधिक अम्लीय है। (R) pH में वृद्धि के साथ H⁺ सांद्रता घटती है।",
        options: [
          "दोनों सत्य हैं और R, A की सही व्याख्या है",
          "दोनों सत्य हैं परंतु R, A की सही व्याख्या नहीं है",
          "A सत्य है, R असत्य है",
          "A असत्य है, R सत्य है"
        ],
        answer: "दोनों सत्य हैं और R, A की सही व्याख्या है",
        explanation:
          "pH बढ़ने पर H⁺ सांद्रता घटती है, इसलिए pH 5 अधिक अम्लीय और pH 9 क्षारीय होता है।",
        difficulty: "medium",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:23",
        type: "assertionReason",
        topic: "t2-5",
        marks: 1,
        question:
          "(A) बेकिंग सोडा अम्लता से राहत देने में प्रयोग होता है। (R) बेकिंग सोडा क्षारीय प्रकृति का होता है।",
        options: [
          "दोनों सत्य हैं और R, A की सही व्याख्या है",
          "दोनों सत्य हैं परंतु R, A की सही व्याख्या नहीं है",
          "A सत्य है, R असत्य है",
          "A असत्य है, R सत्य है"
        ],
        answer: "दोनों सत्य हैं और R, A की सही व्याख्या है",
        explanation:
          "NaHCO₃ अम्ल का उदासीनन करता है, अतः इसकी क्षारीय प्रकृति ही A का कारण है।",
        difficulty: "easy",
        competency: "understand",
        isPYQ: false,
        label: "board-aligned-practice"
      }
    ],

    caseBased: [
      {
        id: "science:chapter-02:q:24",
        type: "caseBased",
        topic: "t2-5",
        marks: 3,
        caseText:
          "एक दंत चिकित्सक टूटे दाँत के ऊपर एक सफेद पेस्ट लगाता है जो कुछ ही मिनटों में सख्त हो जाता है। प्रयोगशाला में इसी पदार्थ को जल में मिलाकर प्लास्टर का घोल बनाया जाता है।",
        question:
          "इस सफेद पदार्थ की पहचान कीजिए और इसके सख्त होने की अभिक्रिया लिखिए।",
        subQuestions: [
          {
            question: "पदार्थ का नाम और सूत्र लिखिए।",
            answer: "प्लास्टर ऑफ पेरिस, CaSO₄·½H₂O।"
          },
          {
            question: "जल मिलाने पर क्या बनता है?",
            answer: "CaSO₄·½H₂O + 3/2 H₂O → CaSO₄·2H₂O (जिप्सम), जो सख्त हो जाता है।"
          }
        ],
        answer:
          "पदार्थ POP (CaSO₄·½H₂O) है; जल के साथ अभिक्रिया कर यह जिप्सम बनकर सख्त हो जाता है।",
        explanation:
          "यह अभिक्रिया उलटी है — जिप्सम को ताप देने पर POP और POP में जल मिलाने पर जिप्सम।",
        difficulty: "medium",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      }
    ],

    application: [
      {
        id: "science:chapter-02:q:25",
        type: "application",
        topic: "t2-6",
        marks: 2,
        question:
          "भोजन के बाद अजीब सी डकार और सीने में जलन होने पर डॉक्टर एंटासिड क्यों देते हैं?",
        answer:
          "पेट में अतिरिक्त HCl बनने से जलन होती है। एंटासिड क्षारीय पदार्थ होते हैं जो अम्ल का उदासीनन कर लवण व जल बना देते हैं, जिससे आराम मिलता है।",
        explanation:
          "उदासीनन का ही यह व्यावहारिक उपयोग है; एंटासिड की अधिक मात्रा भी हानिकारक हो सकती है।",
        difficulty: "easy",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:26",
        type: "application",
        topic: "t2-2",
        marks: 2,
        question:
          "बरसात के मौसम में रंग उतरने वाले कपड़े अक्सर फीके पड़ जाते हैं। इसका pH से क्या संबंध है?",
        answer:
          "बरसात का pH 5.6 से कम होने पर वह अम्लीय हो जाती है। अम्लीय वर्षा रंगों और धागों के रासायनिक रंगों को क्षीण कर देती है, जिससे कपड़े फीके पड़ जाते हैं।",
        explanation:
          "अम्लीय वर्षा के कारण इमारतों व मूर्तियों पर खुरचन भी अम्ल का ही परिणाम है।",
        difficulty: "medium",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:27",
        type: "application",
        topic: "t2-3",
        marks: 2,
        question:
          "डिब्बाबंद कोल्ड ड्रिंक में कार्बन डाइऑक्साइड भरी जाती है। खोलने पर उसका स्वाद अम्लीय क्यों लगता है?",
        answer:
          "CO₂ जल से अभिक्रिया कर कार्बोनिक अम्ल (H₂CO₃) बनाती है: CO₂ + H₂O → H₂CO₃। यह अम्ल ही खट्टा/अम्लीय स्वाद देता है।",
        explanation:
          "यह कार्बोनेट-हाइड्रोजनकार्बोनेट बफर से भी जुड़ा हुआ उदाहरण है।",
        difficulty: "medium",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      }
    ],

    numerical: [
      {
        id: "science:chapter-02:q:28",
        type: "numerical",
        topic: "t2-3",
        marks: 2,
        question: "समीकरण संतुलित कीजिए: Na₂CO₃ + HCl → NaCl + H₂O + CO₂",
        answer: "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂",
        explanation:
          "सोडियम 2 होने से NaCl का गुणांक 2 रखते हैं; फिर क्लोरीन 2 और हाइड्रोजन 2 स्वतः संतुलित हो जाते हैं।",
        difficulty: "medium",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      },
      {
        id: "science:chapter-02:q:29",
        type: "numerical",
        topic: "t2-3",
        marks: 2,
        question: "समीकरण संतुलित कीजिए: Al + HCl → AlCl₃ + H₂",
        answer: "2Al + 6HCl → 2AlCl₃ + 3H₂",
        explanation:
          "Cl 6 करने के लिए HCl का गुणांक 6 और Al का 2 रखते हैं; फिर H₂ = 3। दोनों ओर Al=2, Cl=6, H=6।",
        difficulty: "hard",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      }
    ],

    diagramBased: [
      {
        id: "science:chapter-02:q:30",
        type: "diagramBased",
        topic: "t2-2",
        marks: 3,
        question:
          "pH स्केल का चित्र बनाकर उस पर निम्नलिखित को उचित स्थान पर दर्शाइए — (i) नींबू का रस, (ii) खाने का सोडा विलयन, (iii) शुद्ध जल।",
        answer:
          "चित्र में 0 से 14 की पट्टी खींचें। नींबू का रस लगभग pH 2–3 (अम्लीय भाग), खाने का सोडा विलयन लगभग pH 8–9 (क्षारीय भाग) और शुद्ध जल ठीक pH 7 (उदासीन) पर चिह्नित करें। मध्य में 7 और दोनों ओर अम्लीय/क्षारीय लेबल अवश्य लिखें।",
        explanation:
          "अंक केवल तब मिलते हैं जब पट्टी, संख्या और तीनों उदाहरण सही स्थान पर लेबल किए गए हों।",
        difficulty: "medium",
        competency: "apply",
        isPYQ: false,
        label: "board-aligned-practice"
      }
    ]
  },

  revision: {
    flashcards: [
      {
        id: "science:chapter-02:fc:1",
        front: "अम्ल की आयन-आधारित परिभाषा?",
        back: "जलीय विलयन में H⁺ आयन देने वाला पदार्थ।",
        tags: ["अम्ल"],
        difficulty: "easy",
        important: true
      },
      {
        id: "science:chapter-02:fc:2",
        front: "क्षार की आयन-आधारित परिभाषा?",
        back: "जलीय विलयन में OH⁻ आयन देने वाला पदार्थ।",
        tags: ["क्षार"],
        difficulty: "easy",
        important: true
      },
      {
        id: "science:chapter-02:fc:3",
        front: "pH कब अम्लीय, उदासीन और क्षारीय दर्शाता है?",
        back: "7 से कम अम्लीय, 7 उदासीन, 7 से अधिक क्षारीय।",
        tags: ["pH"],
        difficulty: "easy",
        important: true
      },
      {
        id: "science:chapter-02:fc:4",
        front: "फिनॉल्थैलीन क्षारीय विलयन में रंग?",
        back: "गुलाबी (अम्लीय/उदासीन में रंगहीन)।",
        tags: ["संकेतक"],
        difficulty: "easy",
        important: false
      },
      {
        id: "science:chapter-02:fc:5",
        front: "ब्लीचिंग पाउडर का सूत्र?",
        back: "CaOCl₂ — Ca(OH)₂ और Cl₂ की अभिक्रिया से।",
        tags: ["लवण"],
        difficulty: "medium",
        important: true
      },
      {
        id: "science:chapter-02:fc:6",
        front: "POP और जिप्सम का सूत्र?",
        back: "POP = CaSO₄·½H₂O, जिप्सम = CaSO₄·2H₂O।",
        tags: ["लवण"],
        difficulty: "medium",
        important: true
      },
      {
        id: "science:chapter-02:fc:7",
        front: "क्लोर-एल्कली प्रक्रिया के उत्पाद?",
        back: "NaOH, Cl₂ और H₂ — NaCl जलीय विलयन के विद्युत-अपघटन से।",
        tags: ["NaOH"],
        difficulty: "medium",
        important: true
      },
      {
        id: "science:chapter-02:fc:8",
        front: "अम्लीय वर्षा की सीमा?",
        back: "वर्षा का pH 5.6 से कम।",
        tags: ["pH", "पर्यावरण"],
        difficulty: "easy",
        important: true
      },
      {
        id: "science:chapter-02:fc:9",
        front: "उदासीनन का सामान्य समीकरण?",
        back: "अम्ल + क्षार → लवण + जल।",
        tags: ["उदासीनन"],
        difficulty: "easy",
        important: true
      },
      {
        id: "science:chapter-02:fc:10",
        front: "बेकिंग सोडा और वाशिंग सोडा में अंतर?",
        back: "बेकिंग सोडा NaHCO₃, वाशिंग सोडा Na₂CO₃·10H₂O।",
        tags: ["लवण"],
        difficulty: "medium",
        important: true
      }
    ],

    quickRevision: [
      "अम्ल → H⁺, क्षार → OH⁻।",
      "pH = –log[H⁺]; 7 से कम अम्लीय, 7 उदासीन, 7 से अधिक क्षारीय।",
      "लिटमस: अम्ल में लाल, क्षार में नीला।",
      "फिनॉल्थैलीन: क्षारीय में गुलाबी, अम्लीय में रंगहीन।",
      "अम्ल + धातु → लवण + H₂; अम्ल + धातु ऑक्साइड → लवण + जल।",
      "अम्ल + कार्बोनेट → लवण + जल + CO₂।",
      "पाँच यौगिक: NaOH, CaOCl₂, NaHCO₃, Na₂CO₃·10H₂O, CaSO₄·½H₂O।",
      "POP बनाना: CaSO₄·2H₂O → 100°C → CaSO₄·½H₂O।",
      "अम्लीय वर्षा की सीमा pH 5.6।",
      "एंटासिड क्षारीय होता है और उदासीनन करता है।"
    ],

    mistakes: [
      "बेकिंग सोडा (NaHCO₃) और वाशिंग सोडा (Na₂CO₃·10H₂O) को उलटना।",
      "ब्लीचिंग पाउडर को Ca(OH)₂ समझ लेना — सही सूत्र CaOCl₂ है।",
      "pH बढ़ने पर अम्लीयता बढ़ना समझ लेना — वास्तव में घटती है।",
      "POP और जिप्सम के सूत्रों में जल की मात्रा उलट देना।",
      "उदासीनन के उत्पाद (लवण + जल) लिखना भूल जाना।",
      "अम्ल के साथ धातु से निकलने वाली गैस CO₂ लिख देना — वह H₂ होती है।"
    ]
  },

  /* No verified previous-year question is attached to this chapter yet. */
  pyq: [],

  sources: [
    {
      id: "ch02-src-ncert",
      type: "prescribed-textbook",
      title: "Science — Textbook for Class X, NCERT Publication",
      publisher: "NCERT",
      chapter: "Acids, Bases and Salts",
      verified: true
    },
    {
      id: "ch02-src-curriculum",
      type: "official-curriculum",
      title: "CBSE Class 10 Science Curriculum 2026-27, Subject Code 086",
      publisher: "CBSE Academic",
      usedFor: ["Unit I topic list", "unit weightage"],
      verified: true
    },
    {
      id: "ch02-src-ubse",
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








