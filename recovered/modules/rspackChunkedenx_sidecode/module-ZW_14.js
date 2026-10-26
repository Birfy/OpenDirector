import n from "./module-J_15.js";
import o from "./module-X_15.js";
import i from "./module-O9_14.js";
import a from "./module-ng_15.js";
import _s from "./module-kp_14.js";
import c from "./module-ri_15.js";
const _s_trim = _s.trim;
const n_parseInt = n.parseInt;
const n_Symbol = n.Symbol;
const l = n_Symbol && n_Symbol.iterator;
const h = /^[+-]?0x/i;
const v = i(h.exec);
export default n_parseInt(c + "08") !== 8 ||
n_parseInt(c + "0x16") !== 22 ||
(l &&
  !o(function () {
    n_parseInt(Object(l));
  }))
  ? function (t, r) {
      const e = _s_trim(a(t));
      return n_parseInt(e, r >>> 0 || (v(h, e) ? 16 : 10));
    }
  : n_parseInt;
