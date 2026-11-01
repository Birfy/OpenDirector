import i from "yMd";
export function sJ(e) {
  const categories = e.flatMap((e) =>
    e.scenes.map((t) => {
      var { id, name } = t;
      return {
        id,
        name: e.showSubcategories === false ? e.name : name,
      };
    }),
  );
  return {
    categories,
    showCategories:
      categories.length > 1 ||
      e.some((e) => e.showSubcategories !== false && e.scenes.length > 0),
  };
}
const o = new Set([i.NB.Single, i.NB.ImageMaterial, i.NB.DreaminaAiVideo]);
export function Uu(e) {
  const t = [];
  if (e.itemTypes.some((e) => o.has(e))) {
    t.push("inspiration");
  }
  if (e.itemTypes.includes(i.NB.ShortVideo)) {
    t.push("short-video");
  }
  return t;
}
export function x_(e) {
  return e.showMore !== false;
}
export function Gz(e) {
  if (e === "dynamic-short-film") {
    return "short-video";
  }
  return "inspiration";
}
