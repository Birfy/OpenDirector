import n from "./module-Y_19.js";
import o from "./module-y_2_18.js";
import i from "./module-d4_18.js";
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
