import n from "./module-p3.js";
import o from "./module-IF_2.js";
import i from "./module-r.js";
import a from "./module-C.js";
import s from "./module-Iz_4.js";
export default function (e, t) {
  const e_exec = e.exec;
  if (i(e_exec)) {
    const c = n(e_exec, e, t);
    if (c !== null) {
      o(c);
    }
    return c;
  }
  if (a(e) === "RegExp") {
    return n(s, e, t);
  }
  throw TypeError("RegExp#exec called on incompatible receiver");
}
