import n from "./module-Y_22.js";
import i from "./module-y_2_21.js";
import o from "./module-d4_21.js";
export default function (t, r, e) {
  let s;
  let a;
  if (
    o &&
    n((s = r.constructor)) &&
    s !== e &&
    i((a = s.prototype)) &&
    a !== e.prototype
  ) {
    o(t, a);
  }
  return t;
}
