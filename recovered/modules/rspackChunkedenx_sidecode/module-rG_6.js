import n from "./module-M_2_6.js";
import o from "./module-y_2_6.js";
import a from "./module-i_2_6.js";
import i from "./module-C_7.js";
import s from "./module-z_7.js";
import c from "./module-lN_6.js";
const f = c("toPrimitive");
export default function (t, r) {
  if (!o(t) || a(t)) {
    return t;
  }
  let e;
  const c = i(t, f);
  if (c) {
    if (r === undefined) {
      r = "default";
    }
    if (!o((e = n(c, t, r))) || a(e)) {
      return e;
    }
    throw TypeError("Can't convert object to primitive value");
  }
  if (r === undefined) {
    r = "number";
  }
  return s(t, r);
}
