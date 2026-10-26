import n from "./module-M_2.js";
import o from "./module-vo.js";
import i from "./module-d.js";
import a from "./module-Z_2.js";
import s from "./module-Qn.js";
export default function (t, r) {
  const e = arguments.length < 2 ? s(t) : r;
  if (o(e)) {
    return i(n(e, t));
  }
  throw TypeError(a(t) + " is not iterable");
}
