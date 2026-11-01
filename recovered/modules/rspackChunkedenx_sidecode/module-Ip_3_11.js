import n from "./module-A_12.js";
import o from "./module-M_2_11.js";
import i from "./module-d_12.js";
import a from "./module-y_2_11.js";
import s from "./module-kw_11.js";
import u from "./module-X_12.js";
import { f as f_1 } from "./module-t_12.js";
import { f } from "./module-R_11.js";
import h from "./module-H_2_11.js";
import l from "./module-w_12.js";
n(
  {
    target: "Reflect",
    stat: true,
    forced: u(function () {
      const r = function () {};
      const t = f_1(new r(), "a", {
        configurable: true,
      });
      return Reflect.set(r.prototype, "a", 1, t) !== false;
    }),
  },
  {
    set: function r(t, e, n) {
      let u;
      let v;
      let p;
      const d = arguments.length < 4 ? t : arguments[3];
      let g = f(i(t), e);
      if (!g) {
        if (a((v = h(t)))) {
          return r(v, e, n, d);
        }
        g = l(0);
      }
      if (s(g)) {
        if (g.writable === false || !a(d)) {
          return false;
        }
        if ((u = f(d, e))) {
          if (u.get || u.set || u.writable === false) {
            return false;
          }
          u.value = n;
          f_1(d, e, u);
        } else {
          f_1(d, e, l(0, n));
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
