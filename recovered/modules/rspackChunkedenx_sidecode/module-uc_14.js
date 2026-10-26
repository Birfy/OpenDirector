import n from "./module-M_2_14.js";
import o from "./module-d_15.js";
import i from "./module-Y_15.js";
import a from "./module-Md_14.js";
import s from "./module-X7_14.js";
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
