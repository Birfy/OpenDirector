import n from "./module-J_20.js";
import o from "./module-X_20.js";
import i from "./module-O9_19.js";
import a from "./module-ng_20.js";
import _s from "./module-kp_19.js";
import u from "./module-ri_20.js";
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
  ? function (r) {
      const t = _s_trim(a(r));
      const e = n_parseFloat(t);
      if (e === 0 && c(t, 0) === "-") {
        return -0;
      }
      return e;
    }
  : n_parseFloat;
