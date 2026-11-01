import o from "./module-A_18.js";
import i from "./module-Yj_17.js";
import { f as f_1 } from "./module-R_17.js";
import s from "./module-dV_17.js";
import u from "./module-ng_18.js";
import c from "./module-l0_17.js";
import f from "./module-vj_18.js";
import h from "./module-Aj_18.js";
import l from "./module-N_17.js";
let n;
const v = i("".startsWith);
const p = i("".slice);
const g = h("startsWith");
o(
  {
    target: "String",
    proto: true,
    forced:
      !(!l && !g && (n = f_1(String.prototype, "startsWith")) && !n.writable) &&
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
