import n from "./module-J.js";
import o from "./module-X.js";
import i from "./module-O9.js";
import a from "./module-ng.js";
import _s from "./module-kp.js";
import u from "./module-ri.js";
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
  ? function (t) {
      const r = _s_trim(a(t));
      const e = n_parseFloat(r);
      if (e === 0 && c(r, 0) === "-") {
        return -0;
      }
      return e;
    }
  : n_parseFloat;
