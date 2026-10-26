import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-vo_12.js";
import tr from "./module-d_13.js";
import tn from "./module-y_2_12.js";
import ti from "./module-YR_12.js";
import to from "./module-NK_2_2.js";
import ta from "./module-Qd_13.js";
const ts = ti("Promise");
$(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    reduce: function (J) {
      tr(this);
      te(J);
      const Z = to(this);
      const Z_iterator = Z.iterator;
      const Z_next = Z.next;
      let ti = arguments.length < 2;
      let tu = ti ? undefined : arguments[1];
      let tc = 0;
      return new ts(function (Z, te) {
        const to = function (J) {
          ta(Z_iterator, te, J, te);
        };
        const th = () => {
          try {
            ts.resolve(tr(tt(Z_next, Z_iterator))).then((Q) => {
              try {
                if (tr(Q).done) {
                  if (ti) {
                    te(
                      TypeError(
                        "Reduce of empty iterator with no initial value",
                      ),
                    );
                  } else {
                    Z(tu);
                  }
                } else {
                  const $ = Q.value;
                  if (ti) {
                    ti = false;
                    tu = $;
                    th();
                  } else {
                    try {
                      const tt = J(tu, $, tc);
                      const ta = function (J) {
                        tu = J;
                        th();
                      };
                      if (tn(tt)) {
                        ts.resolve(tt).then(ta, to);
                      } else {
                        ta(tt);
                      }
                    } catch (error) {
                      to(error);
                    }
                  }
                }
                tc++;
              } catch (error) {
                te(error);
              }
            }, te);
          } catch (error) {
            te(error);
          }
        };
        th();
      });
    },
  },
);
