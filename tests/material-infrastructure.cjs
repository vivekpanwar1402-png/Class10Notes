const assert=require("assert");
const fs=require("fs");

const required=[
  "data/material/material-schema.js",
  "data/material/questions/question-schema.js",
  "data/material/flashcards/flashcard-schema.js",
  "data/material/metadata/chapter-registry.js",
  "data/material/metadata/source-rules.js",
  "data/material/chapter-template.js",
  "js/core/material-loader.js",
  "js/core/material-ids.js",
  "js/features/material-index.js"
];

for(const file of required){
  assert(fs.existsSync(file),`Missing material file: ${file}`);
}

const schema=fs.readFileSync(
  "data/material/material-schema.js",
  "utf8"
);

const question=fs.readFileSync(
  "data/material/questions/question-schema.js",
  "utf8"
);

assert(schema.includes("UBSE"));
assert(schema.includes("2026-27"));
assert(schema.includes("mcq"));
assert(schema.includes("caseBased"));
assert(schema.includes("pyq"));

assert(question.includes("competency"));
assert(question.includes("difficulty"));
assert(question.includes("isPYQ"));

console.log("Material infrastructure tests: PASS");
