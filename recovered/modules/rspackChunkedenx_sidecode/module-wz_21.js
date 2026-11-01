import n from "./module-M_2_20.js";
import o from "./module-vo_20.js";
import i from "./module-d_21.js";
import a from "./module-Z_2_20.js";
import s from "./module-Qn_21.js";
export default function (t, r) {
  const e = arguments.length < 2 ? s(t) : r;
  if (o(e)) {
    return i(n(e, t));
  }
  throw TypeError(a(t) + " is not iterable");
}
