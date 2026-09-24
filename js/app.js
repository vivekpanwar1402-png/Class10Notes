import {APP_CONFIG} from "./core/config.js";
import {state} from "./core/state.js";
import {setTheme,toggleTheme} from "./core/theme.js";
import {SUBJECTS} from "../data/subjects.js";
import {escapeHtml} from "./core/dom.js";
import {renderHeader} from "./ui/header.js";
import {renderNav} from "./ui/navigation.js";

const app=document.querySelector("#app");

function subjectCards(list=SUBJECTS){
  return list.map(s=>`
    <article class="card subject-card">
      <div>
        <div class="subject-icon" aria-hidden="true">${s.emoji}</div>
        <h3>${escapeHtml(s.name)}</h3>
        <p>${escapeHtml(s.description)}</p>
      </div>
      <a href="#subject/${s.id}" class="card-link">Explore →</a>
    </article>`).join("");
}

function home(){
  app.innerHTML=`
    <section class="hero">
      <div class="eyebrow">Uttarakhand Board • Class 10</div>
      <h1>Study smarter.<br>Revise faster.</h1>
      <p>A clean, student-first study companion for Class 10. Notes and verified learning material will be added after the structure and experience are finalised.</p>
      <label class="search-box">
        <span aria-hidden="true">⌕</span>
        <input id="global-search" type="search" placeholder="Search subjects, chapters or topics..." aria-label="Search subjects, chapters or topics">
      </label>
    </section>

    <section class="section">
      <div class="section-heading">
        <div>
          <div class="eyebrow">Start here</div>
          <h2>Choose a subject</h2>
        </div>
        <span class="status-pill">Patch ${APP_CONFIG.version}</span>
      </div>
      <div class="grid">${subjectCards()}</div>
    </section>

    <section class="section">
      <div class="card">
        <div class="section-heading">
          <div>
            <div class="eyebrow">Coming next</div>
            <h2>Study system</h2>
          </div>
        </div>
        <div class="status-row">
          <span class="status-pill">Notes</span>
          <span class="status-pill">Questions</span>
          <span class="status-pill">MCQs</span>
          <span class="status-pill">Revision</span>
          <span class="status-pill">Tests</span>
          <span class="status-pill">Progress</span>
        </div>
      </div>
    </section>`;
}

function subjects(){
  app.innerHTML=`
    <section class="hero">
      <div class="eyebrow">Subjects</div>
      <h1>Pick a subject.</h1>
      <p>Each subject will have its own independent content modules.</p>
    </section>
    <section class="grid">${subjectCards()}</section>`;
}

function placeholder(title,text){
  app.innerHTML=`
    <section class="hero">
      <div class="eyebrow">Class10Notes</div>
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(text)}</p>
    </section>
    <section class="empty-state">
      <h2>Content phase starts after Patch 2.0</h2>
      <p class="muted" style="margin-top:8px">The UI and UX foundation is ready for verified UBSE study material.</p>
    </section>`;
}

function route(){
  const path=location.hash.replace(/^#/,"")||"home";
  if(path==="home"){home();return}
  if(path==="subjects"){subjects();return}
  if(path==="saved"){placeholder("Saved","Your saved revision material will appear here.");return}
  if(path==="progress"){placeholder("Progress","Your study progress dashboard will appear here.");return}
  if(path.startsWith("subject/")){
    const id=path.split("/")[1];
    const subject=SUBJECTS.find(s=>s.id===id);
    placeholder(subject?.name||"Subject","Chapter material will be added in the content phase.");
    return;
  }
  home();
}

document.addEventListener("click",e=>{
  const action=e.target.closest("[data-action]")?.dataset.action;
  const nav=e.target.closest("[data-nav]")?.dataset.nav;

  if(action==="theme"){toggleTheme();renderHeader();return}
  if(action==="home"){location.hash="home";return}
  if(nav==="home")location.hash="home";
  if(nav==="subjects")location.hash="subjects";
  if(nav==="saved")location.hash="saved";
  if(nav==="progress")location.hash="progress";
});

setTheme(state.theme);
renderHeader();
renderNav();
window.addEventListener("hashchange",route);
route();
