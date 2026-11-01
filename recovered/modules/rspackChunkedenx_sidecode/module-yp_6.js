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
const p = a("".endsWith);
const v = a("".slice);
const g = l("endsWith");
o(
  {
    target: "String",
    proto: true,
    forced:
      !(!h && !g && (n = f_1(String.prototype, "endsWith")) && !n.writable) &&
      !g,
  },
  {
    endsWith: function (t) {
      const r = c(f(this));
      u(t);
      const e = arguments.length > 1 ? arguments[1] : undefined;
      const r_length = r.length;
      const o = e === undefined ? r_length : Math.min(s(e), r_length);
      const a = c(t);
      if (p) {
        return p(r, a, o);
      }
      return v(r, o - a.length, o) === a;
    },
  },
);
