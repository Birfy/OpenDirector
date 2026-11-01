import n from "./module-Y_10.js";
import o from "./module-y_2_9.js";
import i from "./module-d4_9.js";
export default function (t, e, r) {
  let a;
  let s;
  if (
    i &&
    n((a = e.constructor)) &&
    a !== r &&
    o((s = a.prototype)) &&
    s !== r.prototype
  ) {
    i(t, s);
  }
  return t;
}
