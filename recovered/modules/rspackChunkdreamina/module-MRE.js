import n from "./module-u.js";
import o from "./module-VV_4.js";
import i from "./module-o.js";
import a from "./module-BC_2.js";
import _s from "./module-ym_2_2.js";
import u from "./module-nl.js";
const _s_trim = _s.trim;
const c = i("".charAt);
const n_parseFloat = n.parseFloat;
const n_Symbol = n.Symbol;
const p = n_Symbol && n_Symbol.iterator;
export default 1 / n_parseFloat(u + "-0") != -Infinity ||
(p &&
  !o(function () {
    n_parseFloat(Object(p));
  }))
  ? function (e) {
      const t = _s_trim(a(e));
      const r = n_parseFloat(t);
      if (r === 0 && c(t, 0) === "-") {
        return -0;
      }
      return r;
    }
  : n_parseFloat;
