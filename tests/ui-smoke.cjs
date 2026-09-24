const fs=require("fs");
const assert=require("assert");

const required=[
  "index.html",
  "css/global.css",
  "css/components.css",
  "css/responsive.css",
  "js/app.js",
  "js/core/theme.js",
  "js/core/state.js",
  "js/ui/header.js",
  "js/ui/navigation.js",
  "data/subjects.js"
];

for(const file of required){
  assert(fs.existsSync(file),`Missing: ${file}`);
}

const css=fs.readFileSync("css/global.css","utf8");
const app=fs.readFileSync("js/app.js","utf8");

assert(css.includes("--accent-color:#22D3EE"));
assert(css.includes("--accent-rgb"));
assert(css.includes(".interactive:hover"));
assert(css.includes("@media(prefers-reduced-motion:reduce)"));
assert(app.includes("Important Dates"));
assert(app.includes("Quick Quiz"));
assert(app.includes("Revision"));
assert(app.includes("Progress"));

console.log("UI architecture tests: PASS");
