import n from "./module-M_2_6.js";
import o from "./module-d_7.js";
import a from "./module-Y_7.js";
import i from "./module-Md_6.js";
import s from "./module-X7_6.js";
export default function (t, r) {
  const t_exec = t.exec;
  if (a(t_exec)) {
    const u = n(t_exec, t, r);
    if (u !== null) {
      o(u);
    }
    return u;
  }
  if (i(t) === "RegExp") {
    return n(s, t, r);
  }
  throw TypeError("RegExp#exec called on incompatible receiver");
}
