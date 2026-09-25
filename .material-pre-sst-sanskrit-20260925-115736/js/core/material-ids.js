export function createMaterialId(subjectId,chapterId,topicId=""){
  return [
    subjectId,
    chapterId,
    topicId
  ].filter(Boolean).join(":");
}

export function createQuestionId(subjectId,chapterId,index){
  return [
    subjectId,
    chapterId,
    "q",
    index
  ].join(":");
}

export function createFlashcardId(subjectId,chapterId,index){
  return [
    subjectId,
    chapterId,
    "fc",
    index
  ].join(":");
}
