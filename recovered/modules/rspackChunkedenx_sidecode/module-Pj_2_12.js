import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-vo_12.js";
import tr from "./module-d_13.js";
import tn from "./module-y_2_12.js";
import ti from "./module-NK_2_2.js";
import to from "./module-tH_12.js";
import ta from "./module-V3_12.js";
import ts from "./module-w7_12.js";
import tf from "./module-Qd_13.js";
import forced from "./module-N_12.js";
const tc = to(function (J) {
  const Z = this;
  const Z_iterator = Z.iterator;
  const Z_mapper = Z.mapper;
  return new J(function (te, ti) {
    const to = function (J) {
      Z.done = true;
      ti(J);
    };
    const tu = function (J) {
      tf(Z_iterator, to, J, to);
    };
    const tc = () => {
      try {
        J.resolve(tr(tt(Z.next, Z_iterator))).then((Q) => {
          try {
            if (tr(Q).done) {
              Z.done = true;
              te(ta(undefined, true));
            } else {
              const tt = Q.value;
              try {
                const ti = Z_mapper(tt, Z.counter++);
                const tf = function (J) {
                  try {
                    Z.inner = ts(J);
                    th();
                  } catch (error) {
                    tu(error);
                  }
                };
                if (tn(ti)) {
                  J.resolve(ti).then(tf, tu);
                } else {
                  tf(ti);
                }
              } catch (error) {
                tu(error);
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
    var th = () => {
      const Z_inner = Z.inner;
      if (Z_inner) {
        try {
          J.resolve(tr(tt(Z_inner.next, Z_inner.iterator))).then((J) => {
            try {
              if (tr(J).done) {
                Z.inner = null;
                tc();
              } else {
                te(ta(J.value, false));
              }
            } catch (error) {
              tu(error);
            }
          }, tu);
        } catch (error) {
          tu(error);
        }
      } else {
        tc();
      }
    };
    th();
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
    flatMap: function (mapper) {
      tr(this);
      te(mapper);
      return new tc(ti(this), {
        mapper,
        inner: null,
      });
    },
  },
);
