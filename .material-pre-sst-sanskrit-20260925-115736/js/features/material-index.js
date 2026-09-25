export function buildMaterialIndex(material){

  if(!material) return [];

  const index=[];

  const add=(type,text,data={})=>{
    if(!text)return;

    index.push({
      type,
      text:String(text).toLowerCase(),
      ...data
    });
  };

  add("chapter",material.chapterName,{
    subjectId:material.subjectId,
    chapterId:material.chapterId
  });

  for(const topic of material.topics||[]){
    add("topic",topic.name,{
      subjectId:material.subjectId,
      chapterId:material.chapterId,
      topicId:topic.id
    });
  }

  for(const fact of material.notes?.keyFacts||[]){
    add("fact",fact,{
      subjectId:material.subjectId,
      chapterId:material.chapterId
    });
  }

  return index;
}
