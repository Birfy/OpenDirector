import n from "./module-M_2_14.js";
import o from "./module-y_2_14.js";
import i from "./module-i_2_14.js";
import a from "./module-C_15.js";
import s from "./module-z_15.js";
import c from "./module-lN_14.js";
const f = c("toPrimitive");
export default function (t, r) {
  if (!o(t) || i(t)) {
    return t;
  }
  let e;
  const c = a(t, f);
  if (c) {
    if (r === undefined) {
      r = "default";
    }
    if (!o((e = n(c, t, r))) || i(e)) {
      return e;
    }
    throw TypeError("Can't convert object to primitive value");
  }
  if (r === undefined) {
    r = "number";
  }
  return s(t, r);
}
