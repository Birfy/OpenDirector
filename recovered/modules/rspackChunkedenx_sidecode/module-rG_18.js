import n from "./module-M_2_18.js";
import o from "./module-y_2_18.js";
import i from "./module-i_2_18.js";
import a from "./module-C_19.js";
import s from "./module-z_19.js";
import u from "./module-lN_18.js";
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
