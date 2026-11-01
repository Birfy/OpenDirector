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
const h = i("".endsWith);
const v = i("".slice);
const g = l("endsWith");
o(
  {
    target: "String",
    proto: true,
    forced:
      !(!p && !g && (n = f_1(String.prototype, "endsWith")) && !n.writable) &&
      !g,
  },
  {
    endsWith: function (e) {
      const t = u(f(this));
      c(e);
      const r = arguments.length > 1 ? arguments[1] : undefined;
      const t_length = t.length;
      const o = r === undefined ? t_length : Math.min(s(r), t_length);
      const i = u(e);
      if (h) {
        return h(t, i, o);
      }
      return v(t, o - i.length, o) === i;
    },
  },
);
