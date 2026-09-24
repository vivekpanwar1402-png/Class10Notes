import {SUBJECTS} from "../data/subjects.js";
import {renderHeader} from "./ui/header.js";
import {renderNav} from "./ui/navigation.js";
import {
  applyAccent,
  getTheme,
  toggleTheme
} from "./core/theme.js";

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

function home(){
  renderNav("home");

  app.innerHTML=`
    <section class="hero">
      <div class="eyebrow">
        Uttarakhand Board • Class 10
      </div>

      <h1>
        Study smarter.<br>
        Revise with clarity.
      </h1>

      <p>
        A calm, focused study space for your Class 10 preparation.
        Notes, revision, quizzes and progress will live in one place.
      </p>

      <label class="search-box">
        <span aria-hidden="true">⌕</span>

        <input
          id="global-search"
          type="search"
          placeholder="Search subjects, chapters or topics..."
          aria-label="Search"
        >
      </label>
    </section>

    <section class="section">
      <div class="section-heading">
        <div>
          <div class="eyebrow">Continue</div>
          <h2>Your study path</h2>
        </div>

        <span class="status-pill active">
          Ready
        </span>
      </div>

      <div class="dashboard-grid">

        <article class="card continue-card interactive">
          <div>
            <div class="eyebrow">Continue Revision</div>

            <h2 style="margin-top:7px">
              Your next study session
            </h2>

            <p class="muted" style="margin-top:7px">
              Your chapter progress will appear here once material is added.
            </p>
          </div>

          <div>
            <div class="status-row">
              <span class="status-pill">No chapter started</span>
              <span class="status-pill">0% progress</span>
            </div>

            <div class="progress-track">
              <div
                class="progress-fill"
                style="--progress:0%"
              ></div>
            </div>

            <button
              class="btn btn-primary interactive"
              style="margin-top:17px"
              data-action="subjects"
            >
              Explore Subjects →
            </button>
          </div>
        </article>

        <div class="stat-grid">
          <article class="card stat-card interactive">
            <div class="stat-label">Chapters</div>
            <div class="stat-value">0</div>
          </article>

          <article class="card stat-card interactive">
            <div class="stat-label">Dates learned</div>
            <div class="stat-value">0</div>
          </article>

          <article class="card stat-card interactive">
            <div class="stat-label">Quiz accuracy</div>
            <div class="stat-value">—</div>
          </article>

          <article class="card stat-card interactive">
            <div class="stat-label">Revision streak</div>
            <div class="stat-value">0</div>
          </article>
        </div>

      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <div>
          <div class="eyebrow">Quick Access</div>
          <h2>Study tools</h2>
        </div>
      </div>

      <div class="grid tools-grid">

        <a class="card subject-card interactive" href="#dates">
          <div>
            <div class="subject-icon">◷</div>
            <h3>History Dates</h3>
            <p>Quickly revise important events and dates.</p>
          </div>
          <span class="card-link">Open →</span>
        </a>

        <a class="card subject-card interactive" href="#quiz">
          <div>
            <div class="subject-icon">✓</div>
            <h3>Quiz</h3>
            <p>Test your understanding with focused practice.</p>
          </div>
          <span class="card-link">Start →</span>
        </a>

        <a class="card subject-card interactive" href="#revision">
          <div>
            <div class="subject-icon">▣</div>
            <h3>Revision</h3>
            <p>Use flashcards for fast active recall.</p>
          </div>
          <span class="card-link">Revise →</span>
        </a>

      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <div>
          <div class="eyebrow">Subjects</div>
          <h2>Choose your subject</h2>
        </div>
      </div>

      <div class="grid subjects-grid">
        ${subjectCards()}
      </div>
    </section>
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

function subject(id){
  renderNav("home");

  const item=SUBJECTS.find(x=>x.id===id);

  app.innerHTML=`
    <section class="hero">
      <div class="eyebrow">${item?.name||"Subject"}</div>

      <h1>${item?.name||"Subject"}</h1>

      <p>
        Chapter-wise notes, questions, revision and tests will appear here.
      </p>
    </section>

    <section class="empty-state">
      <h2>Content system ready</h2>

      <p class="muted" style="margin-top:8px">
        Verified UBSE study material will be connected to this subject module.
      </p>
    </section>
  `;
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
    return subject(path.split("/")[1]);
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

