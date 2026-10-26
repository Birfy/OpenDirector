import n from "./module-M_2_23.js";
import o from "./module-d_24.js";
import i from "./module-Y_24.js";
import a from "./module-Md_23.js";
import s from "./module-X7_23.js";
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
