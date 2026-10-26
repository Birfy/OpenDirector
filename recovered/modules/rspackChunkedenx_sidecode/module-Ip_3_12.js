import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-d_13.js";
import tr from "./module-y_2_12.js";
import tn from "./module-kw_12.js";
import ti from "./module-X_13.js";
import { f } from "./module-t_13.js";
import { f as f_1 } from "./module-R_12.js";
import ts from "./module-H_2_12.js";
import tf from "./module-w_13.js";
$(
  {
    target: "Reflect",
    stat: true,
    forced: ti(function () {
      const J = function () {};
      const Z = f(new J(), "a", {
        configurable: true,
      });
      return Reflect.set(J.prototype, "a", 1, Z) !== false;
    }),
  },
  {
    set: function J(Z, Q, $) {
      let ti;
      let tu;
      let tc;
      const th = arguments.length < 4 ? Z : arguments[3];
      let td = f_1(te(Z), Q);
      if (!td) {
        if (tr((tu = ts(Z)))) {
          return J(tu, Q, $, th);
        }
        td = tf(0);
      }
      if (tn(td)) {
        if (td.writable === false || !tr(th)) {
          return false;
        }
        if ((ti = f_1(th, Q))) {
          if (ti.get || ti.set || ti.writable === false) {
            return false;
          }
          ti.value = $;
          f(th, Q, ti);
        } else {
          f(th, Q, tf(0, $));
        }
      } else {
        if ((tc = td.set) === undefined) {
          return false;
        }
        tt(tc, th, $);
      }
      return true;
    },
  },
);
