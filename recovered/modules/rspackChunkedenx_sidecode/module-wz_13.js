import $ from "./module-M_2_12.js";
import tt from "./module-vo_12.js";
import te from "./module-d_13.js";
import tr from "./module-Z_2_12.js";
import tn from "./module-Qn_13.js";
export default function (J, Z) {
  const Q = arguments.length < 2 ? tn(J) : Z;
  if (tt(Q)) {
    return te($(Q, J));
  }
  throw TypeError(tr(J) + " is not iterable");
}
