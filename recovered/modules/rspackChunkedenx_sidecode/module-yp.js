import o from "./module-A.js";
import i from "./module-Yj.js";
import { f as f_1 } from "./module-R.js";
import s from "./module-dV.js";
import u from "./module-ng.js";
import c from "./module-l0.js";
import f from "./module-vj.js";
import h from "./module-Aj.js";
import l from "./module-N.js";
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
