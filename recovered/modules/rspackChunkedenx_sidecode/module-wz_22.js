import n from "./module-M_2_21.js";
import i from "./module-vo_21.js";
import o from "./module-d_22.js";
import s from "./module-Z_2_21.js";
import a from "./module-Qn_22.js";
export default function (t, r) {
  const e = arguments.length < 2 ? a(t) : r;
  if (i(e)) {
    return o(n(e, t));
  }
  throw TypeError(s(t) + " is not iterable");
}
