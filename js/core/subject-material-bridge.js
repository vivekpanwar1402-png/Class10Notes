/*
 * CLASS10NOTES — SUBJECT MATERIAL BRIDGE
 * ---------------------------------------------------------------
 * Additive, read-only bridge between the structured subject data
 * modules that already exist in this repository and the existing
 * frontend material renderer in js/app.js.
 *
 *   data/science/index.js      -> subject "science"
 *   data/mathematics/index.js  -> subject "mathematics" (alias "maths")
 *   data/hindi/index.json      -> subject "hindi"
 *
 * Design rules
 *  - Never mutates source data; every input is read-only.
 *  - Never throws. A failed load leaves the legacy
 *    window.NBM_MATERIAL path (SST / Sanskrit / English, and the
 *    existing Science / Maths / Hindi summaries) fully working.
 *  - Never hands raw data objects to the DOM: callers receive flat
 *    display-ready view models built from strings and arrays of
 *    strings, and js/app.js escapes them before writing HTML.
 *  - Subject ids, chapter ids and manifest ids are used exactly as
 *    published by the data modules. Nothing is renamed or invented.
 *  - No translations are generated. Text is only surfaced in a
 *    language slot when that language already exists in the source
 *    data; otherwise pickLang() falls back to a language that does.
 */

const SUBJECT_ALIASES = {
  science: "science",
  mathematics: "mathematics",
  maths: "mathematics",
  math: "mathematics",
  hindi: "hindi"
};

const SOURCES = {
  science: {
    kind: "module",
    modulePath: "../../data/science/index.js"
  },
  mathematics: {
    kind: "module",
    modulePath: "../../data/mathematics/index.js"
  },
  hindi: {
    kind: "json",
    indexPath: "../../data/hindi/index.json",
    chapterPath: "../../data/hindi/{id}.json"
  }
};

const bundles = new Map();

/* Resolve any accepted subject id to a structured source key. */
export function structuredSubjectKey(subjectId){
  const raw=String(subjectId==null?"":subjectId).trim().toLowerCase();
  return SUBJECT_ALIASES[raw] || null;
}

export function isStructuredSubject(subjectId){
  return Boolean(structuredSubjectKey(subjectId));
}

export function listStructuredSubjectIds(){
  return Object.keys(SOURCES);
}

/* Chapter ids: "chapter-01", "math-01", "sci-01" -> "chapter-01".
   Anything else (for example "hindi-kshitij-01") is returned as is. */
export function normalizeChapterId(raw){
  const value=String(raw==null?"":raw).trim().toLowerCase();
  if(!value) return "";

  const match=value.match(/^(?:chapter|math|maths|sci|science)[-_ ]?(\d{1,3})$/);
  if(match) return "chapter-"+match[1].padStart(2,"0");

  return value;
}

function bundleSlot(key){
  if(!bundles.has(key)){
    bundles.set(key,{status:"idle",data:null,promise:null});
  }
  return bundles.get(key);
}

/* Synchronous accessor: returns the loaded index bundle or null. */
export function getStructuredSubject(subjectId){
  const key=structuredSubjectKey(subjectId);
  if(!key) return null;

  const slot=bundleSlot(key);
  return slot.status==="ready" ? slot.data : null;
}

/* Asynchronous accessor. Resolves to the index bundle or null. */
export function ensureStructuredSubject(subjectId){
  const key=structuredSubjectKey(subjectId);
  if(!key) return Promise.resolve(null);

  const slot=bundleSlot(key);
  if(slot.status==="ready") return Promise.resolve(slot.data);
  if(slot.status==="loading") return slot.promise;
  if(slot.status==="failed") return Promise.resolve(null);

  slot.status="loading";

  slot.promise=loadBundle(key)
    .then(data=>{
      slot.data=data||null;
      slot.status=slot.data?"ready":"failed";
      return slot.data;
    })
    .catch(()=>{
      slot.data=null;
      slot.status="failed";
      return null;
    });

  return slot.promise;
}

/* ----------------------------------------------------------------
   LOADING
---------------------------------------------------------------- */

function loadBundle(key){
  const source=SOURCES[key];
  if(!source) return Promise.resolve(null);

  return source.kind==="module"
    ? loadModuleBundle(key,source)
    : loadJsonBundle(key,source);
}

/* JSON modules: native import attributes first (Node 22+/modern
   browsers), plain fetch as the fallback for older runtimes. */
async function importJson(specifier){
  try{
    const module=await import(specifier,{with:{type:"json"}});
    return module.default===undefined?module:module.default;
  }catch(error){
    if(typeof fetch!=="function") throw error;

    const url=new URL(specifier,import.meta.url);
    const response=await fetch(url);

    if(!response.ok){
      throw new Error("Unable to load "+String(url)+" ("+response.status+")");
    }

    return response.json();
  }
}

async function loadModuleBundle(key,source){
  const module=await import(source.modulePath);
  const root=module.default||module;

  const manifest=
    root.manifest ||
    module.SCIENCE_MANIFEST ||
    module.MATHEMATICS_MANIFEST ||
    null;

  const chapters=root.chapters||module.chapters||[];
  const syllabusChapters=root.syllabusChapters||manifest?.chapters||[];
  const deletedChapters=root.deletedChapters||manifest?.deletedChapters||[];

  return indexBundle({
    subjectId:key,
    sourceKind:"module",
    manifest,
    chapters,
    syllabusChapters,
    deletedChapters
  });
}

async function loadJsonBundle(key,source){
  const index=await importJson(source.indexPath);
  const list=Array.isArray(index?.chapters)?index.chapters:[];

  /* Only language text that already exists is mapped in; no English
     or Hinglish value is invented for these chapter names. */
  const syllabus=list.map(item=>({
    id:String(item.id||""),
    chapterId:String(item.id||""),
    number:Number(item.number)||null,
    title:item.title?{hi:String(item.title)}:{},
    book:item.book||null,
    type:item.type||null
  }));

  const manifest={
    subjectId:key,
    subjectName:index?.subject||"Hindi",
    board:index?.board||null,
    classLevel:index?.class||null,
    session:index?.session||null,
    chapterCount:index?.chapterCount||syllabus.length,
    chapters:syllabus
  };

  return indexBundle({
    subjectId:key,
    sourceKind:"json",
    manifest,
    chapters:[],
    syllabusChapters:syllabus,
    deletedChapters:[]
  });
}

function chapterIdOf(entry){
  if(!entry) return "";

  if(entry.chapterId) return String(entry.chapterId);
  if(entry.id) return String(entry.id);

  const number=Number(entry.number);

  return Number.isFinite(number)&&number>0
    ? "chapter-"+String(number).padStart(2,"0")
    : "";
}

function indexBundle(options){
  const units=new Map();
  for(const unit of options.manifest?.units||[]){
    if(unit&&unit.id) units.set(String(unit.id),unit);
  }

  const syllabus=[];
  const seen=new Set();

  for(const entry of options.syllabusChapters||[]){
    const id=chapterIdOf(entry);
    if(!id||seen.has(id)) continue;

    seen.add(id);
    syllabus.push(entry);
  }

  const content=new Map();
  for(const chapter of options.chapters||[]){
    if(!chapter) continue;

    const id=chapterIdOf(chapter);
    if(id) content.set(id,chapter);
  }

  return {
    subjectId:options.subjectId,
    sourceKind:options.sourceKind,
    manifest:options.manifest||null,
    units,
    syllabus,
    deleted:options.deletedChapters||[],
    content,
    pending:new Map()
  };
}

/* ----------------------------------------------------------------
   TEXT HELPERS (language order matches js/app.js materialText())
---------------------------------------------------------------- */

export function pickLang(value,lang){
  if(value==null) return "";
  if(typeof value==="string") return value;
  if(typeof value==="number") return String(value);

  for(const key of [lang,"en","hi","hinglish"]){
    const candidate=value[key];
    if(typeof candidate==="string"&&candidate.trim()) return candidate;
  }

  for(const key of Object.keys(value)){
    const candidate=value[key];
    if(typeof candidate==="string"&&candidate.trim()) return candidate;
  }

  return "";
}

export function escapeHtml(value){
  return String(value==null?"":value)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#39;");
}

/* ----------------------------------------------------------------
   CHAPTER LOOKUP
---------------------------------------------------------------- */

function findMeta(bundleData,rawId){
  const canonical=normalizeChapterId(rawId);
  if(!canonical) return null;

  const lower=String(rawId).trim().toLowerCase();

  return bundleData.syllabus.find(entry=>{
    const id=chapterIdOf(entry);

    return id===canonical ||
      id.toLowerCase()===lower ||
      String(entry.id||"").toLowerCase()===lower;
  })||null;
}

/* Chapter ids arrive from the URL, so only ids that map to a real
   data file name are ever turned into a fetch path. */
function isSafeChapterFileId(id){
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(String(id||""));
}

async function loadJsonChapter(bundleData,id){
  if(bundleData.content.has(id)) return bundleData.content.get(id);
  if(bundleData.pending.has(id)) return bundleData.pending.get(id);
  if(!isSafeChapterFileId(id)) return null;

  const source=SOURCES[bundleData.subjectId];
  if(!source||source.kind!=="json") return null;

  const task=importJson(source.chapterPath.replace("{id}",id))
    .then(payload=>{
      const node=payload?.chapter||payload||null;
      if(node) bundleData.content.set(id,node);
      return node;
    })
    .catch(()=>null);

  bundleData.pending.set(id,task);

  return task;
}

/* ----------------------------------------------------------------
   VIEW MODELS — display-ready, flat, no raw source objects
---------------------------------------------------------------- */

function unitView(unit){
  if(!unit) return null;

  const view={};
  if(typeof unit.name==="string"&&unit.name.trim()) view.en=unit.name;
  if(typeof unit.nameHi==="string"&&unit.nameHi.trim()) view.hi=unit.nameHi;

  return Object.keys(view).length?view:null;
}

function bookView(book){
  return typeof book==="string"&&book.trim()?{hi:book}:null;
}

function titleView(entry,content){
  const view={};
  const source=entry?.title;

  if(source&&typeof source==="object"){
    for(const key of ["en","hi","hinglish"]){
      const value=source[key];
      if(typeof value==="string"&&value.trim()) view[key]=value;
    }
  }else if(typeof source==="string"&&source.trim()){
    view.hi=source;
  }

  if(!Object.keys(view).length&&content){
    if(typeof content.chapterNameEn==="string"&&content.chapterNameEn.trim()){
      view.en=content.chapterNameEn;
    }
    if(typeof content.chapterName==="string"&&content.chapterName.trim()){
      view.hi=content.chapterName;
    }
    if(typeof content.title==="string"&&content.title.trim()){
      view.hi=content.title;
    }
  }

  return view;
}

function topicsOf(bundleData,content){
  if(!content) return [];

  if(bundleData.sourceKind==="json"){
    const concepts=Array.isArray(content.importantConcepts)?content.importantConcepts:[];

    return concepts
      .map(item=>({
        title:item?.concept||item?.title||"",
        note:item?.explanation||item?.note||""
      }))
      .filter(topic=>topic.title||topic.note)
      .slice(0,8);
  }

  const topics=Array.isArray(content.topics)?content.topics:[];

  return topics
    .map(topic=>({
      title:topic?.name||topic?.title||"",
      note:topic?.note||topic?.description||""
    }))
    .filter(topic=>topic.title||topic.note)
    .slice(0,8);
}

function buildChapterSummary(bundleData,entry){
  const id=chapterIdOf(entry);
  if(!id) return null;

  const content=bundleData.content.get(id)||null;
  const unit=entry.unit?bundleData.units.get(String(entry.unit))||null:null;

  /* Sources that keep every chapter package in its own file declare
     the authored chapters inside their index, so an index entry is
     the resolvable signal there. Module sources resolve straight
     from the content that is already in memory. */
  const resolvable=Boolean(content)||
    (bundleData.sourceKind==="json"&&isSafeChapterFileId(id));

  return {
    id,
    number:Number(entry.number)||null,
    title:titleView(entry,content),
    unitName:unitView(unit)||bookView(entry.book),
    unitMarks:unit&&Number.isFinite(Number(unit.marks))?Number(unit.marks):null,
    stream:entry.stream||null,
    included:entry.syllabus?.included!==false,
    hasContent:resolvable,
    topics:topicsOf(bundleData,content)
  };
}

function buildSubjectView(bundleData){
  const manifest=bundleData.manifest||{};

  const chapters=bundleData.syllabus
    .map(entry=>buildChapterSummary(bundleData,entry))
    .filter(Boolean);

  const name=manifest.subjectName||manifest.subjectId||bundleData.subjectId;

  return {
    subjectId:bundleData.subjectId,
    name:typeof name==="string"?{en:name}:name,
    board:manifest.board||null,
    session:manifest.session||null,
    deletedCount:(bundleData.deleted||[]).length,
    total:chapters.length,
    ready:chapters.filter(chapter=>chapter.hasContent).length,
    chapters
  };
}

export function getSubjectView(subjectId){
  const bundleData=getStructuredSubject(subjectId);

  return bundleData?buildSubjectView(bundleData):null;
}

export async function ensureSubjectView(subjectId){
  const bundleData=await ensureStructuredSubject(subjectId);

  return bundleData?buildSubjectView(bundleData):null;
}

/* ----------------------------------------------------------------
   CHAPTER VIEW MODEL
---------------------------------------------------------------- */

const QUESTION_LABELS={
  mcq:"MCQ",
  veryShort:"Very Short Answer",
  short:"Short Answer",
  long:"Long Answer",
  assertionReason:"Assertion – Reason",
  caseBased:"Case Based",
  application:"Application Based",
  numerical:"Numerical",
  diagramBased:"Diagram Based",
  pyq:"Previous Year Questions"
};

export function questionTypeLabel(key){
  if(QUESTION_LABELS[key]) return QUESTION_LABELS[key];

  return String(key==null?"":key)
    .replace(/([a-z0-9])([A-Z])/g,"$1 $2")
    .replace(/^./,first=>first.toUpperCase());
}

function pushText(sections,label,text){
  if(typeof text!=="string"||!text.trim()) return;

  sections.push({kind:"text",label,text:text.trim()});
}

function pushChips(sections,label,items){
  const list=(items||[])
    .map(item=>String(item==null?"":item).trim())
    .filter(Boolean);

  if(!list.length) return;

  sections.push({kind:"chips",label,items:list});
}

function pushList(sections,label,items){
  const list=(items||[])
    .map(item=>{
      if(typeof item==="string") return item.trim();
      if(item&&typeof item.text==="string") return item.text.trim();
      return "";
    })
    .filter(Boolean);

  if(!list.length) return;

  sections.push({kind:"list",label,items:list});
}

function pushRows(sections,label,rows){
  const list=(rows||[])
    .map(row=>({
      title:typeof row?.title==="string"?row.title.trim():"",
      body:typeof row?.body==="string"?row.body.trim():""
    }))
    .filter(row=>row.title||row.body);

  if(!list.length) return;

  sections.push({kind:"rows",label,rows:list});
}

function pushCounts(sections,label,entries){
  const rows=[];

  for(const [key,value] of entries){
    const count=Array.isArray(value)?value.length:Number(value)||0;
    if(count>0) rows.push({title:questionTypeLabel(key),value:count});
  }

  if(!rows.length) return;

  sections.push({kind:"counts",label,rows});
}

function moduleSections(content){
  const sections=[];
  const notes=content.notes||{};
  const revision=content.revision||{};

  pushChips(sections,"Syllabus Topics",
    topicsOf({sourceKind:"module"},content).map(topic=>topic.title));

  pushText(sections,"Overview",notes.overview);

  pushRows(sections,"Concepts",(Array.isArray(notes.concepts)?notes.concepts:[]).map(item=>({
    title:item?.title||item?.name,
    body:item?.body||item?.text
  })));

  pushRows(sections,"Definitions",(Array.isArray(notes.definitions)?notes.definitions:[]).map(item=>({
    title:item?.term||item?.title,
    body:item?.meaning||item?.body
  })));

  pushList(sections,"Key Facts",notes.keyFacts);
  pushList(sections,"Important Points",notes.importantPoints);
  pushList(sections,"Examples",notes.examples);

  pushRows(sections,"Flashcards",(Array.isArray(revision.flashcards)?revision.flashcards:[]).map(card=>({
    title:card?.front,
    body:card?.back
  })));

  pushList(sections,"Quick Revision",revision.quickRevision);
  pushList(sections,"Common Mistakes",revision.mistakes);

  const questions=content.questions||{};
  pushCounts(sections,"Question Bank",
    Object.keys(questions).map(key=>[key,questions[key]]));

  return sections;
}

function jsonSections(content){
  const sections=[];

  pushChips(sections,"Important Concepts",
    (Array.isArray(content.importantConcepts)?content.importantConcepts:[])
      .map(item=>item?.concept||item?.title));

  pushText(sections,"Overview",content.overview);
  pushText(sections,"Simple Explanation",content.easyExplanation);

  pushRows(sections,"Detailed Explanation",
    (Array.isArray(content.detailedExplanation)?content.detailedExplanation:[])
      .map(item=>({title:item?.section||item?.heading,body:item?.content||item?.text})));

  pushRows(sections,"Difficult Words",
    (Array.isArray(content.difficultWords)?content.difficultWords:[])
      .map(item=>({title:item?.word,body:item?.meaning})));

  pushList(sections,"Important Points",content.importantPoints);

  pushRows(sections,"Common Mistakes",
    (Array.isArray(content.commonMistakes)?content.commonMistakes:[])
      .map(item=>({title:item?.mistake,body:item?.correction})));

  pushList(sections,"Revision Notes",content.revisionNotes);
  pushList(sections,"Exam Tips",content.examTips);

  pushRows(sections,"Flashcards",
    (Array.isArray(content.flashcards)?content.flashcards:[])
      .map(card=>({title:card?.front,body:card?.back})));

  const questions=content.questions||{};
  const counts=Object.keys(questions).map(key=>[key,questions[key]]);
  if(Array.isArray(content.chapterQuiz)&&content.chapterQuiz.length){
    counts.push(["mcq",content.chapterQuiz]);
  }
  pushCounts(sections,"Question Bank",counts);

  return sections;
}

function countQuestions(content){
  if(!content) return 0;

  const questions=content.questions||{};

  return Object.keys(questions).reduce((total,key)=>{
    const value=questions[key];
    return total+(Array.isArray(value)?value.length:0);
  },0);
}

function buildChapterView(bundleData,entry,id,content){
  const manifest=bundleData.manifest||{};
  const unit=entry?.unit?bundleData.units.get(String(entry.unit))||null:null;
  const name=manifest.subjectName||manifest.subjectId||bundleData.subjectId;

  return {
    subjectId:bundleData.subjectId,
    subjectName:typeof name==="string"?{en:name}:name,
    chapterId:id,
    number:Number(entry?.number)||null,
    title:titleView(entry,content),
    unitName:unitView(unit)||bookView(entry?.book),
    unitMarks:unit&&Number.isFinite(Number(unit.marks))?Number(unit.marks):null,
    stream:entry?.stream||null,
    board:manifest.board||null,
    session:manifest.session||null,
    included:entry?.syllabus?.included!==false,
    hasContent:Boolean(content),
    verified:Boolean(content?.metadata?.verified),
    topics:topicsOf(bundleData,content),
    totalQuestions:countQuestions(content),
    sections:content
      ?(bundleData.sourceKind==="json"?jsonSections(content):moduleSections(content))
      :[]
  };
}

function resolveChapterView(bundleData,chapterId){
  const entry=findMeta(bundleData,chapterId);
  const id=entry?chapterIdOf(entry):normalizeChapterId(chapterId);

  if(!id) return null;

  const content=bundleData.content.get(id)||null;
  if(!entry&&!content) return null;

  return buildChapterView(bundleData,entry,id,content);
}

/* Synchronous accessor: only resolves chapters already in memory. */
export function getChapterView(subjectId,chapterId){
  const bundleData=getStructuredSubject(subjectId);
  if(!bundleData) return null;

  return resolveChapterView(bundleData,chapterId);
}

/* Loads the subject index, then the chapter payload when the source
   keeps chapter content in separate files (data/hindi). */
export async function ensureChapterView(subjectId,chapterId){
  const bundleData=await ensureStructuredSubject(subjectId);
  if(!bundleData) return null;

  const entry=findMeta(bundleData,chapterId);
  const id=entry?chapterIdOf(entry):normalizeChapterId(chapterId);

  if(id&&!bundleData.content.has(id)&&bundleData.sourceKind==="json"){
    await loadJsonChapter(bundleData,id);
  }

  return resolveChapterView(bundleData,chapterId);
}

export default {
  structuredSubjectKey,
  isStructuredSubject,
  listStructuredSubjectIds,
  normalizeChapterId,
  getStructuredSubject,
  ensureStructuredSubject,
  getSubjectView,
  ensureSubjectView,
  getChapterView,
  ensureChapterView,
  pickLang,
  escapeHtml,
  questionTypeLabel
};
