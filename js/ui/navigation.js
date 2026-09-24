export function renderNav(){
  const nav=document.querySelector("#app-nav");
  nav.className="bottom-nav";
  nav.innerHTML=`
    <button class="active" data-nav="home">⌂<br><small>Home</small></button>
    <button data-nav="subjects">📚<br><small>Subjects</small></button>
    <button data-nav="saved">🔖<br><small>Saved</small></button>
    <button data-nav="progress">📈<br><small>Progress</small></button>`;
}
