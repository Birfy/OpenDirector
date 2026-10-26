import n from "./module-Y_21.js";
import o from "./module-y_2_20.js";
import i from "./module-d4_20.js";
export default function (t, r, e) {
  let a;
  let s;
  if (
    i &&
    n((a = r.constructor)) &&
    a !== e &&
    o((s = a.prototype)) &&
    s !== e.prototype
  ) {
    i(t, s);
  }
  return t;
}
