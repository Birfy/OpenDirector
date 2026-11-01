import o from "./module-J_17.js";
import i from "./module-Xy_2_16.js";
import a from "./module-Y_17.js";
import s from "./module-qj_16.js";
import u from "./module-Pv_17.js";
import c from "./module-E6_16.js";
import f from "./module-eXf_16.js";
let n;
const o_Function = o.Function;
const h =
  /MSIE .\./.test(u) ||
  (s &&
    ((n = o.Bun.version.split(".")).length < 3 ||
      (n[0] === "0" && (n[1] < 3 || (n[1] === "3" && n[2] === "0")))));
export default function (t, r) {
  const e = r ? 2 : 1;
  if (h) {
    return function (n, o) {
      const s = f(arguments.length, 1) > e;
      const u = a(n) ? n : o_Function(n);
      const h = s ? c(arguments, e) : [];
      const v = s
        ? function () {
            i(u, this, h);
          }
        : u;
      if (r) {
        return t(v, o);
      }
      return t(v);
    };
  }
  return t;
}
