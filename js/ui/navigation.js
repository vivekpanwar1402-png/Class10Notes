export function renderNav(current="home"){
  const nav=document.querySelector("#app-nav");

  nav.className="bottom-nav";

  const items=[
    ["home","⌂","Home"],
    ["dates","◷","Dates"],
    ["quiz","✓","Quiz"],
    ["revision","▣","Revision"],
    ["progress","↗","Progress"]
  ];

  nav.innerHTML=items.map(([id,icon,label])=>`
    <button
      class="${current===id?"active":""}"
      data-nav="${id}"
      aria-label="${label}"
      aria-current="${current===id?"page":"false"}"
    >
      <span aria-hidden="true">${icon}</span>
      <br>
      <small>${label}</small>
    </button>
  `).join("");
}
