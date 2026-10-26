import n from "./module-M_2_11.js";
import o from "./module-y_2_11.js";
import i from "./module-i_2_11.js";
import a from "./module-C_12.js";
import s from "./module-z_12.js";
import u from "./module-lN_11.js";
const f = u("toPrimitive");
export default function (r, t) {
  if (!o(r) || i(r)) {
    return r;
  }
  let e;
  const u = a(r, f);
  if (u) {
    if (t === undefined) {
      t = "default";
    }
    if (!o((e = n(u, r, t))) || i(e)) {
      return e;
    }
    throw TypeError("Can't convert object to primitive value");
  }
  if (t === undefined) {
    t = "number";
  }
  return s(r, t);
}
