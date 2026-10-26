import n from "./module-M_2_18.js";
import o from "./module-vo_18.js";
import i from "./module-d_19.js";
import a from "./module-Z_2_18.js";
import s from "./module-Qn_19.js";
export default function (r, t) {
  const e = arguments.length < 2 ? s(r) : t;
  if (o(e)) {
    return i(n(e, r));
  }
  throw TypeError(a(r) + " is not iterable");
}
