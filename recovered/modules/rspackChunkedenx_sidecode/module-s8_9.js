import n from "./module-J_10.js";
import o from "./module-X_10.js";
import i from "./module-O9_9.js";
import a from "./module-ng_10.js";
import _s from "./module-kp_9.js";
import u from "./module-ri_10.js";
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
      const e = _s_trim(a(t));
      const r = n_parseFloat(e);
      if (r === 0 && c(e, 0) === "-") {
        return -0;
      }
      return r;
    }
  : n_parseFloat;
