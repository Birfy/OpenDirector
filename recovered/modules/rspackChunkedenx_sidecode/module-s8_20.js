import n from "./module-J_21.js";
import o from "./module-X_21.js";
import i from "./module-O9_20.js";
import a from "./module-ng_21.js";
import _s from "./module-kp_20.js";
import c from "./module-ri_21.js";
const _s_trim = _s.trim;
const u = i("".charAt);
const n_parseFloat = n.parseFloat;
const n_Symbol = n.Symbol;
const h = n_Symbol && n_Symbol.iterator;
export default 1 / n_parseFloat(c + "-0") != -Infinity ||
(h &&
  !o(function () {
    n_parseFloat(Object(h));
  }))
  ? function (t) {
      const r = _s_trim(a(t));
      const e = n_parseFloat(r);
      if (e === 0 && u(r, 0) === "-") {
        return -0;
      }
      return e;
    }
  : n_parseFloat;
