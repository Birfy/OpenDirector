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
    endsWith: function (t) {
      const r = u(f(this));
      c(t);
      const e = arguments.length > 1 ? arguments[1] : undefined;
      const r_length = r.length;
      const o = e === undefined ? r_length : Math.min(s(e), r_length);
      const i = u(t);
      if (v) {
        return v(r, i, o);
      }
      return p(r, o - i.length, o) === i;
    },
  },
);
