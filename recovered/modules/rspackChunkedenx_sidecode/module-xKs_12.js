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
    race: function (J) {
      const Z = this;
      const Q = f(Z);
      const Q_reject = Q.reject;
      const to = tn(function () {
        const tr = te(Z.resolve);
        ti(J, function (J) {
          tt(tr, Z, J).then(Q.resolve, Q_reject);
        });
      });
      if (to.error) {
        Q_reject(to.value);
      }
      return Q.promise;
    },
  },
);
