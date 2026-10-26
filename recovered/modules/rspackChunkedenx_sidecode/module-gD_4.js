import i from "./module-J_5.js";
import o from "./module-Xy_2_4.js";
import s from "./module-Y_5.js";
import a from "./module-qj_4.js";
import u from "./module-Pv_5.js";
import c from "./module-E6_4.js";
import f from "./module-eXf_4.js";
let n;
const i_Function = i.Function;
const l =
  /MSIE .\./.test(u) ||
  (a &&
    ((n = i.Bun.version.split(".")).length < 3 ||
      (n[0] === "0" && (n[1] < 3 || (n[1] === "3" && n[2] === "0")))));
export default function (t, r) {
  const e = r ? 2 : 1;
  if (l) {
    return function (n, i) {
      const a = f(arguments.length, 1) > e;
      const u = s(n) ? n : i_Function(n);
      const l = a ? c(arguments, e) : [];
      const v = a
        ? function () {
            o(u, this, l);
          }
        : u;
      if (r) {
        return t(v, i);
      }
      return t(v);
    };
  }
  return t;
}
