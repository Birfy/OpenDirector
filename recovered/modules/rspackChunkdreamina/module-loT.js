import r from "oa";
import n from "Wl";
import { vC } from "./module-gHz.js";
import o from "./module-HrI.js";
import * as s from "./module-Pm.js";
export var O6 = "__DREAMINA_MARKETING_RESOURCE_SSR_SNAPSHOT__";
function c(e) {
  return typeof e === "object" && e !== null;
}
function d(e) {
  let t;
  let i;
  let r;
  return (
    c(e) &&
    typeof e.key === "string" &&
    typeof e.coverUrl === "string" &&
    (e.videoUrl === undefined || typeof e.videoUrl === "string") &&
    (e.title === undefined || typeof e.title === "string") &&
    ((t = e.coverUrlMap) === undefined ||
      (c(t) && Object.values(t).every((e) => typeof e === "string"))) &&
    !!c((i = e.clickReport)) &&
    typeof i.banner === "string" &&
    (i.bannerType === "banner" ||
      (i.bannerType === "activity" && typeof i.actKey === "string")) &&
    !!c((r = e.action)) &&
    (r.type === "open-url"
      ? typeof r.href === "string"
      : r.type === "activity-detail"
        ? typeof r.actKey === "string"
        : r.type === "content-generator"
          ? vC(r.target)
          : r.type === "guide-overlay" && r.schema === o.j)
  );
}
export function Zs(e) {
  return JSON.stringify(
    r._(
      {
        version: 4,
      },
      e,
    ),
  )
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
export function r1() {
  if (!(typeof document === "undefined")) {
    const e = document.getElementById(O6);
    if (e) {
      e.remove();
      try {
        let t;
        const i = JSON.parse((t = e.textContent) != null ? t : "");
        if (
          !(
            !(
              !c(i) ||
              i.version !== 4 ||
              !Array.isArray(i.items) ||
              typeof i.complete !== "boolean" ||
              (i.activityPreviews !== undefined &&
                (!c(i.activityPreviews) ||
                  Array.isArray(i.activityPreviews) ||
                  !Object.values(i.activityPreviews).every(
                    (e) => typeof e === "string",
                  )))
            ) && i.items.every(d)
          )
        ) {
          return;
        }
        return r._(
          {
            items: i.items
              .filter(
                (e) =>
                  n.T7() ||
                  e.action.type !== "open-url" ||
                  !n.lQ(e.action.href),
              )
              .slice(0, s.tv),
            complete: i.complete,
          },
          i.activityPreviews
            ? {
                activityPreviews: i.activityPreviews,
              }
            : {},
        );
      } catch (e) {
        return;
      }
    }
  }
}
