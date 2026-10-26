import n from "./module-J.js";
import { f as f_1 } from "./module-R.js";
import i from "./module-h.js";
import a from "./module-vE.js";
import s from "./module-sA.js";
import u from "./module-bE.js";
import c from "./module-Ze_2.js";
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
        ? n[t_target] || s(t_target, {})
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
        i(l, "sham", true);
      }
      a(e, f, l, t);
    }
  }
}
