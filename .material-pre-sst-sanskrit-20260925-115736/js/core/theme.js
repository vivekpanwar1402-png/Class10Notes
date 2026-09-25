const ACCENT_KEY="class10notes-accent";
const THEME_KEY="class10notes-theme";

const DEFAULT_ACCENT="#22D3EE";

function hexToRgb(hex){
  const value=hex.replace("#","");
  const normalized=value.length===3
    ? value.split("").map(x=>x+x).join("")
    : value;

  const number=parseInt(normalized,16);

  return {
    r:(number>>16)&255,
    g:(number>>8)&255,
    b:number&255
  };
}

export function setAccent(color){
  if(!/^#[0-9A-Fa-f]{6}$/.test(color))return;

  const {r,g,b}=hexToRgb(color);
  const root=document.documentElement;

  root.style.setProperty("--accent-color",color);
  root.style.setProperty("--accent-rgb",`${r},${g},${b}`);
  root.style.setProperty("--accent-soft",`rgba(${r},${g},${b},.10)`);
  root.style.setProperty("--accent-border",`rgba(${r},${g},${b},.25)`);
  root.style.setProperty("--accent-glow",`rgba(${r},${g},${b},.13)`);
  root.style.setProperty("--accent-glow-strong",`rgba(${r},${g},${b},.20)`);

  localStorage.setItem(ACCENT_KEY,color);
}

export function getAccent(){
  return localStorage.getItem(ACCENT_KEY)||DEFAULT_ACCENT;
}

export function applyAccent(){
  setAccent(getAccent());
}

export function setTheme(theme){
  document.documentElement.classList.toggle("light",theme==="light");
  localStorage.setItem(THEME_KEY,theme);
}

export function getTheme(){
  return localStorage.getItem(THEME_KEY)||"dark";
}

export function toggleTheme(){
  setTheme(getTheme()==="dark"?"light":"dark");
}
