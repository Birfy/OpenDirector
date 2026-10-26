import n from "./module-J_12.js";
import { f as f_1 } from "./module-R_11.js";
import i from "./module-h_12.js";
import a from "./module-vE_11.js";
import s from "./module-sA_11.js";
import u from "./module-bE_12.js";
import c from "./module-Ze_2_11.js";
export default function (r, t) {
  let e;
  let f;
  let h;
  let l;
  let v;
  const r_target = r.target;
  const r_global = r.global;
  const r_stat = r.stat;
  if (
    (e = r_global
      ? n
      : r_stat
        ? n[r_target] || s(r_target, {})
        : (n[r_target] || {}).prototype)
  ) {
    for (f in t) {
      l = t[f];
      h = r.dontCallGetSet ? (v = f_1(e, f)) && v.value : e[f];
      if (
        !c(r_global ? f : r_target + (r_stat ? "." : "#") + f, r.forced) &&
        h !== undefined
      ) {
        if (typeof l == typeof h) {
          continue;
        }
        u(l, h);
      }
      if (r.sham || (h && h.sham)) {
        i(l, "sham", true);
      }
      a(e, f, l, r);
    }
  }
}
