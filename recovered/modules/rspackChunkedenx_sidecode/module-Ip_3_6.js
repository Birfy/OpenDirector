import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-d_7.js";
import i from "./module-y_2_6.js";
import s from "./module-kw_6.js";
import c from "./module-X_7.js";
import { f as f_1 } from "./module-t_7.js";
import { f } from "./module-R_6.js";
import l from "./module-H_2_6.js";
import h from "./module-w_7.js";
n(
  {
    target: "Reflect",
    stat: true,
    forced: c(function () {
      const t = function () {};
      const r = f_1(new t(), "a", {
        configurable: true,
      });
      return Reflect.set(t.prototype, "a", 1, r) !== false;
    }),
  },
  {
    set: function t(r, e, n) {
      let c;
      let p;
      let v;
      const d = arguments.length < 4 ? r : arguments[3];
      let g = f(a(r), e);
      if (!g) {
        if (i((p = l(r)))) {
          return t(p, e, n, d);
        }
        g = h(0);
      }
      if (s(g)) {
        if (g.writable === false || !i(d)) {
          return false;
        }
        if ((c = f(d, e))) {
          if (c.get || c.set || c.writable === false) {
            return false;
          }
          c.value = n;
          f_1(d, e, c);
        } else {
          f_1(d, e, h(0, n));
        }
      } else {
        if ((v = g.set) === undefined) {
          return false;
        }
        o(v, d, n);
      }
      return true;
    },
  },
);
