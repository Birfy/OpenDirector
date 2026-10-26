import $ from "./module-J_13.js";
import tt from "./module-xl_13.js";
import te from "./module-Y_13.js";
import tr from "./module-Ze_2_12.js";
import tn from "./module-iJ_12.js";
import ti from "./module-lN_12.js";
import to from "./module-pj_13.js";
import ta from "./module-In_12.js";
import ts from "./module-N_12.js";
import tf from "./module-G_2_12.js";
const tu = tt && tt.prototype;
const tc = ti("species");
let SUBCLASSING = false;
const REJECTION_EVENT = te($.PromiseRejectionEvent);
export default {
  CONSTRUCTOR: tr("Promise", function () {
    const J = tn(tt);
    const Z = J !== String(tt);
    if ((!Z && tf === 66) || (ts && !(tu.catch && tu.finally))) {
      return true;
    }
    if (!tf || tf < 51 || !/native code/.test(J)) {
      const Q = new tt(function (J) {
        J(1);
      });
      const $ = function (J) {
        J(
          function () {},
          function () {},
        );
      };
      (Q.constructor = {})[tc] = $;
      if (!(SUBCLASSING = Q.then(() => {}) instanceof $)) {
        return true;
      }
    }
    return !Z && (to || ta) && !REJECTION_EVENT;
  }),
  REJECTION_EVENT,
  SUBCLASSING,
};
