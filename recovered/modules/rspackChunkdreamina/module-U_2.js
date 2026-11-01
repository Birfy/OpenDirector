import n from "./module-r.js";
import o from "./module-N.js";
import i from "./module-P.js";
export default function (e, t, r) {
  let a;
  let s;
  if (
    i &&
    n((a = t.constructor)) &&
    a !== r &&
    o((s = a.prototype)) &&
    s !== r.prototype
  ) {
    i(e, s);
  }
  return e;
}
