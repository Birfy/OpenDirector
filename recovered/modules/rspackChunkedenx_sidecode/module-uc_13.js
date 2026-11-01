import n from "./module-M_2_13.js";
import o from "./module-d_14.js";
import i from "./module-Y_14.js";
import a from "./module-Md_13.js";
import s from "./module-X7_13.js";
export default function (r, t) {
  const r_exec = r.exec;
  if (i(r_exec)) {
    const c = n(r_exec, r, t);
    if (c !== null) {
      o(c);
    }
    return c;
  }
  if (a(r) === "RegExp") {
    return n(s, r, t);
  }
  throw TypeError("RegExp#exec called on incompatible receiver");
}
