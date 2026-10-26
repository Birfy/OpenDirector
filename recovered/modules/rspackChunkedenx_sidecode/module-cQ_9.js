import o from "./module-A_10.js";
import i from "./module-Yj_9.js";
import { f as f_1 } from "./module-R_9.js";
import s from "./module-dV_9.js";
import u from "./module-ng_10.js";
import c from "./module-l0_9.js";
import f from "./module-vj_10.js";
import l from "./module-Aj_10.js";
import h from "./module-N_9.js";
let n;
const v = i("".startsWith);
const d = i("".slice);
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
      const e = u(f(this));
      c(t);
      const r = s(
        Math.min(arguments.length > 1 ? arguments[1] : undefined, e.length),
      );
      const n = u(t);
      if (v) {
        return v(e, n, r);
      }
      return d(e, r, r + n.length) === n;
    },
  },
);
