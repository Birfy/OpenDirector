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
const tu = te("".startsWith);
const tc = te("".slice);
const td = ts("startsWith");
tt(
  {
    target: "String",
    proto: true,
    forced:
      !(!tf && !td && ($ = f(String.prototype, "startsWith")) && !$.writable) &&
      !td,
  },
  {
    startsWith: function (J) {
      const Z = ti(ta(this));
      to(J);
      const Q = tn(
        Math.min(arguments.length > 1 ? arguments[1] : undefined, Z.length),
      );
      const $ = ti(J);
      if (tu) {
        return tu(Z, $, Q);
      }
      return tc(Z, Q, Q + $.length) === $;
    },
  },
);
