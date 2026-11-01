import n from "./module-M_2_20.js";
import o from "./module-d_21.js";
import i from "./module-Y_21.js";
import a from "./module-Md_20.js";
import s from "./module-X7_20.js";
export default function (t, r) {
  const t_exec = t.exec;
  if (i(t_exec)) {
    const u = n(t_exec, t, r);
    if (u !== null) {
      o(u);
    }
    return u;
  }
  if (a(t) === "RegExp") {
    return n(s, t, r);
  }
  throw TypeError("RegExp#exec called on incompatible receiver");
}
