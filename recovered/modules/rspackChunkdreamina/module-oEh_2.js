import i from "Ut";
export function O(e) {
  const t = new i.DAImageControlNet();
  t.name = e.name;
  t.strength = e.strength;
  t.imageIndex = e.imageIndex;
  t.maskIndex = e.maskIndex;
  return t;
}
export function T(e) {
  let t;
  if (e.name) {
    return {
      name: e.name,
      strength: e.strength,
      imageIndex: (t = e.imageIndex) != null ? t : 0,
      maskIndex: e.maskIndex,
    };
  }
}
