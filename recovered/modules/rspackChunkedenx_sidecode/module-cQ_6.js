import o from "./module-A_7.js";
import a from "./module-Yj_6.js";
import { f as f_1 } from "./module-R_6.js";
import s from "./module-dV_6.js";
import c from "./module-ng_7.js";
import u from "./module-l0_6.js";
import f from "./module-vj_7.js";
import l from "./module-Aj_7.js";
import h from "./module-N_6.js";
let n;
const p = a("".startsWith);
const v = a("".slice);
const g = l("startsWith");
o(
  {
    target: "String",
    proto: true,
    forced:
      !(!h && !g && (n = f_1(String.prototype, "startsWith")) && !n.writable) &&
      !g,
  },
  {
    startsWith: function (t) {
      const r = c(f(this));
      u(t);
      const e = s(
        Math.min(arguments.length > 1 ? arguments[1] : undefined, r.length),
      );
      const n = c(t);
      if (p) {
        return p(r, n, e);
      }
      return v(r, e, e + n.length) === n;
    },
  },
);
