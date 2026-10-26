import o from "./module-J_16.js";
import i from "./module-Xy_2_15.js";
import a from "./module-Y_16.js";
import s from "./module-qj_15.js";
import u from "./module-Pv_16.js";
import c from "./module-E6_15.js";
import f from "./module-eXf_15.js";
let n;
const o_Function = o.Function;
const l =
  /MSIE .\./.test(u) ||
  (s &&
    ((n = o.Bun.version.split(".")).length < 3 ||
      (n[0] === "0" && (n[1] < 3 || (n[1] === "3" && n[2] === "0")))));
export default function (r, t) {
  const e = t ? 2 : 1;
  if (l) {
    return function (n, o) {
      const s = f(arguments.length, 1) > e;
      const u = a(n) ? n : o_Function(n);
      const l = s ? c(arguments, e) : [];
      const v = s
        ? function () {
            i(u, this, l);
          }
        : u;
      if (t) {
        return r(v, o);
      }
      return r(v);
    };
  }
  return r;
}
