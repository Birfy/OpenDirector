import n from "./module-J_7.js";
import o from "./module-X_7.js";
import a from "./module-O9_6.js";
import i from "./module-ng_7.js";
import _s from "./module-kp_6.js";
import c from "./module-ri_7.js";
const _s_trim = _s.trim;
const n_parseInt = n.parseInt;
const n_Symbol = n.Symbol;
const l = n_Symbol && n_Symbol.iterator;
const h = /^[+-]?0x/i;
const p = a(h.exec);
export default n_parseInt(c + "08") !== 8 ||
n_parseInt(c + "0x16") !== 22 ||
(l &&
  !o(function () {
    n_parseInt(Object(l));
  }))
  ? function (t, r) {
      const e = _s_trim(i(t));
      return n_parseInt(e, r >>> 0 || (p(h, e) ? 16 : 10));
    }
  : n_parseInt;
