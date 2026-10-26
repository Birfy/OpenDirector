import o from "./module-A_11.js";
import i from "./module-Yj_10.js";
import { f as f_1 } from "./module-R_10.js";
import s from "./module-dV_10.js";
import u from "./module-ng_11.js";
import c from "./module-l0_10.js";
import f from "./module-vj_11.js";
import l from "./module-Aj_11.js";
import h from "./module-N_10.js";
let n;
const v = i("".startsWith);
const p = i("".slice);
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
      const r = u(f(this));
      c(t);
      const e = s(
        Math.min(arguments.length > 1 ? arguments[1] : undefined, r.length),
      );
      const n = u(t);
      if (v) {
        return v(r, n, e);
      }
      return p(r, e, e + n.length) === n;
    },
  },
);
