import n from "./module-A_11.js";
import o from "./module-M_2_10.js";
import i from "./module-vo_10.js";
import a from "./module-YR_10.js";
import { f as f_1 } from "./module-Qa_11.js";
import u from "./module-FS_10.js";
import c from "./module-xK_10.js";
import forced from "./module-GF_10.js";
const l = "No one promise resolved";
n(
  {
    target: "Promise",
    stat: true,
    forced,
  },
  {
    any: function (t) {
      const r = this;
      const e = a("AggregateError");
      const n = f_1(r);
      const n_resolve = n.resolve;
      const n_reject = n.reject;
      const v = u(function () {
        const n = i(r.resolve);
        const a = [];
        let s = 0;
        let u = 1;
        let v = false;
        c(t, function (t) {
          const i = s++;
          let c = false;
          u++;
          o(n, r, t).then(
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
                  n_reject(new e(a, l));
                }
              }
            },
          );
        });
        if (!--u) {
          n_reject(new e(a, l));
        }
      });
      if (v.error) {
        n_reject(v.value);
      }
      return n.promise;
    },
  },
);
