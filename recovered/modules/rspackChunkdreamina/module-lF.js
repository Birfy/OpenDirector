import o from "./module-g.js";
import i from "./module-Kp.js";
import { f as f_1 } from "./module-y_2.js";
import s from "./module-L_2.js";
import u from "./module-BC_2.js";
import c from "./module-xt_2_2.js";
import f from "./module-H_2.js";
import l from "./module-RG_2_2.js";
import p from "./module-K.js";
let n;
const h = i("".startsWith);
const v = i("".slice);
const g = l("startsWith");
o(
  {
    target: "String",
    proto: true,
    forced:
      !(!p && !g && (n = f_1(String.prototype, "startsWith")) && !n.writable) &&
      !g,
  },
  {
    startsWith: function (e) {
      const t = u(f(this));
      c(e);
      const r = s(
        Math.min(arguments.length > 1 ? arguments[1] : undefined, t.length),
      );
      const n = u(e);
      if (h) {
        return h(t, n, r);
      }
      return v(t, r, r + n.length) === n;
    },
  },
);
