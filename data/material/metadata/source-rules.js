export const SOURCE_TYPES = {
  OFFICIAL_UBSE: "official-ubse",
  OFFICIAL_NCERT: "official-ncert",
  UBSE_QUESTION_BANK: "ubse-question-bank",
  UBSE_SAMPLE_PAPER: "ubse-sample-paper",
  UBSE_PYQ: "ubse-pyq",
  REFERENCE: "reference",
  CROSS_CHECK: "cross-check"
};

export const SOURCE_RULES = {
  primary: [
    SOURCE_TYPES.OFFICIAL_UBSE,
    SOURCE_TYPES.OFFICIAL_NCERT,
    SOURCE_TYPES.UBSE_QUESTION_BANK,
    SOURCE_TYPES.UBSE_SAMPLE_PAPER,
    SOURCE_TYPES.UBSE_PYQ
  ],

  secondary: [
    SOURCE_TYPES.REFERENCE,
    SOURCE_TYPES.CROSS_CHECK
  ]
};
