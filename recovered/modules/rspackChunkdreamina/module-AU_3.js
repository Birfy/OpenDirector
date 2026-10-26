import n from "./module-Ok_2.js";
import o from "./module-BC_2.js";
import i from "./module-H_2.js";
export default function (e) {
  let t = o(i(this));
  let r = "";
  let s = n(e);
  if (s < 0 || Infinity === s) {
    throw RangeError("Wrong number of repetitions");
  }
  for (; s > 0; (s >>>= 1) && (t += t)) {
    if (1 & s) {
      r += t;
    }
  }
  return r;
}
