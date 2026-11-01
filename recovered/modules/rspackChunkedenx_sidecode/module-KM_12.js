import $ from "./module-V6_13.js";
import tt from "./module-ng_13.js";
import te from "./module-vj_13.js";
export default function (J) {
  let Z = tt(te(this));
  let Q = "";
  let tn = $(J);
  if (tn < 0 || Infinity === tn) {
    throw RangeError("Wrong number of repetitions");
  }
  for (; tn > 0; (tn >>>= 1) && (Z += Z)) {
    if (1 & tn) {
      Q += Z;
    }
  }
  return Q;
}
