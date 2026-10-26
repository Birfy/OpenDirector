import n from "./module-V6_7.js";
import o from "./module-ng_7.js";
import a from "./module-vj_7.js";
export default function (t) {
  let r = o(a(this));
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
