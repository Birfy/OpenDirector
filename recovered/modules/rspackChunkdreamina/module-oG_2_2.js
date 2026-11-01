import o from "./module-u.js";
import i from "./module-l.js";
import a from "./module-r.js";
import s from "./module-zh.js";
import u from "./module-Q0_2.js";
import c from "./module-Vz_2.js";
import f from "./module-lU_2.js";
let n;
const o_Function = o.Function;
const p =
  /MSIE .\./.test(u) ||
  (s &&
    ((n = o.Bun.version.split(".")).length < 3 ||
      (n[0] === "0" && (n[1] < 3 || (n[1] === "3" && n[2] === "0")))));
export default function (e, t) {
  const r = t ? 2 : 1;
  if (p) {
    return function (n, o) {
      const s = f(arguments.length, 1) > r;
      const u = a(n) ? n : o_Function(n);
      const p = s ? c(arguments, r) : [];
      const h = s
        ? function () {
            i(u, this, p);
          }
        : u;
      if (t) {
        return e(h, o);
      }
      return e(h);
    };
  }
  return e;
}
