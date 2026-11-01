import n from "./module-A_15.js";
import o from "./module-M_2_14.js";
import i from "./module-d_15.js";
import a from "./module-y_2_14.js";
import s from "./module-kw_14.js";
import c from "./module-X_15.js";
import { f as f_1 } from "./module-t_15.js";
import { f } from "./module-R_14.js";
import l from "./module-H_2_14.js";
import h from "./module-w_15.js";
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
      let v;
      let p;
      const d = arguments.length < 4 ? r : arguments[3];
      let g = f(i(r), e);
      if (!g) {
        if (a((v = l(r)))) {
          return t(v, e, n, d);
        }
        g = h(0);
      }
      if (s(g)) {
        if (g.writable === false || !a(d)) {
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
        if ((p = g.set) === undefined) {
          return false;
        }
        o(p, d, n);
      }
      return true;
    },
  },
);
