import n from "./module-M_2_16.js";
import o from "./module-y_2_16.js";
import i from "./module-i_2_16.js";
import a from "./module-C_17.js";
import s from "./module-z_17.js";
import u from "./module-lN_16.js";
const f = u("toPrimitive");
export default function (t, r) {
  if (!o(t) || i(t)) {
    return t;
  }
  let e;
  const u = a(t, f);
  if (u) {
    if (r === undefined) {
      r = "default";
    }
    if (!o((e = n(u, t, r))) || i(e)) {
      return e;
    }
    throw TypeError("Can't convert object to primitive value");
  }
  if (r === undefined) {
    r = "number";
  }
  return s(t, r);
}
