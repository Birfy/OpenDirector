import n from "./module-A_20.js";
import o from "./module-M_2_19.js";
import i from "./module-vo_19.js";
import { f as f_1 } from "./module-Qa_20.js";
import s from "./module-FS_19.js";
import u from "./module-xK_19.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_19.js"),
  },
  {
    allSettled: function (r) {
      const t = this;
      const e = f_1(t);
      const e_resolve = e.resolve;
      const e_reject = e.reject;
      const f = s(function () {
        const e = i(t.resolve);
        const a = [];
        let s = 0;
        let c = 1;
        u(r, function (r) {
          const i = s++;
          let u = false;
          c++;
          o(e, t, r).then(
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
