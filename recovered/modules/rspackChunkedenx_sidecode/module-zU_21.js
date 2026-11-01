import n from "./module-A_21.js";
import o from "./module-M_2_20.js";
import i from "./module-vo_20.js";
import { f as f_1 } from "./module-Qa_21.js";
import s from "./module-FS_20.js";
import c from "./module-xK_20.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_20.js"),
  },
  {
    allSettled: function (t) {
      const r = this;
      const e = f_1(r);
      const e_resolve = e.resolve;
      const e_reject = e.reject;
      const f = s(function () {
        const e = i(r.resolve);
        const a = [];
        let s = 0;
        let u = 1;
        c(t, function (t) {
          const i = s++;
          let c = false;
          u++;
          o(e, r, t).then(
            (value) => {
              if (!c) {
                c = true;
                a[i] = {
                  status: "fulfilled",
                  value,
                };
                if (!--u) {
                  e_resolve(a);
                }
              }
            },
            (reason) => {
              if (!c) {
                c = true;
                a[i] = {
                  status: "rejected",
                  reason,
                };
                if (!--u) {
                  e_resolve(a);
                }
              }
            },
          );
        });
        if (!--u) {
          e_resolve(a);
        }
      });
      if (f.error) {
        e_reject(f.value);
      }
      return e.promise;
    },
  },
);
