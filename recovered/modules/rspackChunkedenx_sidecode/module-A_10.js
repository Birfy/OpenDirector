import n from "./module-J_10.js";
import { f as f_1 } from "./module-R_9.js";
import i from "./module-h_10.js";
import a from "./module-vE_9.js";
import s from "./module-sA_9.js";
import u from "./module-bE_10.js";
import c from "./module-Ze_2_9.js";
export default function (t, e) {
  let r;
  let f;
  let l;
  let h;
  let v;
  const t_target = t.target;
  const t_global = t.global;
  const t_stat = t.stat;
  if (
    (r = t_global
      ? n
      : t_stat
        ? n[t_target] || s(t_target, {})
        : (n[t_target] || {}).prototype)
  ) {
    for (f in e) {
      h = e[f];
      l = t.dontCallGetSet ? (v = f_1(r, f)) && v.value : r[f];
      if (
        !c(t_global ? f : t_target + (t_stat ? "." : "#") + f, t.forced) &&
        l !== undefined
      ) {
        if (typeof h == typeof l) {
          continue;
        }
        u(h, l);
      }
      if (t.sham || (l && l.sham)) {
        i(h, "sham", true);
      }
      a(r, f, h, t);
    }
  }
}
