import n from "./module-p3.js";
import o from "./module-B.js";
import i from "./module-IF_2.js";
import a from "./module-j_2.js";
import s from "./module-UZ_3.js";
export default function (e, t) {
  const r = arguments.length < 2 ? s(e) : t;
  if (o(r)) {
    return i(n(r, e));
  }
  throw TypeError(a(e) + " is not iterable");
}
