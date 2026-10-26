import n from "./module-A_16.js";
import o from "./module-M_2_15.js";
import i from "./module-vo_15.js";
import { f as f_1 } from "./module-Qa_16.js";
import s from "./module-FS_15.js";
import u from "./module-xK_15.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_15.js"),
  },
  {
    all: function (r) {
      const t = this;
      const e = f_1(t);
      const e_resolve = e.resolve;
      const e_reject = e.reject;
      const f = s(function () {
        const e = i(t.resolve);
        const a = [];
        let s = 0;
        let f = 1;
        u(r, function (r) {
          const i = s++;
          let u = false;
          f++;
          o(e, t, r).then((r) => {
            if (!u) {
              u = true;
              a[i] = r;
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
