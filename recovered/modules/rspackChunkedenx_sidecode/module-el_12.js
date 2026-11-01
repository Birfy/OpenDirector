import $ from "./module-M_2_12.js";
import tt from "./module-vo_12.js";
import te from "./module-d_13.js";
import tr from "./module-y_2_12.js";
import tn from "./module-NK_2_2.js";
import ti from "./module-tH_12.js";
import to from "./module-V3_12.js";
import ta from "./module-Qd_13.js";
const ts = ti(function (J) {
  const Z = this;
  const Z_iterator = Z.iterator;
  const Z_mapper = Z.mapper;
  return new J(function (tn, ti) {
    const ts = function (J) {
      Z.done = true;
      ti(J);
    };
    const tf = function (J) {
      ta(Z_iterator, ts, J, ts);
    };
    J.resolve(te($(Z.next, Z_iterator))).then((Q) => {
      try {
        if (te(Q).done) {
          Z.done = true;
          tn(to(undefined, true));
        } else {
          const $ = Q.value;
          try {
            const ti = Z_mapper($, Z.counter++);
            const ta = function (J) {
              tn(to(J, false));
            };
            if (tr(ti)) {
              J.resolve(ti).then(ta, tf);
            } else {
              ta(ti);
            }
          } catch (error) {
            tf(error);
          }
        }
      } catch (error) {
        ts(error);
      }
    }, ts);
  });
});
export default function (mapper) {
  te(this);
  tt(mapper);
  return new ts(tn(this), {
    mapper,
  });
}
