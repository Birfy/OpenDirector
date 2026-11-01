import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-d_13.js";
import tr from "./module-NK_2_2.js";
import tn from "./module-lC_12.js";
import ti from "./module-c1_2_12.js";
import to from "./module-tH_12.js";
import ta from "./module-V3_12.js";
import forced from "./module-N_12.js";
const tf = to(function (J) {
  const Z = this;
  return new J(function (Q, $) {
    const tr = function (J) {
      Z.done = true;
      $(J);
    };
    const tn = () => {
      try {
        J.resolve(te(tt(Z.next, Z.iterator))).then((J) => {
          try {
            if (te(J).done) {
              Z.done = true;
              Q(ta(undefined, true));
            } else if (Z.remaining) {
              Z.remaining--;
              tn();
            } else {
              Q(ta(J.value, false));
            }
          } catch (error) {
            tr(error);
          }
        }, tr);
      } catch (error) {
        tr(error);
      }
    };
    tn();
  });
});
$(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
    forced,
  },
  {
    drop: function (J) {
      te(this);
      const remaining = ti(tn(+J));
      return new tf(tr(this), {
        remaining,
      });
    },
  },
);
