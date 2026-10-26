import tt from "./module-A_13.js";
import te from "./module-Yj_12.js";
import { f } from "./module-R_12.js";
import tn from "./module-dV_12.js";
import ti from "./module-ng_13.js";
import to from "./module-l0_2_2.js";
import ta from "./module-vj_13.js";
import ts from "./module-Aj_13.js";
import tf from "./module-N_12.js";
let $;
const tu = te("".endsWith);
const tc = te("".slice);
const td = ts("endsWith");
tt(
  {
    target: "String",
    proto: true,
    forced:
      !(!tf && !td && ($ = f(String.prototype, "endsWith")) && !$.writable) &&
      !td,
  },
  {
    endsWith: function (J) {
      const Z = ti(ta(this));
      to(J);
      const Q = arguments.length > 1 ? arguments[1] : undefined;
      const Z_length = Z.length;
      const tt = Q === undefined ? Z_length : Math.min(tn(Q), Z_length);
      const te = ti(J);
      if (tu) {
        return tu(Z, te, tt);
      }
      return tc(Z, tt - te.length, tt) === te;
    },
  },
);
