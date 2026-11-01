import n from "./module-u.js";
import o from "./module-Lu.js";
import i from "./module-r.js";
import a from "./module-I8.js";
import s from "./module-VO_3.js";
import u from "./module-Nt_3.js";
import c from "./module-MF_3.js";
import f from "./module-CG_2.js";
import l from "./module-K.js";
import p from "./module-z_2.js";
const h = o && o.prototype;
const v = u("species");
let SUBCLASSING = false;
const REJECTION_EVENT = i(n.PromiseRejectionEvent);
export default {
  CONSTRUCTOR: a("Promise", function () {
    const e = s(o);
    const t = e !== String(o);
    if ((!t && p === 66) || (l && !(h.catch && h.finally))) {
      return true;
    }
    if (!p || p < 51 || !/native code/.test(e)) {
      const r = new o(function (e) {
        e(1);
      });
      const n = function (e) {
        e(
          function () {},
          function () {},
        );
      };
      (r.constructor = {})[v] = n;
      if (!(SUBCLASSING = r.then(() => {}) instanceof n)) {
        return true;
      }
    }
    return !t && (c || f) && !REJECTION_EVENT;
  }),
  REJECTION_EVENT,
  SUBCLASSING,
};
