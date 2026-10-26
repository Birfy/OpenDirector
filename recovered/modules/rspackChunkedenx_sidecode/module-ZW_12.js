import $ from "./module-J_13.js";
import tt from "./module-X_13.js";
import te from "./module-O9_12.js";
import tr from "./module-ng_13.js";
import _tn from "./module-kp_12.js";
import ti from "./module-ri_13.js";
const _tn_trim = _tn.trim;
const $_parseInt = $.parseInt;
const $_Symbol = $.Symbol;
const ts = $_Symbol && $_Symbol.iterator;
const tf = /^[+-]?0x/i;
const tu = te(tf.exec);
export default $_parseInt(ti + "08") !== 8 ||
$_parseInt(ti + "0x16") !== 22 ||
(ts &&
  !tt(function () {
    $_parseInt(Object(ts));
  }))
  ? function (J, Z) {
      const Q = _tn_trim(tr(J));
      return $_parseInt(Q, Z >>> 0 || (tu(tf, Q) ? 16 : 10));
    }
  : $_parseInt;
