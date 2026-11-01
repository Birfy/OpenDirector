import n from "./module-Y_6.js";
import i from "./module-y_2_5.js";
import o from "./module-d4_5.js";
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
