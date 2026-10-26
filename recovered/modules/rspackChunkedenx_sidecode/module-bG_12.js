import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-vo_12.js";
import tr from "./module-d_13.js";
import tn from "./module-y_2_12.js";
import ti from "./module-NK_2_2.js";
import to from "./module-tH_12.js";
import ta from "./module-V3_12.js";
import ts from "./module-Qd_13.js";
import forced from "./module-N_12.js";
const tu = to(function (J) {
  const Z = this;
  const Z_iterator = Z.iterator;
  const Z_predicate = Z.predicate;
  return new J(function (te, ti) {
    const to = function (J) {
      Z.done = true;
      ti(J);
    };
    const tf = function (J) {
      ts(Z_iterator, to, J, to);
    };
    const tu = () => {
      try {
        J.resolve(tr(tt(Z.next, Z_iterator))).then((Q) => {
          try {
            if (tr(Q).done) {
              Z.done = true;
              te(ta(undefined, true));
            } else {
              const tt = Q.value;
              try {
                const ti = Z_predicate(tt, Z.counter++);
                const ts = function (J) {
                  if (J) {
                    te(ta(tt, false));
                  } else {
                    tu();
                  }
                };
                if (tn(ti)) {
                  J.resolve(ti).then(ts, tf);
                } else {
                  ts(ti);
                }
              } catch (error) {
                tf(error);
              }
            }
          } catch (error) {
            to(error);
          }
        }, to);
      } catch (error) {
        to(error);
      }
    };
    tu();
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
    filter: function (predicate) {
      tr(this);
      te(predicate);
      return new tu(ti(this), {
        predicate,
      });
    },
  },
);
