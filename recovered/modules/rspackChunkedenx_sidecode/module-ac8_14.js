import n from "./module-A_15.js";
import o from "./module-M_2_14.js";
import i from "./module-vo_14.js";
import a from "./module-YR_14.js";
import { f as f_1 } from "./module-Qa_15.js";
import c from "./module-FS_14.js";
import u from "./module-xK_14.js";
import forced from "./module-GF_14.js";
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
      const v = c(function () {
        const n = i(r.resolve);
        const a = [];
        let s = 0;
        let c = 1;
        let v = false;
        u(t, function (t) {
          const i = s++;
          let u = false;
          c++;
          o(n, r, t).then(
            (t) => {
              if (!(u || v)) {
                v = true;
                n_resolve(t);
              }
            },
            (t) => {
              if (!u && !v) {
                u = true;
                a[i] = t;
                if (!--c) {
                  n_reject(new e(a, l));
                }
              }
            },
          );
        });
        if (!--c) {
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
