import n from "./module-A_17.js";
import o from "./module-M_2_16.js";
import i from "./module-d_17.js";
import a from "./module-y_2_16.js";
import s from "./module-kw_16.js";
import u from "./module-X_17.js";
import { f as f_1 } from "./module-t_17.js";
import { f } from "./module-R_16.js";
import l from "./module-H_2_16.js";
import h from "./module-w_17.js";
n(
  {
    target: "Reflect",
    stat: true,
    forced: u(function () {
      const t = function () {};
      const r = f_1(new t(), "a", {
        configurable: true,
      });
      return Reflect.set(t.prototype, "a", 1, r) !== false;
    }),
  },
  {
    set: function t(r, e, n) {
      let u;
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
