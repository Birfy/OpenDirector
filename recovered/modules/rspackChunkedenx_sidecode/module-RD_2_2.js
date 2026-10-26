import $ from "./module-A_13.js";
import tt from "./module-YR_12.js";
import te from "./module-yM_13.js";
import forced from "./module-dy_14.js";
const tn = tt("Array");
$(
  {
    target: "Observable",
    stat: true,
    forced,
  },
  {
    of: function () {
      const J = te(this) ? this : tt("Observable");
      for (var Z = arguments.length, Q = tn(Z), $ = 0; $ < Z;) {
        Q[$] = arguments[$++];
      }
      return new J(function (J) {
        for (let $ = 0; $ < Z; $++) {
          J.next(Q[$]);
          if (J.closed) {
            return;
          }
        }
        J.complete();
      });
    },
  },
);
