import n from "./module-J_15.js";
import o from "./module-xl_15.js";
import i from "./module-Y_15.js";
import a from "./module-Ze_2_14.js";
import s from "./module-iJ_14.js";
import c from "./module-lN_14.js";
import u from "./module-pj_15.js";
import f from "./module-In_14.js";
import l from "./module-N_14.js";
import h from "./module-G_2_14.js";
const v = o && o.prototype;
const p = c("species");
let SUBCLASSING = false;
const REJECTION_EVENT = i(n.PromiseRejectionEvent);
export default {
  CONSTRUCTOR: a("Promise", function () {
    const t = s(o);
    const r = t !== String(o);
    if ((!r && h === 66) || (l && !(v.catch && v.finally))) {
      return true;
    }
    if (!h || h < 51 || !/native code/.test(t)) {
      const e = new o(function (t) {
        t(1);
      });
      const n = function (t) {
        t(
          function () {},
          function () {},
        );
      };
      (e.constructor = {})[p] = n;
      if (!(SUBCLASSING = e.then(() => {}) instanceof n)) {
        return true;
      }
    }
    return !r && (u || f) && !REJECTION_EVENT;
  }),
  REJECTION_EVENT,
  SUBCLASSING,
};
