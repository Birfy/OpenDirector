import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-vo_9.js";
import a from "./module-YR_9.js";
import { f as f_1 } from "./module-Qa_10.js";
import u from "./module-FS_9.js";
import c from "./module-xK_9.js";
import forced from "./module-GF_9.js";
const l = "No one promise resolved";
n(
  {
    target: "Promise",
    stat: true,
    forced,
  },
  {
    any: function (t) {
      const e = this;
      const r = a("AggregateError");
      const n = f_1(e);
      const n_resolve = n.resolve;
      const n_reject = n.reject;
      const v = u(function () {
        const n = i(e.resolve);
        const a = [];
        let s = 0;
        let u = 1;
        let v = false;
        c(t, function (t) {
          const i = s++;
          let c = false;
          u++;
          o(n, e, t).then(
            (t) => {
              if (!(c || v)) {
                v = true;
                n_resolve(t);
              }
            },
            (t) => {
              if (!c && !v) {
                c = true;
                a[i] = t;
                if (!--u) {
                  n_reject(new r(a, l));
                }
              }
            },
          );
        });
        if (!--u) {
          n_reject(new r(a, l));
        }
      });
      if (v.error) {
        n_reject(v.value);
      }
      return n.promise;
    },
  },
);
