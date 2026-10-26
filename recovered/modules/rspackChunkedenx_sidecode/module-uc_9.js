import n from "./module-M_2_9.js";
import o from "./module-d_10.js";
import i from "./module-Y_10.js";
import a from "./module-Md_9.js";
import s from "./module-X7_9.js";
export default function (t, e) {
  const t_exec = t.exec;
  if (i(t_exec)) {
    const c = n(t_exec, t, e);
    if (c !== null) {
      o(c);
    }
    return c;
  }
  if (a(t) === "RegExp") {
    return n(s, t, e);
  }
  throw TypeError("RegExp#exec called on incompatible receiver");
}
