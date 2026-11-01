import n from "./module-Y_12.js";
import o from "./module-y_2_11.js";
import i from "./module-d4_11.js";
export default function (r, t, e) {
  let a;
  let s;
  if (
    i &&
    n((a = t.constructor)) &&
    a !== e &&
    o((s = a.prototype)) &&
    s !== e.prototype
  ) {
    i(r, s);
  }
  return r;
}
