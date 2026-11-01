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
    startsWith: function (t) {
      const r = u(f(this));
      c(t);
      const e = s(
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
