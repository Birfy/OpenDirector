import tt from "./module-J_13.js";
import te from "./module-Xy_3_2.js";
import tr from "./module-Y_13.js";
import tn from "./module-qj_2_2.js";
import ti from "./module-Pv_13.js";
import to from "./module-E6_12.js";
import ta from "./module-eXf_12.js";
let $;
const tt_Function = tt.Function;
const tf =
  /MSIE .\./.test(ti) ||
  (tn &&
    (($ = tt.Bun.version.split(".")).length < 3 ||
      ($[0] === "0" && ($[1] < 3 || ($[1] === "3" && $[2] === "0")))));
export default function (J, Z) {
  const Q = Z ? 2 : 1;
  if (tf) {
    return function ($, tt) {
      const tn = ta(arguments.length, 1) > Q;
      const ti = tr($) ? $ : tt_Function($);
      const tf = tn ? to(arguments, Q) : [];
      const tu = tn
        ? function () {
            te(ti, this, tf);
          }
        : ti;
      if (Z) {
        return J(tu, tt);
      }
      return J(tu);
    };
  }
  return J;
}
