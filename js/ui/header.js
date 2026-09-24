import {state} from "../core/state.js";
import {toggleTheme} from "../core/theme.js";

export function renderHeader(){
  const header=document.querySelector("#app-header");
  header.className="app-header";
  header.innerHTML=`
    <div class="header-inner">
      <button class="brand" data-action="home" aria-label="Go to home">
        <span class="brand-mark">10</span>
        <span>Class 10 Notes</span>
      </button>
      <div class="header-actions">
        <button class="icon-btn" data-action="theme" aria-label="Toggle theme">${state.theme==="dark"?"☀️":"🌙"}</button>
      </div>
    </div>`;
}
