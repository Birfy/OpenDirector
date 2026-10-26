import o from "./module-A_19.js";
import i from "./module-Yj_18.js";
import { f as f_1 } from "./module-R_18.js";
import s from "./module-dV_18.js";
import u from "./module-ng_19.js";
import c from "./module-l0_18.js";
import f from "./module-vj_19.js";
import h from "./module-Aj_19.js";
import l from "./module-N_18.js";
let n;
const v = i("".endsWith);
const p = i("".slice);
const g = h("endsWith");
o(
  {
    target: "String",
    proto: true,
    forced:
      !(!l && !g && (n = f_1(String.prototype, "endsWith")) && !n.writable) &&
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
