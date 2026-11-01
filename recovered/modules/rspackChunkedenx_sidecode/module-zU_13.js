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
    allSettled: function (J) {
      const Z = this;
      const Q = f(Z);
      const Q_resolve = Q.resolve;
      const Q_reject = Q.reject;
      const ta = tn(function () {
        const Q = te(Z.resolve);
        const tr = [];
        let tn = 0;
        let to = 1;
        ti(J, function (J) {
          const te = tn++;
          let ti = false;
          to++;
          tt(Q, Z, J).then(
            (value) => {
              if (!ti) {
                ti = true;
                tr[te] = {
                  status: "fulfilled",
                  value,
                };
                if (!--to) {
                  Q_resolve(tr);
                }
              }
            },
            (reason) => {
              if (!ti) {
                ti = true;
                tr[te] = {
                  status: "rejected",
                  reason,
                };
                if (!--to) {
                  Q_resolve(tr);
                }
              }
            },
          );
        });
        if (!--to) {
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
