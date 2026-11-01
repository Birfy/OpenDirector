import n from "./module-J_16.js";
import o from "./module-X_16.js";
import i from "./module-O9_15.js";
import a from "./module-ng_16.js";
import _s from "./module-kp_15.js";
import u from "./module-ri_16.js";
const _s_trim = _s.trim;
const n_parseInt = n.parseInt;
const n_Symbol = n.Symbol;
const h = n_Symbol && n_Symbol.iterator;
const l = /^[+-]?0x/i;
const v = i(l.exec);
export default n_parseInt(u + "08") !== 8 ||
n_parseInt(u + "0x16") !== 22 ||
(h &&
  !o(function () {
    n_parseInt(Object(h));
  }))
  ? function (r, t) {
      const e = _s_trim(a(r));
      return n_parseInt(e, t >>> 0 || (v(l, e) ? 16 : 10));
    }
  : n_parseInt;
