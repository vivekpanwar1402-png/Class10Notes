const KEY="class10notes-saved";

export function getSaved(){
  try{return JSON.parse(localStorage.getItem(KEY)||"[]")}catch{return[]}
}

export function isSaved(id){return getSaved().includes(id)}

export function toggleSaved(id){
  const saved=getSaved();
  const next=saved.includes(id)?saved.filter(x=>x!==id):[...saved,id];
  localStorage.setItem(KEY,JSON.stringify(next));
  return next;
}
