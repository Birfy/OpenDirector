import n from "./module-A.js";
import o from "./module-M_2.js";
import i from "./module-vo.js";
import { f as f_1 } from "./module-Qa.js";
import s from "./module-FS.js";
import u from "./module-xK.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF.js"),
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
        let c = 1;
        u(t, function (t) {
          const i = s++;
          let u = false;
          c++;
          o(e, r, t).then(
            (value) => {
              if (!u) {
                u = true;
                a[i] = {
                  status: "fulfilled",
                  value,
                };
                if (!--c) {
                  e_resolve(a);
                }
              }
            },
            (reason) => {
              if (!u) {
                u = true;
                a[i] = {
                  status: "rejected",
                  reason,
                };
                if (!--c) {
                  e_resolve(a);
                }
              }
            },
          );
        });
        if (!--c) {
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
