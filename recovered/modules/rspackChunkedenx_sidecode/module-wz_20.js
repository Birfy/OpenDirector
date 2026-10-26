import n from "./module-M_2_19.js";
import o from "./module-vo_19.js";
import i from "./module-d_20.js";
import a from "./module-Z_2_19.js";
import s from "./module-Qn_20.js";
export default function (r, t) {
  const e = arguments.length < 2 ? s(r) : t;
  if (o(e)) {
    return i(n(e, r));
  }
  throw TypeError(a(r) + " is not iterable");
}
