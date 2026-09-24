import {state} from "./state.js";

export function setTheme(theme){
  state.theme=theme;
  document.documentElement.classList.toggle("light",theme==="light");
  localStorage.setItem("class10notes-theme",theme);
}
export function toggleTheme(){setTheme(state.theme==="dark"?"light":"dark")}
