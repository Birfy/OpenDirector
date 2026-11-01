import n from "./module-J_7.js";
import o from "./module-xl_7.js";
import a from "./module-Y_7.js";
import i from "./module-Ze_2_6.js";
import s from "./module-iJ_6.js";
import c from "./module-lN_6.js";
import u from "./module-pj_7.js";
import f from "./module-In_6.js";
import l from "./module-N_6.js";
import h from "./module-G_2_6.js";
const p = o && o.prototype;
const v = c("species");
let SUBCLASSING = false;
const REJECTION_EVENT = a(n.PromiseRejectionEvent);
export default {
  CONSTRUCTOR: i("Promise", function () {
    const t = s(o);
    const r = t !== String(o);
    if ((!r && h === 66) || (l && !(p.catch && p.finally))) {
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
      (e.constructor = {})[v] = n;
      if (!(SUBCLASSING = e.then(() => {}) instanceof n)) {
        return true;
      }
    }
    return !r && (u || f) && !REJECTION_EVENT;
  }),
  REJECTION_EVENT,
  SUBCLASSING,
};
