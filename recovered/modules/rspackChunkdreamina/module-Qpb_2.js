import i from "oa";
import a from "E0b";
import { zN } from "./module-DGa_2.js";
export var Iq = 8;
export var BV = "__DREAMINA_RECOMMENDATION_FEED_SSR_SNAPSHOT__";
function l(e) {
  return typeof e === "object" && e !== null;
}
function c(e) {
  return (
    l(e) &&
    typeof e.id === "string" &&
    typeof e.name === "string" &&
    (e.description === undefined || typeof e.description === "string") &&
    (e.backgroundLightUrl === undefined ||
      typeof e.backgroundLightUrl === "string") &&
    (e.backgroundDarkUrl === undefined ||
      typeof e.backgroundDarkUrl === "string") &&
    (e.showMore === undefined || typeof e.showMore === "boolean") &&
    Array.isArray(e.itemTypes) &&
    e.itemTypes.every((e) => typeof e === "number")
  );
}
function d(e) {
  return (
    l(e) &&
    typeof e.id === "string" &&
    typeof e.name === "string" &&
    (e.iconUrl === undefined || typeof e.iconUrl === "string") &&
    (e.showSubcategories === undefined ||
      typeof e.showSubcategories === "boolean") &&
    Array.isArray(e.scenes) &&
    e.scenes.every(c)
  );
}
function u(e) {
  return l(e) && typeof e.id === "string";
}
function v(e) {
  let t;
  return (
    l(e) &&
    typeof e.sceneId === "string" &&
    (e.requestProfile === undefined ||
      (t = e.requestProfile) === "dynamic" ||
      t === "dynamic-short-film") &&
    Array.isArray(e.items) &&
    e.items.length <= Iq &&
    e.items.every(u) &&
    typeof e.nextOffset === "number" &&
    Number.isSafeInteger(e.nextOffset) &&
    e.nextOffset >= 0 &&
    typeof e.hasMore === "boolean"
  );
}
export function av(e) {
  return JSON.stringify(
    i._(
      {
        version: 2,
      },
      e,
    ),
  )
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
export function yr() {
  if (!(typeof document === "undefined")) {
    const e = document.getElementById(BV);
    if (e) {
      e.remove();
      try {
        let t;
        const r = JSON.parse((t = e.textContent) != null ? t : "");
        if (
          !(
            l(r) &&
            r.version === 2 &&
            l(r.catalog) &&
            Array.isArray(r.catalog.categories) &&
            r.catalog.categories.every(d) &&
            (r.activeCategoryId === undefined ||
              typeof r.activeCategoryId === "string") &&
            (r.scenePage === undefined || v(r.scenePage)) &&
            (r.localizationVariant === undefined ||
              zN(r.localizationVariant) !== undefined) &&
            (r.activeFilmSceneId === undefined ||
              typeof r.activeFilmSceneId === "string") &&
            (r.scenePages === undefined ||
              (Array.isArray(r.scenePages) &&
                r.scenePages.length <= 5 &&
                r.scenePages.every(v)))
          )
        ) {
          return;
        }
        return i._(
          {
            catalog: a.R(r.catalog),
          },
          r.activeCategoryId
            ? {
                activeCategoryId: r.activeCategoryId,
              }
            : {},
          r.scenePage
            ? {
                scenePage: r.scenePage,
              }
            : {},
          r.localizationVariant
            ? {
                localizationVariant: r.localizationVariant,
              }
            : {},
          r.activeFilmSceneId
            ? {
                activeFilmSceneId: r.activeFilmSceneId,
              }
            : {},
          r.scenePages
            ? {
                scenePages: r.scenePages,
              }
            : {},
        );
      } catch (e) {
        return;
      }
    }
  }
}
