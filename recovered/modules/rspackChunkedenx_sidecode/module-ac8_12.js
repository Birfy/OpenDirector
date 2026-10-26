import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-vo_12.js";
import tr from "./module-YR_12.js";
import { f } from "./module-Qa_13.js";
import ti from "./module-FS_2_2.js";
import to from "./module-xK_12.js";
import forced from "./module-GF_12.js";
const ts = "No one promise resolved";
$(
  {
    target: "Promise",
    stat: true,
    forced,
  },
  {
    any: function (J) {
      const Z = this;
      const Q = tr("AggregateError");
      const $ = f(Z);
      const $_resolve = $.resolve;
      const $_reject = $.reject;
      const tu = ti(function () {
        const $ = te(Z.resolve);
        const tr = [];
        let tn = 0;
        let ti = 1;
        let tu = false;
        to(J, function (J) {
          const te = tn++;
          let to = false;
          ti++;
          tt($, Z, J).then(
            (J) => {
              if (!(to || tu)) {
                tu = true;
                $_resolve(J);
              }
            },
            (J) => {
              if (!to && !tu) {
                to = true;
                tr[te] = J;
                if (!--ti) {
                  $_reject(new Q(tr, ts));
                }
              }
            },
          );
        });
        if (!--ti) {
          $_reject(new Q(tr, ts));
        }
      });
      if (tu.error) {
        $_reject(tu.value);
      }
      return $.promise;
    },
  },
);
