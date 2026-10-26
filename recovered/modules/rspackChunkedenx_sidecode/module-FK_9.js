import n from "./module-J_10.js";
import o from "./module-xl_10.js";
import i from "./module-Y_10.js";
import a from "./module-Ze_2_9.js";
import s from "./module-iJ_9.js";
import u from "./module-lN_9.js";
import c from "./module-pj_10.js";
import f from "./module-In_9.js";
import l from "./module-N_9.js";
import h from "./module-G_2_9.js";
const v = o && o.prototype;
const d = u("species");
let SUBCLASSING = false;
const REJECTION_EVENT = i(n.PromiseRejectionEvent);
export default {
  CONSTRUCTOR: a("Promise", function () {
    const t = s(o);
    const e = t !== String(o);
    if ((!e && h === 66) || (l && !(v.catch && v.finally))) {
      return true;
    }
    if (!h || h < 51 || !/native code/.test(t)) {
      const r = new o(function (t) {
        t(1);
      });
      const n = function (t) {
        t(
          function () {},
          function () {},
        );
      };
      (r.constructor = {})[d] = n;
      if (!(SUBCLASSING = r.then(() => {}) instanceof n)) {
        return true;
      }
    }
    return !e && (c || f) && !REJECTION_EVENT;
  }),
  REJECTION_EVENT,
  SUBCLASSING,
};
