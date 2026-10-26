import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-vo_12.js";
import { f } from "./module-Qa_13.js";
import tn from "./module-FS_2_2.js";
import ti from "./module-xK_12.js";
$(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_12.js"),
  },
  {
    all: function (J) {
      const Z = this;
      const Q = f(Z);
      const Q_resolve = Q.resolve;
      const Q_reject = Q.reject;
      const ta = tn(function () {
        const Q = te(Z.resolve);
        const tr = [];
        let tn = 0;
        let ta = 1;
        ti(J, function (J) {
          const te = tn++;
          let ti = false;
          ta++;
          tt(Q, Z, J).then((J) => {
            if (!ti) {
              ti = true;
              tr[te] = J;
              if (!--ta) {
                Q_resolve(tr);
              }
            }
          }, Q_reject);
        });
        if (!--ta) {
          Q_resolve(tr);
        }
      });
      if (ta.error) {
        Q_reject(ta.value);
      }
      return Q.promise;
    },
  },
);
