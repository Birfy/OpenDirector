import n from "./module-J_7.js";
import { f as f_1 } from "./module-R_6.js";
import a from "./module-h_7.js";
import i from "./module-vE_6.js";
import s from "./module-sA_6.js";
import c from "./module-bE_7.js";
import u from "./module-Ze_2_6.js";
export default function (t, r) {
  let e;
  let f;
  let l;
  let h;
  let p;
  const t_target = t.target;
  const t_global = t.global;
  const t_stat = t.stat;
  if (
    (e = t_global
      ? n
      : t_stat
        ? n[t_target] || s(t_target, {})
        : (n[t_target] || {}).prototype)
  ) {
    for (f in r) {
      h = r[f];
      l = t.dontCallGetSet ? (p = f_1(e, f)) && p.value : e[f];
      if (
        !u(t_global ? f : t_target + (t_stat ? "." : "#") + f, t.forced) &&
        l !== undefined
      ) {
        if (typeof h == typeof l) {
          continue;
        }
        c(h, l);
      }
      if (t.sham || (l && l.sham)) {
        a(h, "sham", true);
      }
      i(e, f, h, t);
    }
  }
}
