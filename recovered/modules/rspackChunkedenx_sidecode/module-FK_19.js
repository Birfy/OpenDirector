import n from "./module-J_20.js";
import o from "./module-xl_20.js";
import i from "./module-Y_20.js";
import a from "./module-Ze_2_19.js";
import s from "./module-iJ_19.js";
import u from "./module-lN_19.js";
import c from "./module-pj_20.js";
import f from "./module-In_19.js";
import l from "./module-N_19.js";
import h from "./module-G_2_19.js";
const v = o && o.prototype;
const p = u("species");
let SUBCLASSING = false;
const REJECTION_EVENT = i(n.PromiseRejectionEvent);
export default {
  CONSTRUCTOR: a("Promise", function () {
    const r = s(o);
    const t = r !== String(o);
    if ((!t && h === 66) || (l && !(v.catch && v.finally))) {
      return true;
    }
    if (!h || h < 51 || !/native code/.test(r)) {
      const e = new o(function (r) {
        r(1);
      });
      const n = function (r) {
        r(
          function () {},
          function () {},
        );
      };
      (e.constructor = {})[p] = n;
      if (!(SUBCLASSING = e.then(() => {}) instanceof n)) {
        return true;
      }
    }
    return !t && (c || f) && !REJECTION_EVENT;
  }),
  REJECTION_EVENT,
  SUBCLASSING,
};
