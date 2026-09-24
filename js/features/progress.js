const KEY="class10notes-progress";

export function getProgress(){
  try{return JSON.parse(localStorage.getItem(KEY)||"{}")}catch{return{}}
}

export function markComplete(id){
  const data=getProgress();
  data[id]={completed:true,updatedAt:Date.now()};
  localStorage.setItem(KEY,JSON.stringify(data));
}
