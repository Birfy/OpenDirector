import $ from "./module-A_13.js";
import tt from "./module-YR_12.js";
import te from "./module-M_2_12.js";
import tr from "./module-d_13.js";
import tn from "./module-yM_13.js";
import ti from "./module-wz_13.js";
import to from "./module-C_13.js";
import ta from "./module-xK_12.js";
import ts from "./module-lN_12.js";
import forced from "./module-dy_14.js";
const tu = ts("observable");
$(
  {
    target: "Observable",
    stat: true,
    forced,
  },
  {
    from: function (J) {
      const Z = tn(this) ? this : tt("Observable");
      const Q = to(tr(J), tu);
      if (Q) {
        const $ = tr(te(Q, J));
        if ($.constructor === Z) {
          return $;
        }
        return new Z(function (J) {
          return $.subscribe(J);
        });
      }
      const ts = ti(J);
      return new Z(function (J) {
        ta(
          ts,
          function (Z, Q) {
            J.next(Z);
            if (J.closed) {
              return Q();
            }
          },
          {
            IS_ITERATOR: true,
            INTERRUPTED: true,
          },
        );
        J.complete();
      });
    },
  },
);
