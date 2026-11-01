import n from "./module-J_5.js";
import i from "./module-X_5.js";
import o from "./module-O9_4.js";
import s from "./module-ng_5.js";
import _a from "./module-kp_4.js";
import u from "./module-ri_5.js";
const _a_trim = _a.trim;
const n_parseInt = n.parseInt;
const n_Symbol = n.Symbol;
const h = n_Symbol && n_Symbol.iterator;
const l = /^[+-]?0x/i;
const v = o(l.exec);
export default n_parseInt(u + "08") !== 8 ||
n_parseInt(u + "0x16") !== 22 ||
(h &&
  !i(function () {
    n_parseInt(Object(h));
  }))
  ? function (t, r) {
      const e = _a_trim(s(t));
      return n_parseInt(e, r >>> 0 || (v(l, e) ? 16 : 10));
    }
  : n_parseInt;
