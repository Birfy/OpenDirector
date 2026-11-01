import { NB } from "./module-yMd.js";
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
const a = new Set([NB.Single, NB.ImageMaterial, NB.DreaminaAiVideo]);
export function Uu(e) {
  const t = [];
  if (e.itemTypes.some((e) => a.has(e))) {
    t.push("inspiration");
  }
  if (e.itemTypes.includes(NB.ShortVideo)) {
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
