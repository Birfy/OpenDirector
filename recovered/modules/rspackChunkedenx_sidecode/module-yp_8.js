import i from "./module-A_9.js";
import o from "./module-Yj_8.js";
import { f as f_1 } from "./module-R_8.js";
import a from "./module-dV_8.js";
import u from "./module-ng_9.js";
import c from "./module-l0_8.js";
import f from "./module-vj_9.js";
import h from "./module-Aj_9.js";
import l from "./module-N_8.js";
let n;
const v = o("".endsWith);
const p = o("".slice);
const g = h("endsWith");
i(
  {
    target: "String",
    proto: true,
    forced:
      !(!l && !g && (n = f_1(String.prototype, "endsWith")) && !n.writable) &&
      !g,
  },
  {
    endsWith: function (t) {
      const r = u(f(this));
      c(t);
      const e = arguments.length > 1 ? arguments[1] : undefined;
      const r_length = r.length;
      const i = e === undefined ? r_length : Math.min(a(e), r_length);
      const o = u(t);
      if (v) {
        return v(r, o, i);
      }
      return p(r, i - o.length, i) === o;
    },
  },
);
