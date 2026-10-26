import a from "Ut";
import { Q4 } from "./module-qg_2.js";
import { zB } from "./module-nc.js";
export function A(e) {
  let t;
  let n;
  let o;
  let m;
  let p;
  let v;
  let h;
  m = l(
    ((n = s(
      (t = ((e) => {
        try {
          const t = JSON.parse(e);
          if (d(t)) {
            return t;
          }
          return undefined;
        } catch (e) {
          return;
        }
      })(e)),
      "component_list",
    )),
    (o = c(t, "main_component_id")),
    n == null ? undefined : n.filter(d).find((e) => c(e, "id") === o)),
    "abilities",
  );
  const g = l(m, "unified_generate_v2");
  const f =
    (p = s(g, "unified_ability_list")) == null
      ? undefined
      : p.filter(d).find((e) => c(e, "ability_code") === Q4);
  const b = c(f, "extra");
  const extra = zB(b);
  const submittedImage = ((e) => {
    if (e) {
      return {
        originUri: c(e, "image_uri"),
        originUrl: c(e, "image_url"),
        width: u(e, "width"),
        height: u(e, "height"),
        historyId: c(e, "history_id"),
        itemId: c(e, "item_id"),
      };
    }
  })(
    l(
      l(
        (v = s(f, "resource_list")) == null
          ? undefined
          : v
              .filter(d)
              .find(
                (e) => u(e, "purpose") === a.ResourcePurpose.ORIGINAL_IMAGE,
              ),
        "content",
      ),
      "image",
    ),
  );
  if (extra) {
    return {
      prompt: (h = c(g, "prompt")) != null ? h : "",
      extra,
      submittedImage,
    };
  }
}
function l(e, t) {
  if (d(e)) {
    const n = e[t];
    if (d(n)) {
      return n;
    }
    return undefined;
  }
}
function s(e, t) {
  if (d(e)) {
    if (Array.isArray(e[t])) {
      return e[t];
    }
    return undefined;
  }
}
function c(e, t) {
  if (d(e)) {
    if (typeof e[t] === "string") {
      return e[t];
    }
    return undefined;
  }
}
function u(e, t) {
  if (d(e)) {
    if (typeof e[t] === "number") {
      return e[t];
    }
    return undefined;
  }
}
function d(e) {
  return !!(e && typeof e === "object");
}
export { zB as z } from "./module-nc.js";
