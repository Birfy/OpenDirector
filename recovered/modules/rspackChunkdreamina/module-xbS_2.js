import i from "Ut";
export function V(e) {
  const t = new i.DABlendPromptPlaceHolderInfo();
  t.abilityIndex = e.abilityIndex;
  return t;
}
export function Q(e) {
  let t;
  return {
    abilityIndex: (t = e.abilityIndex) != null ? t : 0,
  };
}
