import n from "./module-V6_10.js";
import o from "./module-ng_10.js";
import i from "./module-vj_10.js";
export default function (t) {
  let e = o(i(this));
  let r = "";
  let s = n(t);
  if (s < 0 || Infinity === s) {
    throw RangeError("Wrong number of repetitions");
  }
  for (; s > 0; (s >>>= 1) && (e += e)) {
    if (1 & s) {
      r += e;
    }
  }
  return r;
}
