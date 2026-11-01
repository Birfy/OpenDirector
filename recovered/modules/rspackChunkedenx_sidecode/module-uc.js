import n from "./module-M_2.js";
import o from "./module-d.js";
import i from "./module-Y.js";
import a from "./module-Md.js";
import s from "./module-X7.js";
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
