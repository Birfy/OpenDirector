import n from "./module-M_2_10.js";
import o from "./module-vo_10.js";
import i from "./module-d_11.js";
import a from "./module-Z_2_10.js";
import s from "./module-Qn_11.js";
export default function (t, r) {
  const e = arguments.length < 2 ? s(t) : r;
  if (o(e)) {
    return i(n(e, t));
  }
  throw TypeError(a(t) + " is not iterable");
}
