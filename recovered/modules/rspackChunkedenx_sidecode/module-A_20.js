import n from "./module-J_20.js";
import { f as f_1 } from "./module-R_19.js";
import i from "./module-h_20.js";
import a from "./module-vE_19.js";
import s from "./module-sA_19.js";
import u from "./module-bE_20.js";
import c from "./module-Ze_2_19.js";
export default function (r, t) {
  let e;
  let f;
  let l;
  let h;
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
      h = t[f];
      l = r.dontCallGetSet ? (v = f_1(e, f)) && v.value : e[f];
      if (
        !c(r_global ? f : r_target + (r_stat ? "." : "#") + f, r.forced) &&
        l !== undefined
      ) {
        if (typeof h == typeof l) {
          continue;
        }
        u(h, l);
      }
      if (r.sham || (l && l.sham)) {
        i(h, "sham", true);
      }
      a(e, f, h, r);
    }
  }
}
