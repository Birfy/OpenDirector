import o from "./module-A_8.js";
import i from "./module-Yj_7.js";
import { f as f_1 } from "./module-R_7.js";
import s from "./module-dV_7.js";
import u from "./module-ng_8.js";
import c from "./module-l0_7.js";
import f from "./module-vj_8.js";
import l from "./module-Aj_8.js";
import h from "./module-N_7.js";
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
    startsWith: function (r) {
      const t = u(f(this));
      c(r);
      const e = s(
        Math.min(arguments.length > 1 ? arguments[1] : undefined, t.length),
      );
      const n = u(r);
      if (v) {
        return v(t, n, e);
      }
      return p(t, e, e + n.length) === n;
    },
  },
);
