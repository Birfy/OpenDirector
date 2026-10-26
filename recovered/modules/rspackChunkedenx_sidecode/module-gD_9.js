import o from "./module-J_10.js";
import i from "./module-Xy_2_9.js";
import a from "./module-Y_10.js";
import s from "./module-qj_9.js";
import u from "./module-Pv_10.js";
import c from "./module-E6_9.js";
import f from "./module-eXf_9.js";
let n;
const o_Function = o.Function;
const h =
  /MSIE .\./.test(u) ||
  (s &&
    ((n = o.Bun.version.split(".")).length < 3 ||
      (n[0] === "0" && (n[1] < 3 || (n[1] === "3" && n[2] === "0")))));
export default function (t, e) {
  const r = e ? 2 : 1;
  if (h) {
    return function (n, o) {
      const s = f(arguments.length, 1) > r;
      const u = a(n) ? n : o_Function(n);
      const h = s ? c(arguments, r) : [];
      const v = s
        ? function () {
            i(u, this, h);
          }
        : u;
      if (e) {
        return t(v, o);
      }
      return t(v);
    };
  }
  return t;
}
