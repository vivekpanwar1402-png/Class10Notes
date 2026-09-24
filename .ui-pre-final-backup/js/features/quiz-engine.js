export function calculateQuizScore(answers,correct){
  if(!Array.isArray(answers)||!Array.isArray(correct))return 0;
  return answers.reduce((score,a,i)=>score+(a===correct[i]?1:0),0);
}
