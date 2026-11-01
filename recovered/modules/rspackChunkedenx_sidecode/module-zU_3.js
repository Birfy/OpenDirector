import n from "./module-A_3.js";
import i from "./module-M_2_2.js";
import o from "./module-vo_2.js";
import { f as f_1 } from "./module-Qa_3.js";
import a from "./module-FS_2.js";
import u from "./module-xK_2.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_2.js"),
  },
  {
    allSettled: function (t) {
      const r = this;
      const e = f_1(r);
      const e_resolve = e.resolve;
      const e_reject = e.reject;
      const f = a(function () {
        const e = o(r.resolve);
        const s = [];
        let a = 0;
        let c = 1;
        u(t, function (t) {
          const o = a++;
          let u = false;
          c++;
          i(e, r, t).then(
            (value) => {
              if (!u) {
                u = true;
                s[o] = {
                  status: "fulfilled",
                  value,
                };
                if (!--c) {
                  e_resolve(s);
                }
              }
            },
            (reason) => {
              if (!u) {
                u = true;
                s[o] = {
                  status: "rejected",
                  reason,
                };
                if (!--c) {
                  e_resolve(s);
                }
              }
            },
          );
        });
        if (!--c) {
          e_resolve(s);
        }
      });
      if (f.error) {
        e_reject(f.value);
      }
      return e.promise;
    },
  },
);
