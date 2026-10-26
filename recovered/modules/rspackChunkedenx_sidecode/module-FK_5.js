import n from "./module-J_6.js";
import i from "./module-xl_6.js";
import o from "./module-Y_6.js";
import s from "./module-Ze_2_5.js";
import a from "./module-iJ_5.js";
import u from "./module-lN_5.js";
import c from "./module-pj_6.js";
import f from "./module-In_5.js";
import h from "./module-N_5.js";
import l from "./module-G_2_5.js";
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
