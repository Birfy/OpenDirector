import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-vo_6.js";
import i from "./module-YR_6.js";
import { f as f_1 } from "./module-Qa_7.js";
import c from "./module-FS_6.js";
import u from "./module-xK_6.js";
import forced from "./module-GF_6.js";
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
      const e = i("AggregateError");
      const n = f_1(r);
      const n_resolve = n.resolve;
      const n_reject = n.reject;
      const p = c(function () {
        const n = a(r.resolve);
        const i = [];
        let s = 0;
        let c = 1;
        let p = false;
        u(t, function (t) {
          const a = s++;
          let u = false;
          c++;
          o(n, r, t).then(
            (t) => {
              if (!(u || p)) {
                p = true;
                n_resolve(t);
              }
            },
            (t) => {
              if (!u && !p) {
                u = true;
                i[a] = t;
                if (!--c) {
                  n_reject(new e(i, l));
                }
              }
            },
          );
        });
        if (!--c) {
          n_reject(new e(i, l));
        }
      });
      if (p.error) {
        n_reject(p.value);
      }
      return n.promise;
    },
  },
);
