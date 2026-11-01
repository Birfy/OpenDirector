import o from "./module-A_21.js";
import i from "./module-Yj_20.js";
import { f as f_1 } from "./module-R_20.js";
import s from "./module-dV_20.js";
import c from "./module-ng_21.js";
import u from "./module-l0_20.js";
import f from "./module-vj_21.js";
import l from "./module-Aj_21.js";
import h from "./module-N_20.js";
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
      const r = c(f(this));
      u(t);
      const e = s(
        Math.min(arguments.length > 1 ? arguments[1] : undefined, r.length),
      );
      const n = c(t);
      if (v) {
        return v(r, n, e);
      }
      return p(r, e, e + n.length) === n;
    },
  },
);
