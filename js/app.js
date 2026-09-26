import {SUBJECTS} from "../data/subjects.js";
import {renderHeader} from "./ui/header.js";
import {renderNav} from "./ui/navigation.js";
import {
  applyAccent,
  getTheme,
  toggleTheme
} from "./core/theme.js";
import {
  ensureChapterView,
  ensureSubjectView,
  escapeHtml,
  getChapterView,
  getSubjectView,
  isStructuredSubject,
  pickLang
} from "./core/subject-material-bridge.js";

const app=document.querySelector("#app");

function subjectCards(list=SUBJECTS){
  return list.map(subject=>`
    <article class="card subject-card interactive">
      <div>
        <div class="subject-icon" aria-hidden="true">${subject.emoji}</div>

        <h3>${subject.name}</h3>

        <p>${subject.description}</p>
      </div>

      <a
        class="card-link"
        href="#subject/${subject.id}"
      >
        Explore →
      </a>
    </article>
  `).join("");
}

function renderMaterialLanguageControl(){
  return `
    <div class="language-control" role="group" aria-label="Content language">
      <button class="btn interactive ${NBM_LANGUAGE.current==="en"?"btn-primary":""}" data-lang="en">English</button>
      <button class="btn interactive ${NBM_LANGUAGE.current==="hi"?"btn-primary":""}" data-lang="hi">हिन्दी</button>
      <button class="btn interactive ${NBM_LANGUAGE.current==="hinglish"?"btn-primary":""}" data-lang="hinglish">Hinglish</button>
    </div>
  `;
}

function materialText(value){
  if(!value) return "";
  if(typeof value==="string") return value;
  return value[NBM_LANGUAGE.current] || value.en || value.hi || value.hinglish || "";
}

function renderMaterialPreview(){
  const sst=NBM_MATERIAL?.sst;
  const sanskrit=NBM_MATERIAL?.sanskrit;
  if(!sst && !sanskrit) return;

  const chapters=(sst?.chapters||[]).slice(0,5);
  const sections=(sanskrit?.sections||[]);

  return `
    <section class="section material-section">
      <div class="section-heading">
        <div>
          <div class="eyebrow">Study Material</div>
          <h2>Class 10 Materials</h2>
        </div>
        ${renderMaterialLanguageControl()}
      </div>

      <div class="material-grid">
        ${chapters.map(ch=>`
          <article class="card material-content interactive">
            <div class="eyebrow">SST · ${ch.subject}</div>
            <h3>${materialText(ch.title)}</h3>
            ${(ch.topics||[]).map(t=>`
              <div class="material-topic">
                <strong>${materialText(t.title)}</strong>
                <p>${materialText(t.notes)}</p>
              </div>
            `).join("")}
          </article>
        `).join("")}

        ${sections.map(sec=>`
          <article class="card material-content interactive">
            <div class="eyebrow">Sanskrit</div>
            <h3>${materialText(sec.title)}</h3>
            <div class="material-topic-list">
              ${(sec.topics||[]).map(t=>`<span>${t}</span>`).join("")}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

window.addEventListener("nbm:language-change",()=>{
  route();
});

document.addEventListener("click",e=>{
  const button=e.target.closest("[data-lang]");
  if(button) NBM_LANGUAGE.set(button.dataset.lang);
});
function home(){
  renderNav("home");

  app.innerHTML=`
    <section class="hero home-hero">
      <div class="eyebrow">Welcome Back</div>
      <h1>Keep Learning<span class="hero-dot">.</span></h1>
      <p>Small steps today,<br>big results tomorrow.</p>
      <button class="btn btn-primary interactive hero-cta" data-action="subjects">
        Explore Subjects <span>→</span>
      </button>
    </section>

    <section class="card continue-card interactive home-progress-card">
      <div class="progress-row">
        <span>No chapter started yet</span>
        <strong>0%</strong>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="--progress:0%"></div>
      </div>
    </section>

    <section class="stat-grid home-stats">
      <article class="card stat-card interactive"><div class="stat-icon">▣</div><div class="stat-label">Chapters</div><div class="stat-value">0</div></article>
      <article class="card stat-card interactive"><div class="stat-icon">▦</div><div class="stat-label">Dates learned</div><div class="stat-value">0</div></article>
      <article class="card stat-card interactive"><div class="stat-icon">✓</div><div class="stat-label">Quiz accuracy</div><div class="stat-value">—</div></article>
      <article class="card stat-card interactive"><div class="stat-icon">♨</div><div class="stat-label">Revision streak</div><div class="stat-value">0</div></article>
    </section>

    <section class="section home-tools-section">
      <div class="section-heading">
        <div class="eyebrow">Quick Access</div>
        <a href="#subjects" class="see-all">See all →</a>
      </div>
      <div class="tools-grid">
        <a class="card subject-card interactive quick-card" href="#dates"><div><div class="subject-icon">◷</div><h3>History Dates</h3><p>Quickly revise important events and dates.</p></div><span class="card-link">Open →</span></a>
        <a class="card subject-card interactive quick-card" href="#quiz"><div><div class="subject-icon">✓</div><h3>Quiz</h3><p>Test your understanding with focused practice.</p></div><span class="card-link">Start →</span></a>
        <a class="card subject-card interactive quick-card" href="#revision"><div><div class="subject-icon">▣</div><h3>Revision</h3><p>Use flashcards for fast active recall.</p></div><span class="card-link">Revise →</span></a>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <div class="eyebrow">Subjects</div>
        <a href="#subjects" class="see-all">See all →</a>
      </div>
      <div class="subjects-grid">${subjectCards()}</div>
    </section>
      ${renderMaterialPreview()}
  `;
}
function dates(){
  renderNav("dates");

  app.innerHTML=`
    <section class="hero">
      <div class="eyebrow">History</div>
      <h1>Important Dates</h1>
      <p>
        Search, filter and revise historical events through a clean timeline.
      </p>
    </section>

    <div class="status-row" style="margin-bottom:18px">
      <button class="status-pill active interactive">All Chapters</button>
      <button class="status-pill interactive">Important</button>
      <button class="status-pill interactive">Revision</button>
    </div>

    <section class="empty-state">
      <h2>Timeline ready</h2>
      <p class="muted" style="margin-top:8px">
        Verified History dates will be added during the material phase.
      </p>
    </section>
  `;
}

function quiz(){
  renderNav("quiz");

  app.innerHTML=`
    <section class="hero">
      <div class="eyebrow">Practice</div>
      <h1>Quiz</h1>
      <p>Choose how you want to test yourself.</p>
    </section>

    <div class="grid">

      <article class="card subject-card interactive">
        <div>
          <div class="subject-icon">⚡</div>
          <h3>Quick Quiz</h3>
          <p>Short mixed practice for fast revision.</p>
        </div>
        <button class="btn btn-primary interactive">Start Quiz →</button>
      </article>

      <article class="card subject-card interactive">
        <div>
          <div class="subject-icon">▣</div>
          <h3>Chapter Quiz</h3>
          <p>Focused practice from one chapter.</p>
        </div>
        <button class="btn btn-primary interactive">Choose Chapter →</button>
      </article>

    </div>
  `;
}

function revision(){
  renderNav("revision");

  app.innerHTML=`
    <section class="hero">
      <div class="eyebrow">Active Recall</div>
      <h1>Revision</h1>
      <p>Flashcards designed for quick, tactile revision.</p>
    </section>

    <section class="flashcard">
      <div class="flashcard-inner card">
        <div>
          <div class="eyebrow">Flashcards</div>
          <h2 style="margin-top:8px">
            Your revision deck will appear here.
          </h2>
          <p class="muted" style="margin-top:8px">
            Tap to flip • Mark for revision • Move forward
          </p>
        </div>
      </div>
    </section>
  `;
}

function progress(){
  renderNav("progress");

  app.innerHTML=`
    <section class="hero">
      <div class="eyebrow">Your Progress</div>
      <h1>Keep moving.</h1>
      <p>A simple view of what you have learned and what needs revision.</p>
    </section>

    <div class="grid stat-grid">

      <article class="card stat-card interactive">
        <div class="stat-label">Overall progress</div>
        <div class="stat-value">0%</div>
        <div class="progress-track">
          <div class="progress-fill" style="--progress:0%"></div>
        </div>
      </article>

      <article class="card stat-card interactive">
        <div class="stat-label">Quiz accuracy</div>
        <div class="stat-value">—</div>
      </article>

      <article class="card stat-card interactive">
        <div class="stat-label">Dates revised</div>
        <div class="stat-value">0</div>
      </article>

    </div>

    <section class="section">
      <div class="card">
        <div class="eyebrow">Study Activity</div>
        <h2 style="margin-top:5px">No activity yet</h2>
        <p class="muted" style="margin-top:7px">
          Your study timeline will appear here as you learn.
        </p>
      </div>
    </section>
  `;
}

function subjects(){
  renderNav("home");

  app.innerHTML=`
    <section class="hero">
      <div class="eyebrow">Subjects</div>
      <h1>Choose a subject.</h1>
      <p>
        Every subject will have its own independently maintained content system.
      </p>
    </section>

    <section class="grid subjects-grid">
      ${subjectCards()}
    </section>
  `;
}

function materialKeyForSubject(id){
  const aliases={
    sst:"sst",
    socialscience:"sst",
    "social-science":"sst",
    science:"science",
    maths:"maths",
    mathematics:"maths",
    english:"english",
    hindi:"hindi",
    sanskrit:"sanskrit"
  };
  return aliases[String(id||"").toLowerCase()] || String(id||"").toLowerCase();
}

/* ------------------------------------------------------------
   Structured subject material
   Reads the already-existing subject data modules through
   js/core/subject-material-bridge.js. The legacy
   window.NBM_MATERIAL path is left untouched.
------------------------------------------------------------- */

function bridgeText(value){
  return pickLang(value,NBM_LANGUAGE.current);
}

function structuredSubjectLabel(id){
  return SUBJECTS.find(item=>item.id===id)?.name||id||"Subject";
}

/* Repaint the current route once its data module has loaded, so a
   static-first render cannot leave a half-loaded page behind. */
function reloadStructuredRoute(id,chapterId){
  const task=chapterId
    ? ensureChapterView(id,chapterId)
    : ensureSubjectView(id);

  task.then(view=>{
    if(view&&stillOnRoute(id,chapterId)) route();
  });
}

function stillOnRoute(id,chapterId){
  const parts=location.hash.replace(/^#/,"").split("/");

  if(parts[0]!=="subject") return false;
  if(String(parts[1]||"").toLowerCase()!==String(id||"").toLowerCase()) return false;

  return (parts[2]||"")===(chapterId||"");
}

function structuredChapterCard(view,chapter){
  const topics=(chapter.topics||[]).map(topic=>`
    <div class="material-topic">
      <strong>${escapeHtml(bridgeText(topic.title))}</strong>
      ${topic.note?`<p>${escapeHtml(bridgeText(topic.note))}</p>`:""}
    </div>
  `).join("");

  const unit=chapter.unitName
    ?`<p class="muted">${escapeHtml(bridgeText(chapter.unitName))}${
        chapter.unitMarks?` · ${chapter.unitMarks} marks`:""
      }</p>`
    :"";

  return `
    <article class="card material-content interactive">
      <div class="eyebrow">
        ${escapeHtml(bridgeText(view.name))}${chapter.number?` · ${String(chapter.number).padStart(2,"0")}`:""}
      </div>

      <h3>${escapeHtml(bridgeText(chapter.title))}</h3>

      ${topics}
      ${unit}

      ${chapter.hasContent
        ?`<a class="card-link" href="#subject/${encodeURIComponent(view.subjectId)}/${encodeURIComponent(chapter.id)}">Open chapter →</a>`
        :""}
    </article>
  `;
}

function renderStructuredSubject(view){
  return `
    <section class="section material-section">
      <div class="section-heading">
        <div>
          <div class="eyebrow">Study Material</div>
          <h2>${escapeHtml(bridgeText(view.name))}</h2>
        </div>

        ${renderMaterialLanguageControl()}
      </div>

      <div class="material-grid">
        ${view.chapters.map(chapter=>structuredChapterCard(view,chapter)).join("")}
      </div>
    </section>
  `;
}

function renderSubjectMaterial(id){
  const structured=getSubjectView(id);

  if(structured) return renderStructuredSubject(structured);

  /* A known structured subject that is not in memory yet: keep the
     legacy material visible and repaint once the module has loaded. */
  if(isStructuredSubject(id)) reloadStructuredRoute(id);

  const key=materialKeyForSubject(id);
  const data=NBM_MATERIAL?.[key];

  if(!data){
    return `
      <section class="empty-state">
        <h2>Material coming soon</h2>
        <p class="muted" style="margin-top:8px">
          Verified study material for this subject is being prepared.
        </p>
      </section>
    `;
  }

  const groups=[
    ...(data.chapters||[]),
    ...(data.history||[]),
    ...(data.geography||[]),
    ...(data.civics||[]),
    ...(data.economics||[]),
    ...(data.sections||[])
  ];

  return `
    <section class="section material-section">
      <div class="section-heading">
        <div>
          <div class="eyebrow">Study Material</div>
          <h2>${materialText(data.meta?.name||"Study Material")}</h2>
        </div>
        ${renderMaterialLanguageControl()}
      </div>

      <div class="material-grid">
        ${groups.map((group,index)=>`
          <article class="card material-content interactive">
            <div class="eyebrow">
              ${data.meta?.short||data.meta?.name||"Material"} · ${String(index+1).padStart(2,"0")}
            </div>

            <h3>${materialText(group.title)}</h3>

            ${(group.topics||[]).map((topic,topicIndex)=>{
              const title=typeof topic==="string"
                ? topic
                : materialText(topic.title||topic.name||"Topic");

              const notes=typeof topic==="string"
                ? topic
                : materialText(topic.notes||topic.description||"");

              return `
                <div class="material-topic">
                  <strong>${title}</strong>
                  ${notes?`<p>${notes}</p>`:""}
                </div>
              `;
            }).join("")}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function subject(id){
  renderNav("home");

  const item=SUBJECTS.find(x=>x.id===id);

  app.innerHTML=`
    <section class="hero">
      <div class="eyebrow">${item?.name||"Subject"}</div>

      <h1>${item?.name||"Subject"}</h1>

      <p>
        Chapter-wise notes, concepts and revision material.
      </p>
    </section>

    ${renderSubjectMaterial(id)}
  `;
}

/* ------------------------------------------------------------
   Chapter detail view  (#subject/<subject-id>/<chapter-id>)
------------------------------------------------------------- */

function chapterSectionCard(section){
  const label=escapeHtml(section.label);

  if(section.kind==="text"){
    return `
      <article class="card material-content interactive">
        <div class="eyebrow">${label}</div>
        <p>${escapeHtml(section.text)}</p>
      </article>
    `;
  }

  if(section.kind==="chips"){
    return `
      <article class="card material-content interactive">
        <div class="eyebrow">${label}</div>
        <div class="material-topic-list">
          ${section.items.map(item=>`<span>${escapeHtml(item)}</span>`).join("")}
        </div>
      </article>
    `;
  }

  if(section.kind==="counts"){
    return `
      <article class="card material-content interactive">
        <div class="eyebrow">${label}</div>
        <div class="material-topic-list">
          ${section.rows.map(row=>`<span>${escapeHtml(row.title)} · ${row.value}</span>`).join("")}
        </div>
      </article>
    `;
  }

  if(section.kind==="list"){
    return `
      <article class="card material-content interactive">
        <div class="eyebrow">${label}</div>
        ${section.items.map(item=>`
          <div class="material-topic"><p>${escapeHtml(item)}</p></div>
        `).join("")}
      </article>
    `;
  }

  return `
    <article class="card material-content interactive">
      <div class="eyebrow">${label}</div>
      ${(section.rows||[]).map(row=>`
        <div class="material-topic">
          ${row.title?`<strong>${escapeHtml(row.title)}</strong>`:""}
          ${row.body?`<p>${escapeHtml(row.body)}</p>`:""}
        </div>
      `).join("")}
    </article>
  `;
}

function chapterMetaLine(view){
  const parts=[];

  if(view.unitName) parts.push(escapeHtml(bridgeText(view.unitName)));
  if(view.unitMarks) parts.push(`${view.unitMarks} marks`);
  if(view.totalQuestions) parts.push(`${view.totalQuestions} questions`);
  if(view.board) parts.push(escapeHtml(view.board));
  if(view.session) parts.push(escapeHtml(view.session));

  return parts.join(" · ");
}

function chapterHero(id,view){
  return `
    <section class="hero">
      <div class="eyebrow">
        ${escapeHtml(bridgeText(view.subjectName))}${view.number?` · Chapter ${String(view.number).padStart(2,"0")}`:""}
      </div>

      <h1>${escapeHtml(bridgeText(view.title))}</h1>

      <p>${chapterMetaLine(view)}</p>

      <a class="card-link" href="#subject/${encodeURIComponent(id)}">
        ← All ${escapeHtml(bridgeText(view.subjectName))} chapters
      </a>
    </section>
  `;
}

function chapterMarkup(id,view){
  return `
    ${chapterHero(id,view)}

    <section class="section material-section">
      <div class="section-heading">
        <div>
          <div class="eyebrow">Study Material</div>
          <h2>${escapeHtml(bridgeText(view.subjectName))}</h2>
        </div>

        ${renderMaterialLanguageControl()}
      </div>

      <div class="material-grid">
        ${view.sections.length
          ?view.sections.map(section=>chapterSectionCard(section)).join("")
          :`<article class="card material-content interactive">
              <div class="eyebrow">Chapter</div>
              <p class="muted">Chapter notes are being prepared.</p>
            </article>`}
      </div>
    </section>
  `;
}

function chapterPlaceholder(id,title,message){
  return `
    <section class="hero">
      <div class="eyebrow">${escapeHtml(structuredSubjectLabel(id))}</div>
      <h1>${escapeHtml(structuredSubjectLabel(id))}</h1>
      <p>Chapter-wise notes, concepts and revision material.</p>
    </section>

    <section class="empty-state">
      <h2>${escapeHtml(title)}</h2>
      <p class="muted" style="margin-top:8px">${escapeHtml(message)}</p>
      <a class="card-link" href="#subject/${encodeURIComponent(id)}">
        ← Back to ${escapeHtml(structuredSubjectLabel(id))}
      </a>
    </section>
  `;
}

function subjectChapter(id,chapterId){
  renderNav("home");

  const cached=getChapterView(id,chapterId);

  if(cached&&cached.hasContent){
    app.innerHTML=chapterMarkup(id,cached);
    return;
  }

  /* Metadata known but the chapter package still to be fetched: paint
     the summary first, then repaint once ensureChapterView resolves. */
  app.innerHTML=cached
    ?chapterMarkup(id,cached)
    :chapterPlaceholder(
      id,
      "Opening chapter",
      "Loading the study material for this chapter."
    );

  ensureChapterView(id,chapterId).then(view=>{
    if(!stillOnRoute(id,chapterId)) return;

    app.innerHTML=view
      ?chapterMarkup(id,view)
      :chapterPlaceholder(
        id,
        "Chapter not found",
        "This chapter is not part of the published syllabus data."
      );
  });
}

function route(){
  const path=location.hash.replace(/^#/,"")||"home";

  if(path==="home")return home();
  if(path==="dates")return dates();
  if(path==="quiz")return quiz();
  if(path==="revision")return revision();
  if(path==="progress")return progress();
  if(path==="subjects")return subjects();

  if(path.startsWith("subject/")){
    const parts=path.split("/");

    if(parts[2]) return subjectChapter(parts[1],parts[2]);

    return subject(parts[1]);
  }

  home();
}

/* ------------------------------------------------------------
   Interaction handling
------------------------------------------------------------ */

document.addEventListener("click",event=>{

  const target=event.target.closest(
    "button,a,.interactive"
  );

  if(target){
    target.classList.add("is-pressed");

    window.setTimeout(()=>{
      target.classList.remove("is-pressed");
    },1000);
  }

  const action=event.target.closest("[data-action]")?.dataset.action;
  const nav=event.target.closest("[data-nav]")?.dataset.nav;

  if(action==="theme"){
    toggleTheme();
    renderHeader();
    return;
  }

  if(action==="home"){
    location.hash="home";
    return;
  }

  if(action==="subjects"){
    location.hash="subjects";
    return;
  }

  if(nav){
    location.hash=nav;
  }
});

applyAccent();

document.documentElement.classList.toggle(
  "light",
  getTheme()==="light"
);

renderHeader();
route();

window.addEventListener("hashchange",route);






