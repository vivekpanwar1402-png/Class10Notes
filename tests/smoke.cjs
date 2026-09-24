const fs=require("fs");
const assert=require("assert");

assert(fs.existsSync("index.html"));
assert(fs.existsSync("css/global.css"));
assert(fs.existsSync("css/components.css"));
assert(fs.existsSync("css/responsive.css"));
assert(fs.existsSync("js/app.js"));
assert(fs.existsSync("data/subjects.js"));

const html=fs.readFileSync("index.html","utf8");
assert(html.includes("./js/app.js"));
assert(!html.includes("const DATA="));
assert(!html.includes("Content jald add hoga"));

console.log("Class10Notes smoke tests: PASS");
