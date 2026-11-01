import o from "./module-J.js";
import i from "./module-Xy_2.js";
import a from "./module-Y.js";
import s from "./module-qj.js";
import u from "./module-Pv.js";
import c from "./module-E6.js";
import f from "./module-eXf.js";
let n;
const o_Function = o.Function;
const l =
  /MSIE .\./.test(u) ||
  (s &&
    ((n = o.Bun.version.split(".")).length < 3 ||
      (n[0] === "0" && (n[1] < 3 || (n[1] === "3" && n[2] === "0")))));
export default function (t, r) {
  const e = r ? 2 : 1;
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
      if (r) {
        return t(v, o);
      }
      return t(v);
    };
  }
  return t;
}
