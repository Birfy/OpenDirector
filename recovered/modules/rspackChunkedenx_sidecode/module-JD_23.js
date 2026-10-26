import n from "./module-Y_23.js";
import i from "./module-y_2_22.js";
import o from "./module-d4_22.js";
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
