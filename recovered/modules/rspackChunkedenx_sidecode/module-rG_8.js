import n from "./module-M_2_8.js";
import i from "./module-y_2_8.js";
import o from "./module-i_2_8.js";
import s from "./module-C_9.js";
import a from "./module-z_9.js";
import u from "./module-lN_8.js";
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
