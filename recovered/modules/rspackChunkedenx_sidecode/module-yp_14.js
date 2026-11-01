import o from "./module-A_15.js";
import i from "./module-Yj_14.js";
import { f as f_1 } from "./module-R_14.js";
import s from "./module-dV_14.js";
import c from "./module-ng_15.js";
import u from "./module-l0_14.js";
import f from "./module-vj_15.js";
import l from "./module-Aj_15.js";
import h from "./module-N_14.js";
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
      const r = c(f(this));
      u(t);
      const e = arguments.length > 1 ? arguments[1] : undefined;
      const r_length = r.length;
      const o = e === undefined ? r_length : Math.min(s(e), r_length);
      const i = c(t);
      if (v) {
        return v(r, i, o);
      }
      return p(r, o - i.length, o) === i;
    },
  },
);
