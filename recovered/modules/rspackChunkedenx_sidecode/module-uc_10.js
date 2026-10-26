import n from "./module-M_2_10.js";
import o from "./module-d_11.js";
import i from "./module-Y_11.js";
import a from "./module-Md_10.js";
import s from "./module-X7_10.js";
export default function (t, r) {
  const t_exec = t.exec;
  if (i(t_exec)) {
    const c = n(t_exec, t, r);
    if (c !== null) {
      o(c);
    }
    return c;
  }
  if (a(t) === "RegExp") {
    return n(s, t, r);
  }
  throw TypeError("RegExp#exec called on incompatible receiver");
}
