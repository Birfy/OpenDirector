import n from "./module-g.js";
import o from "./module-p3.js";
import i from "./module-B.js";
import a from "./module-Y.js";
import { f as f_1 } from "./module-W1_2.js";
import u from "./module-wG.js";
import c from "./module-Fm_2_2.js";
import forced from "./module-tM_2.js";
const l = "No one promise resolved";
n(
  {
    target: "Promise",
    stat: true,
    forced,
  },
  {
    any: function (e) {
      const t = this;
      const r = a("AggregateError");
      const n = f_1(t);
      const n_resolve = n.resolve;
      const n_reject = n.reject;
      const h = u(function () {
        const n = i(t.resolve);
        const a = [];
        let s = 0;
        let u = 1;
        let h = false;
        c(e, function (e) {
          const i = s++;
          let c = false;
          u++;
          o(n, t, e).then(
            (e) => {
              if (!(c || h)) {
                h = true;
                n_resolve(e);
              }
            },
            (e) => {
              if (!c && !h) {
                c = true;
                a[i] = e;
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
      if (h.error) {
        n_reject(h.value);
      }
      return n.promise;
    },
  },
);
