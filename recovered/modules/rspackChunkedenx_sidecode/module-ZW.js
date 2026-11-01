import n from "./module-J.js";
import o from "./module-X.js";
import i from "./module-O9.js";
import a from "./module-ng.js";
import _s from "./module-kp.js";
import u from "./module-ri.js";
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
  ? function (t, r) {
      const e = _s_trim(a(t));
      return n_parseInt(e, r >>> 0 || (v(l, e) ? 16 : 10));
    }
  : n_parseInt;
