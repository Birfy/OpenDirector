import n from "./module-M_2_21.js";
import i from "./module-d_22.js";
import o from "./module-Y_22.js";
import s from "./module-Md_21.js";
import a from "./module-X7_21.js";
export default function (t, r) {
  const t_exec = t.exec;
  if (o(t_exec)) {
    const c = n(t_exec, t, r);
    if (c !== null) {
      i(c);
    }
    return c;
  }
  if (s(t) === "RegExp") {
    return n(a, t, r);
  }
  throw TypeError("RegExp#exec called on incompatible receiver");
}
