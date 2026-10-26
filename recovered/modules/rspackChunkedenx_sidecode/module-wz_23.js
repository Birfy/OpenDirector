import n from "./module-M_2_22.js";
import i from "./module-vo_22.js";
import o from "./module-d_23.js";
import s from "./module-Z_2_22.js";
import a from "./module-Qn_23.js";
export default function (t, r) {
  const e = arguments.length < 2 ? a(t) : r;
  if (i(e)) {
    return o(n(e, t));
  }
  throw TypeError(s(t) + " is not iterable");
}
