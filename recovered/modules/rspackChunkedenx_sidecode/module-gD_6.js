import o from "./module-J_7.js";
import a from "./module-Xy_2_6.js";
import i from "./module-Y_7.js";
import s from "./module-qj_6.js";
import c from "./module-Pv_7.js";
import u from "./module-E6_6.js";
import f from "./module-eXf_6.js";
let n;
const o_Function = o.Function;
const h =
  /MSIE .\./.test(c) ||
  (s &&
    ((n = o.Bun.version.split(".")).length < 3 ||
      (n[0] === "0" && (n[1] < 3 || (n[1] === "3" && n[2] === "0")))));
export default function (t, r) {
  const e = r ? 2 : 1;
  if (h) {
    return function (n, o) {
      const s = f(arguments.length, 1) > e;
      const c = i(n) ? n : o_Function(n);
      const h = s ? u(arguments, e) : [];
      const p = s
        ? function () {
            a(c, this, h);
          }
        : c;
      if (r) {
        return t(p, o);
      }
      return t(p);
    };
  }
  return t;
}
