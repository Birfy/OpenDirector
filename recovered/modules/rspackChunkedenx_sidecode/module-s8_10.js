import n from "./module-J_11.js";
import o from "./module-X_11.js";
import i from "./module-O9_10.js";
import a from "./module-ng_11.js";
import _s from "./module-kp_10.js";
import u from "./module-ri_11.js";
const _s_trim = _s.trim;
const c = i("".charAt);
const n_parseFloat = n.parseFloat;
const n_Symbol = n.Symbol;
const h = n_Symbol && n_Symbol.iterator;
export default 1 / n_parseFloat(u + "-0") != -Infinity ||
(h &&
  !o(function () {
    n_parseFloat(Object(h));
  }))
  ? function (t) {
      const r = _s_trim(a(t));
      const e = n_parseFloat(r);
      if (e === 0 && c(r, 0) === "-") {
        return -0;
      }
      return e;
    }
  : n_parseFloat;
