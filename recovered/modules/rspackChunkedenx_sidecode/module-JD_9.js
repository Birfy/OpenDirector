import n from "./module-Y_9.js";
import i from "./module-y_2_8.js";
import o from "./module-d4_8.js";
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
