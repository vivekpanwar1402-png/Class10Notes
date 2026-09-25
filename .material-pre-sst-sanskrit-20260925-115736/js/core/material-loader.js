const cache = new Map();

export async function loadMaterial(loader, key){
  if(cache.has(key)){
    return cache.get(key);
  }

  const material=await loader();

  cache.set(key,material);

  return material;
}

export function clearMaterialCache(){
  cache.clear();
}
