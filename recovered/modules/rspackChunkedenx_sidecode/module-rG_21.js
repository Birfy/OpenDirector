import n from "./module-M_2_21.js";
import i from "./module-y_2_21.js";
import o from "./module-i_2_21.js";
import s from "./module-C_22.js";
import a from "./module-z_22.js";
import u from "./module-lN_21.js";
const f = u("toPrimitive");
export default function (t, r) {
  if (!i(t) || o(t)) {
    return t;
  }
  let e;
  const u = s(t, f);
  if (u) {
    if (r === undefined) {
      r = "default";
    }
    if (!i((e = n(u, t, r))) || o(e)) {
      return e;
    }
    throw TypeError("Can't convert object to primitive value");
  }
  if (r === undefined) {
    r = "number";
  }
  return a(t, r);
}
