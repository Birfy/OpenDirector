import $ from "./module-O9_12.js";
import tt from "./module-vj_13.js";
import te from "./module-ng_13.js";
import tr from "./module-ri_13.js";
const tn = $("".replace);
const ti = RegExp("^[" + tr + "]+");
const to = RegExp("(^|[^" + tr + "])[" + tr + "]+$");
const ta = (J) =>
  function (Z) {
    let Q = te(tt(Z));
    if (1 & J) {
      Q = tn(Q, ti, "");
    }
    if (2 & J) {
      Q = tn(Q, to, "$1");
    }
    return Q;
  };
export default {
  start: ta(1),
  end: ta(2),
  trim: ta(3),
};
