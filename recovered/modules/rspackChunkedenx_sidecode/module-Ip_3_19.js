import n from "./module-A_20.js";
import o from "./module-M_2_19.js";
import i from "./module-d_20.js";
import a from "./module-y_2_19.js";
import s from "./module-kw_19.js";
import u from "./module-X_20.js";
import { f as f_1 } from "./module-t_20.js";
import { f } from "./module-R_19.js";
import l from "./module-H_2_19.js";
import h from "./module-w_20.js";
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
        if (a((v = l(t)))) {
          return r(v, e, n, d);
        }
        g = h(0);
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
