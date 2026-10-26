import n from "./module-J_19.js";
import o from "./module-xl_19.js";
import i from "./module-Y_19.js";
import a from "./module-Ze_2_18.js";
import s from "./module-iJ_18.js";
import u from "./module-lN_18.js";
import c from "./module-pj_19.js";
import f from "./module-In_18.js";
import h from "./module-N_18.js";
import l from "./module-G_2_18.js";
const v = o && o.prototype;
const p = u("species");
let SUBCLASSING = false;
const REJECTION_EVENT = i(n.PromiseRejectionEvent);
export default {
  CONSTRUCTOR: a("Promise", function () {
    const r = s(o);
    const t = r !== String(o);
    if ((!t && l === 66) || (h && !(v.catch && v.finally))) {
      return true;
    }
    if (!l || l < 51 || !/native code/.test(r)) {
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
