import n from "./module-g.js";
import o from "./module-p3.js";
import i from "./module-IF_2.js";
import a from "./module-N.js";
import s from "./module-cW_2_2.js";
import u from "./module-VV_4.js";
import { f as f_1 } from "./module-R_2.js";
import { f } from "./module-y_2.js";
import l from "./module-jA_2.js";
import p from "./module-M.js";
n(
  {
    target: "Reflect",
    stat: true,
    forced: u(function () {
      const e = function () {};
      const t = f_1(new e(), "a", {
        configurable: true,
      });
      return Reflect.set(e.prototype, "a", 1, t) !== false;
    }),
  },
  {
    set: function e(t, r, n) {
      let u;
      let h;
      let v;
      const d = arguments.length < 4 ? t : arguments[3];
      let g = f(i(t), r);
      if (!g) {
        if (a((h = l(t)))) {
          return e(h, r, n, d);
        }
        g = p(0);
      }
      if (s(g)) {
        if (g.writable === false || !a(d)) {
          return false;
        }
        if ((u = f(d, r))) {
          if (u.get || u.set || u.writable === false) {
            return false;
          }
          u.value = n;
          f_1(d, r, u);
        } else {
          f_1(d, r, p(0, n));
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
