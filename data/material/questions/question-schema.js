export const QUESTION_SCHEMA = {
  id: "",
  subjectId: "",
  chapterId: "",
  topicId: "",

  type: "",
  marks: 1,

  question: "",

  options: [],

  answer: "",

  explanation: "",

  difficulty: "medium",

  competency: "understand",

  tags: [],

  isPYQ: false,
  isImportant: false,

  source: {
    type: "",
    title: "",
    year: null
  }
};
