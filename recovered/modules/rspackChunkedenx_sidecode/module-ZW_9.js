import n from "./module-J_10.js";
import o from "./module-X_10.js";
import i from "./module-O9_9.js";
import a from "./module-ng_10.js";
import _s from "./module-kp_9.js";
import u from "./module-ri_10.js";
const _s_trim = _s.trim;
const n_parseInt = n.parseInt;
const n_Symbol = n.Symbol;
const l = n_Symbol && n_Symbol.iterator;
const h = /^[+-]?0x/i;
const v = i(h.exec);
export default n_parseInt(u + "08") !== 8 ||
n_parseInt(u + "0x16") !== 22 ||
(l &&
  !o(function () {
    n_parseInt(Object(l));
  }))
  ? function (t, e) {
      const r = _s_trim(a(t));
      return n_parseInt(r, e >>> 0 || (v(h, r) ? 16 : 10));
    }
  : n_parseInt;
