import n from "./module-J_14.js";
import o from "./module-X_14.js";
import i from "./module-O9_13.js";
import a from "./module-ng_14.js";
import _s from "./module-kp_13.js";
import u from "./module-ri_14.js";
const _s_trim = _s.trim;
const c = i("".charAt);
const n_parseFloat = n.parseFloat;
const n_Symbol = n.Symbol;
const l = n_Symbol && n_Symbol.iterator;
export default 1 / n_parseFloat(u + "-0") != -Infinity ||
(l &&
  !o(function () {
    n_parseFloat(Object(l));
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
