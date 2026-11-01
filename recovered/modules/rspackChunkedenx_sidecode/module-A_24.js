import n from "./module-J_24.js";
import { f as f_1 } from "./module-R_23.js";
import i from "./module-h_24.js";
import a from "./module-vE_23.js";
import s from "./module-sA_23.js";
import c from "./module-bE_24.js";
import u from "./module-Ze_2_23.js";
export default function (t, r) {
  let e;
  let f;
  let l;
  let h;
  let v;
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
      l = t.dontCallGetSet ? (v = f_1(e, f)) && v.value : e[f];
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
        i(h, "sham", true);
      }
      a(e, f, h, t);
    }
  }
}
