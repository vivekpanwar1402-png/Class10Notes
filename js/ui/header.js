import {toggleTheme,getTheme,getAccent,setAccent} from "../core/theme.js";

export function renderHeader(){
  const header=document.querySelector("#app-header");

  header.className="app-header";

  header.innerHTML=`
    <div class="header-inner">
      <button
        class="brand"
        data-action="home"
        aria-label="Go to Home"
      >
        <span class="brand-mark">10</span>
        <span>Class 10 Notes</span>
      </button>

      <div class="header-actions">
        <label
          class="icon-btn interactive"
          title="Settings"
          aria-label="Settings"
          style="cursor:pointer"
        >
          <input
            id="accent-picker"
            type="color"
            value="${getAccent()}"
            aria-label="Choose accent color"
            style="
              position:absolute;
              opacity:0;
              width:1px;
              height:1px;
              pointer-events:none;
            "
          >
          <span aria-hidden="true" style="position:relative">
            ⚙
            <i
              style="
                position:absolute;
                right:-2px;
                bottom:-2px;
                width:8px;
                height:8px;
                border-radius:50%;
                background:var(--accent-color);
                border:1px solid var(--border-strong);
              "
            ></i>
          </span>
        </label>

        <button
          class="icon-btn interactive"
          data-action="theme"
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          ${getTheme()==="dark"?"☼":"☾"}
        </button>
      </div>
    </div>
  `;

  document.querySelector("#accent-picker")
    ?.addEventListener("input",event=>{
      setAccent(event.target.value);
    });

  document.querySelector("#accent-picker")
    ?.parentElement
    ?.addEventListener("click",()=>{
      document.querySelector("#accent-picker")?.click();
    });
}
