import n from "./module-A_9.js";
import i from "./module-M_2_8.js";
import o from "./module-d_9.js";
import s from "./module-y_2_8.js";
import a from "./module-kw_8.js";
import u from "./module-X_9.js";
import { f as f_1 } from "./module-t_9.js";
import { f } from "./module-R_8.js";
import h from "./module-H_2_8.js";
import l from "./module-w_9.js";
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
      let g = f(o(r), e);
      if (!g) {
        if (s((v = h(r)))) {
          return t(v, e, n, d);
        }
        g = l(0);
      }
      if (a(g)) {
        if (g.writable === false || !s(d)) {
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
        i(p, d, n);
      }
      return true;
    },
  },
);
