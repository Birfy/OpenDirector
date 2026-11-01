import n from "./module-p3.js";
import o from "./module-N.js";
import i from "./module-n_2.js";
import a from "./module-T_2.js";
import s from "./module-a_2.js";
import u from "./module-Nt_3.js";
const f = u("toPrimitive");
export default function (e, t) {
  if (!o(e) || i(e)) {
    return e;
  }
  let r;
  const u = a(e, f);
  if (u) {
    if (t === undefined) {
      t = "default";
    }
    if (!o((r = n(u, e, t))) || i(r)) {
      return r;
    }
    throw TypeError("Can't convert object to primitive value");
  }
  if (t === undefined) {
    t = "number";
  }
  return s(e, t);
}
