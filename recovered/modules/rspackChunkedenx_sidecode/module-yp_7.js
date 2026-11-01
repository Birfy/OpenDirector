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
const v = i("".endsWith);
const p = i("".slice);
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
    endsWith: function (r) {
      const t = u(f(this));
      c(r);
      const e = arguments.length > 1 ? arguments[1] : undefined;
      const t_length = t.length;
      const o = e === undefined ? t_length : Math.min(s(e), t_length);
      const i = u(r);
      if (v) {
        return v(t, i, o);
      }
      return p(t, o - i.length, o) === i;
    },
  },
);
