import n from "./module-M_2_9.js";
import o from "./module-vo_9.js";
import i from "./module-d_10.js";
import a from "./module-Z_2_9.js";
import s from "./module-Qn_10.js";
export default function (t, e) {
  const r = arguments.length < 2 ? s(t) : e;
  if (o(r)) {
    return i(n(r, t));
  }
  throw TypeError(a(t) + " is not iterable");
}
