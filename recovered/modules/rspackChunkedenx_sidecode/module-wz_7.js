import n from "./module-M_2_6.js";
import o from "./module-vo_6.js";
import a from "./module-d_7.js";
import i from "./module-Z_2_6.js";
import s from "./module-Qn_7.js";
export default function (t, r) {
  const e = arguments.length < 2 ? s(t) : r;
  if (o(e)) {
    return a(n(e, t));
  }
  throw TypeError(i(t) + " is not iterable");
}
