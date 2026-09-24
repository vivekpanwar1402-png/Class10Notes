import {state} from "../core/state.js";

export function bindSearch(onSearch){
  const input=document.querySelector("#global-search");
  if(!input)return;
  input.addEventListener("input",e=>{
    state.query=e.target.value.trim();
    onSearch(state.query);
  });
}
