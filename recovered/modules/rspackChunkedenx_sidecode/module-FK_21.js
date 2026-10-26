import n from "./module-J_22.js";
import i from "./module-xl_22.js";
import o from "./module-Y_22.js";
import s from "./module-Ze_2_21.js";
import a from "./module-iJ_21.js";
import u from "./module-lN_21.js";
import c from "./module-pj_22.js";
import f from "./module-In_21.js";
import h from "./module-N_21.js";
import l from "./module-G_2_21.js";
const v = i && i.prototype;
const p = u("species");
let SUBCLASSING = false;
const REJECTION_EVENT = o(n.PromiseRejectionEvent);
export default {
  CONSTRUCTOR: s("Promise", function () {
    const t = a(i);
    const r = t !== String(i);
    if ((!r && l === 66) || (h && !(v.catch && v.finally))) {
      return true;
    }
    if (!l || l < 51 || !/native code/.test(t)) {
      const e = new i(function (t) {
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
    return !r && (c || f) && !REJECTION_EVENT;
  }),
  REJECTION_EVENT,
  SUBCLASSING,
};
