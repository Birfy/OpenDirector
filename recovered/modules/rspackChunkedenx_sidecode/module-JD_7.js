import n from "./module-Y_7.js";
import o from "./module-y_2_6.js";
import a from "./module-d4_6.js";
export default function (t, r, e) {
  let i;
  let s;
  if (
    a &&
    n((i = r.constructor)) &&
    i !== e &&
    o((s = i.prototype)) &&
    s !== e.prototype
  ) {
    a(t, s);
  }
  return t;
}
