import r from "oa";
import { R } from "./module-E0b.js";
import { zN } from "./module-DGa.js";
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
function m(e) {
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
    r._(
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
        const i = JSON.parse((t = e.textContent) != null ? t : "");
        if (
          !(
            l(i) &&
            i.version === 2 &&
            l(i.catalog) &&
            Array.isArray(i.catalog.categories) &&
            i.catalog.categories.every(d) &&
            (i.activeCategoryId === undefined ||
              typeof i.activeCategoryId === "string") &&
            (i.scenePage === undefined || m(i.scenePage)) &&
            (i.localizationVariant === undefined ||
              zN(i.localizationVariant) !== undefined) &&
            (i.activeFilmSceneId === undefined ||
              typeof i.activeFilmSceneId === "string") &&
            (i.scenePages === undefined ||
              (Array.isArray(i.scenePages) &&
                i.scenePages.length <= 5 &&
                i.scenePages.every(m)))
          )
        ) {
          return;
        }
        return r._(
          {
            catalog: R(i.catalog),
          },
          i.activeCategoryId
            ? {
                activeCategoryId: i.activeCategoryId,
              }
            : {},
          i.scenePage
            ? {
                scenePage: i.scenePage,
              }
            : {},
          i.localizationVariant
            ? {
                localizationVariant: i.localizationVariant,
              }
            : {},
          i.activeFilmSceneId
            ? {
                activeFilmSceneId: i.activeFilmSceneId,
              }
            : {},
          i.scenePages
            ? {
                scenePages: i.scenePages,
              }
            : {},
        );
      } catch (e) {
        return;
      }
    }
  }
}
