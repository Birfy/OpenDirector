import n from "./module-M_2_14.js";
import o from "./module-vo_14.js";
import i from "./module-d_15.js";
import a from "./module-Z_2_14.js";
import s from "./module-Qn_15.js";
export default function (t, r) {
  const e = arguments.length < 2 ? s(t) : r;
  if (o(e)) {
    return i(n(e, t));
  }
  throw TypeError(a(t) + " is not iterable");
}
