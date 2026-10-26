import n from "./module-J_4.js";
import { f as f_1 } from "./module-R_3.js";
import o from "./module-h_4.js";
import s from "./module-vE_3.js";
import a from "./module-sA_3.js";
import u from "./module-bE_4.js";
import c from "./module-Ze_2_3.js";
export default function (t, r) {
  let e;
  let f;
  let h;
  let l;
  let v;
  const t_target = t.target;
  const t_global = t.global;
  const t_stat = t.stat;
  if (
    (e = t_global
      ? n
      : t_stat
        ? n[t_target] || a(t_target, {})
        : (n[t_target] || {}).prototype)
  ) {
    for (f in r) {
      l = r[f];
      h = t.dontCallGetSet ? (v = f_1(e, f)) && v.value : e[f];
      if (
        !c(t_global ? f : t_target + (t_stat ? "." : "#") + f, t.forced) &&
        h !== undefined
      ) {
        if (typeof l == typeof h) {
          continue;
        }
        u(l, h);
      }
      if (t.sham || (h && h.sham)) {
        o(l, "sham", true);
      }
      s(e, f, l, t);
    }
  }
}
