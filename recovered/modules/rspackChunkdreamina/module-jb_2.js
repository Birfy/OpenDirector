import n from "./module-u.js";
import o from "./module-VV_4.js";
import i from "./module-o.js";
import a from "./module-BC_2.js";
import _s from "./module-ym_2_2.js";
import u from "./module-nl.js";
const _s_trim = _s.trim;
const n_parseInt = n.parseInt;
const n_Symbol = n.Symbol;
const l = n_Symbol && n_Symbol.iterator;
const p = /^[+-]?0x/i;
const h = i(p.exec);
export default n_parseInt(u + "08") !== 8 ||
n_parseInt(u + "0x16") !== 22 ||
(l &&
  !o(function () {
    n_parseInt(Object(l));
  }))
  ? function (e, t) {
      const r = _s_trim(a(e));
      return n_parseInt(r, t >>> 0 || (h(p, r) ? 16 : 10));
    }
  : n_parseInt;
