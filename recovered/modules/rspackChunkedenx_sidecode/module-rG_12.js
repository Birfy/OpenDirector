import $ from "./module-M_2_12.js";
import tt from "./module-y_2_12.js";
import te from "./module-i_2_12.js";
import tr from "./module-C_13.js";
import tn from "./module-z_13.js";
import ti from "./module-lN_12.js";
const ta = ti("toPrimitive");
export default function (J, Z) {
  if (!tt(J) || te(J)) {
    return J;
  }
  let Q;
  const ti = tr(J, ta);
  if (ti) {
    if (Z === undefined) {
      Z = "default";
    }
    if (!tt((Q = $(ti, J, Z))) || te(Q)) {
      return Q;
    }
    throw TypeError("Can't convert object to primitive value");
  }
  if (Z === undefined) {
    Z = "number";
  }
  return tn(J, Z);
}
