import n from "./module-Y_17.js";
import o from "./module-y_2_16.js";
import i from "./module-d4_16.js";
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
