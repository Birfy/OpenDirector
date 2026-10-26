import n from "./module-Y.js";
import o from "./module-y_2.js";
import i from "./module-d4.js";
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
