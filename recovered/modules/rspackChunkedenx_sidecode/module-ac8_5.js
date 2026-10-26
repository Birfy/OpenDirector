import n from "./module-A_6.js";
import i from "./module-M_2_5.js";
import o from "./module-vo_5.js";
import s from "./module-YR_5.js";
import { f as f_1 } from "./module-Qa_6.js";
import u from "./module-FS_5.js";
import c from "./module-xK_5.js";
import forced from "./module-GF_5.js";
const h = "No one promise resolved";
n(
  {
    target: "Promise",
    stat: true,
    forced,
  },
  {
    any: function (t) {
      const r = this;
      const e = s("AggregateError");
      const n = f_1(r);
      const n_resolve = n.resolve;
      const n_reject = n.reject;
      const v = u(function () {
        const n = o(r.resolve);
        const s = [];
        let a = 0;
        let u = 1;
        let v = false;
        c(t, function (t) {
          const o = a++;
          let c = false;
          u++;
          i(n, r, t).then(
            (t) => {
              if (!(c || v)) {
                v = true;
                n_resolve(t);
              }
            },
            (t) => {
              if (!c && !v) {
                c = true;
                s[o] = t;
                if (!--u) {
                  n_reject(new e(s, h));
                }
              }
            },
          );
        });
        if (!--u) {
          n_reject(new e(s, h));
        }
      });
      if (v.error) {
        n_reject(v.value);
      }
      return n.promise;
    },
  },
);
