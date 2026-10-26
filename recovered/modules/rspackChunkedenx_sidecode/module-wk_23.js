import n from "./module-A_24.js";
import o from "./module-M_2_23.js";
import i from "./module-vo_23.js";
import { f as f_1 } from "./module-Qa_24.js";
import s from "./module-FS_23.js";
import c from "./module-xK_23.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_23.js"),
  },
  {
    all: function (t) {
      const r = this;
      const e = f_1(r);
      const e_resolve = e.resolve;
      const e_reject = e.reject;
      const f = s(function () {
        const e = i(r.resolve);
        const a = [];
        let s = 0;
        let f = 1;
        c(t, function (t) {
          const i = s++;
          let c = false;
          f++;
          o(e, r, t).then((t) => {
            if (!c) {
              c = true;
              a[i] = t;
              if (!--f) {
                e_resolve(a);
              }
            }
          }, e_reject);
        });
        if (!--f) {
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
