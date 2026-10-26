import n from "./module-V6_20.js";
import o from "./module-ng_20.js";
import i from "./module-vj_20.js";
export default function (r) {
  let t = o(i(this));
  let e = "";
  let s = n(r);
  if (s < 0 || Infinity === s) {
    throw RangeError("Wrong number of repetitions");
  }
  for (; s > 0; (s >>>= 1) && (t += t)) {
    if (1 & s) {
      e += t;
    }
  }
  return e;
}
