import n from "./module-M_2_9.js";
import o from "./module-y_2_9.js";
import i from "./module-i_2_9.js";
import a from "./module-C_10.js";
import s from "./module-z_10.js";
import u from "./module-lN_9.js";
const f = u("toPrimitive");
export default function (t, e) {
  if (!o(t) || i(t)) {
    return t;
  }
  let r;
  const u = a(t, f);
  if (u) {
    if (e === undefined) {
      e = "default";
    }
    if (!o((r = n(u, t, e))) || i(r)) {
      return r;
    }
    throw TypeError("Can't convert object to primitive value");
  }
  if (e === undefined) {
    e = "number";
  }
  return s(t, e);
}
