import n from "./module-A_20.js";
import o from "./module-M_2_19.js";
import i from "./module-vo_19.js";
import a from "./module-YR_19.js";
import { f as f_1 } from "./module-Qa_20.js";
import u from "./module-FS_19.js";
import c from "./module-xK_19.js";
import forced from "./module-GF_19.js";
const l = "No one promise resolved";
n(
  {
    target: "Promise",
    stat: true,
    forced,
  },
  {
    any: function (r) {
      const t = this;
      const e = a("AggregateError");
      const n = f_1(t);
      const n_resolve = n.resolve;
      const n_reject = n.reject;
      const v = u(function () {
        const n = i(t.resolve);
        const a = [];
        let s = 0;
        let u = 1;
        let v = false;
        c(r, function (r) {
          const i = s++;
          let c = false;
          u++;
          o(n, t, r).then(
            (r) => {
              if (!(c || v)) {
                v = true;
                n_resolve(r);
              }
            },
            (r) => {
              if (!c && !v) {
                c = true;
                a[i] = r;
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
