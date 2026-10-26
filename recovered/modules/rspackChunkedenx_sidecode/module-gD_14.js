import o from "./module-J_15.js";
import i from "./module-Xy_2_14.js";
import a from "./module-Y_15.js";
import s from "./module-qj_14.js";
import c from "./module-Pv_15.js";
import u from "./module-E6_14.js";
import f from "./module-eXf_14.js";
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
      const c = a(n) ? n : o_Function(n);
      const h = s ? u(arguments, e) : [];
      const v = s
        ? function () {
            i(c, this, h);
          }
        : c;
      if (r) {
        return t(v, o);
      }
      return t(v);
    };
  }
  return t;
}
