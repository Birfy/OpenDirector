import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-d_10.js";
import a from "./module-y_2_9.js";
import s from "./module-kw_9.js";
import u from "./module-X_10.js";
import { f as f_1 } from "./module-t_10.js";
import { f } from "./module-R_9.js";
import l from "./module-H_2_9.js";
import h from "./module-w_10.js";
n(
  {
    target: "Reflect",
    stat: true,
    forced: u(function () {
      const t = function () {};
      const e = f_1(new t(), "a", {
        configurable: true,
      });
      return Reflect.set(t.prototype, "a", 1, e) !== false;
    }),
  },
  {
    set: function t(e, r, n) {
      let u;
      let v;
      let d;
      const p = arguments.length < 4 ? e : arguments[3];
      let g = f(i(e), r);
      if (!g) {
        if (a((v = l(e)))) {
          return t(v, r, n, p);
        }
        g = h(0);
      }
      if (s(g)) {
        if (g.writable === false || !a(p)) {
          return false;
        }
        if ((u = f(p, r))) {
          if (u.get || u.set || u.writable === false) {
            return false;
          }
          u.value = n;
          f_1(p, r, u);
        } else {
          f_1(p, r, h(0, n));
        }
      } else {
        if ((d = g.set) === undefined) {
          return false;
        }
        o(d, p, n);
      }
      return true;
    },
  },
);
