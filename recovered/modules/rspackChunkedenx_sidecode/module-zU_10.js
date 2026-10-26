import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-vo_9.js";
import { f as f_1 } from "./module-Qa_10.js";
import s from "./module-FS_9.js";
import u from "./module-xK_9.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_9.js"),
  },
  {
    allSettled: function (t) {
      const e = this;
      const r = f_1(e);
      const r_resolve = r.resolve;
      const r_reject = r.reject;
      const f = s(function () {
        const r = i(e.resolve);
        const a = [];
        let s = 0;
        let c = 1;
        u(t, function (t) {
          const i = s++;
          let u = false;
          c++;
          o(r, e, t).then(
            (value) => {
              if (!u) {
                u = true;
                a[i] = {
                  status: "fulfilled",
                  value,
                };
                if (!--c) {
                  r_resolve(a);
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
                  r_resolve(a);
                }
              }
            },
          );
        });
        if (!--c) {
          r_resolve(a);
        }
      });
      if (f.error) {
        r_reject(f.value);
      }
      return r.promise;
    },
  },
);
