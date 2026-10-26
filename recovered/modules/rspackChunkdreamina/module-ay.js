import n from "Ut";
export function d(e) {
  const t = new n.DAImageIpKeep();
  t.paramDescription = e.description;
  t.refIdWeight = e.refIdWeight;
  t.refIpWeight = e.refIpWeight;
  t.characterId = e.characterId;
  t.characterName = e.characterName;
  return t;
}
export function G(e) {
  let t;
  let i;
  let n;
  let a;
  let o;
  return {
    description: (t = e.paramDescription) != null ? t : "",
    refIdWeight: (i = e.refIdWeight) != null ? i : 0,
    refIpWeight: (n = e.refIpWeight) != null ? n : 0,
    characterId: String((a = e.characterId) != null ? a : "0"),
    characterName: (o = e.characterName) != null ? o : "",
  };
}
