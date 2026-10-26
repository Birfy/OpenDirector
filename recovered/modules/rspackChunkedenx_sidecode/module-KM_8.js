import n from "./module-V6_9.js";
import i from "./module-ng_9.js";
import o from "./module-vj_9.js";
export default function (t) {
  let r = i(o(this));
  let e = "";
  let a = n(t);
  if (a < 0 || Infinity === a) {
    throw RangeError("Wrong number of repetitions");
  }
  for (; a > 0; (a >>>= 1) && (r += r)) {
    if (1 & a) {
      e += r;
    }
  }
  return e;
}
