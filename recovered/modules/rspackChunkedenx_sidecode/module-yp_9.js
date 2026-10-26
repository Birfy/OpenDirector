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
const v = i("".endsWith);
const d = i("".slice);
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
      const e = u(f(this));
      c(t);
      const r = arguments.length > 1 ? arguments[1] : undefined;
      const e_length = e.length;
      const o = r === undefined ? e_length : Math.min(s(r), e_length);
      const i = u(t);
      if (v) {
        return v(e, i, o);
      }
      return d(e, o - i.length, o) === i;
    },
  },
);
