import $ from "./module-J_13.js";
import tt from "./module-X_13.js";
import te from "./module-O9_12.js";
import tr from "./module-ng_13.js";
import _tn from "./module-kp_12.js";
import ti from "./module-ri_13.js";
const _tn_trim = _tn.trim;
const to = te("".charAt);
const $_parseFloat = $.parseFloat;
const $_Symbol = $.Symbol;
const tf = $_Symbol && $_Symbol.iterator;
export default 1 / $_parseFloat(ti + "-0") != -Infinity ||
(tf &&
  !tt(function () {
    $_parseFloat(Object(tf));
  }))
  ? function (J) {
      const Z = _tn_trim(tr(J));
      const Q = $_parseFloat(Z);
      if (Q === 0 && to(Z, 0) === "-") {
        return -0;
      }
      return Q;
    }
  : $_parseFloat;
