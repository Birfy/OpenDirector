import n from "./module-V6_11.js";
import o from "./module-ng_11.js";
import i from "./module-vj_11.js";
export default function (t) {
  let r = o(i(this));
  let e = "";
  let s = n(t);
  if (s < 0 || Infinity === s) {
    throw RangeError("Wrong number of repetitions");
  }
  for (; s > 0; (s >>>= 1) && (r += r)) {
    if (1 & s) {
      e += r;
    }
  }
  return e;
}
