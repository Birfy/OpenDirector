import n from "./module-J_23.js";
import i from "./module-X_23.js";
import o from "./module-O9_22.js";
import s from "./module-ng_23.js";
import _a from "./module-kp_22.js";
import u from "./module-ri_23.js";
const _a_trim = _a.trim;
const c = o("".charAt);
const n_parseFloat = n.parseFloat;
const n_Symbol = n.Symbol;
const l = n_Symbol && n_Symbol.iterator;
export default 1 / n_parseFloat(u + "-0") != -Infinity ||
(l &&
  !i(function () {
    n_parseFloat(Object(l));
  }))
  ? function (t) {
      const r = _a_trim(s(t));
      const e = n_parseFloat(r);
      if (e === 0 && c(r, 0) === "-") {
        return -0;
      }
      return e;
    }
  : n_parseFloat;
