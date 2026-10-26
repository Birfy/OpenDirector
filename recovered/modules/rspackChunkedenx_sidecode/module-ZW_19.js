import n from "./module-J_20.js";
import o from "./module-X_20.js";
import i from "./module-O9_19.js";
import a from "./module-ng_20.js";
import _s from "./module-kp_19.js";
import u from "./module-ri_20.js";
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
  ? function (r, t) {
      const e = _s_trim(a(r));
      return n_parseInt(e, t >>> 0 || (v(h, e) ? 16 : 10));
    }
  : n_parseInt;
