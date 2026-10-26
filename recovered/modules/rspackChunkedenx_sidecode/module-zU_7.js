import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-vo_6.js";
import { f as f_1 } from "./module-Qa_7.js";
import s from "./module-FS_6.js";
import c from "./module-xK_6.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_6.js"),
  },
  {
    allSettled: function (t) {
      const r = this;
      const e = f_1(r);
      const e_resolve = e.resolve;
      const e_reject = e.reject;
      const f = s(function () {
        const e = a(r.resolve);
        const i = [];
        let s = 0;
        let u = 1;
        c(t, function (t) {
          const a = s++;
          let c = false;
          u++;
          o(e, r, t).then(
            (value) => {
              if (!c) {
                c = true;
                i[a] = {
                  status: "fulfilled",
                  value,
                };
                if (!--u) {
                  e_resolve(i);
                }
              }
            },
            (reason) => {
              if (!c) {
                c = true;
                i[a] = {
                  status: "rejected",
                  reason,
                };
                if (!--u) {
                  e_resolve(i);
                }
              }
            },
          );
        });
        if (!--u) {
          e_resolve(i);
        }
      });
      if (f.error) {
        e_reject(f.value);
      }
      return e.promise;
    },
  },
);
