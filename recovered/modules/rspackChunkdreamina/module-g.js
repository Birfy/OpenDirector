import n from "./module-u.js";
import { f as f_1 } from "./module-y_2.js";
import i from "./module-z3.js";
import a from "./module-xX_2.js";
import s from "./module-yo.js";
import u from "./module-cg.js";
import c from "./module-I8.js";
export default function (e, t) {
  let r;
  let f;
  let l;
  let p;
  let h;
  const e_target = e.target;
  const e_global = e.global;
  const e_stat = e.stat;
  if (
    (r = e_global
      ? n
      : e_stat
        ? n[e_target] || s(e_target, {})
        : (n[e_target] || {}).prototype)
  ) {
    for (f in t) {
      p = t[f];
      l = e.dontCallGetSet ? (h = f_1(r, f)) && h.value : r[f];
      if (
        !c(e_global ? f : e_target + (e_stat ? "." : "#") + f, e.forced) &&
        l !== undefined
      ) {
        if (typeof p == typeof l) {
          continue;
        }
        u(p, l);
      }
      if (e.sham || (l && l.sham)) {
        i(p, "sham", true);
      }
      a(r, f, p, e);
    }
  }
}
