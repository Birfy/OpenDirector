import i from "./module-A_6.js";
import o from "./module-Yj_5.js";
import { f as f_1 } from "./module-R_5.js";
import a from "./module-dV_5.js";
import u from "./module-ng_6.js";
import c from "./module-l0_5.js";
import f from "./module-vj_6.js";
import h from "./module-Aj_6.js";
import l from "./module-N_5.js";
let n;
const v = o("".startsWith);
const p = o("".slice);
const g = h("startsWith");
i(
  {
    target: "String",
    proto: true,
    forced:
      !(!l && !g && (n = f_1(String.prototype, "startsWith")) && !n.writable) &&
      !g,
  },
  {
    startsWith: function (t) {
      const r = u(f(this));
      c(t);
      const e = a(
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
