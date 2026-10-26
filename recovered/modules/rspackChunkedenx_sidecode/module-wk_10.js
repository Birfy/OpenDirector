import n from "./module-A_11.js";
import o from "./module-M_2_10.js";
import i from "./module-vo_10.js";
import { f as f_1 } from "./module-Qa_11.js";
import s from "./module-FS_10.js";
import u from "./module-xK_10.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_10.js"),
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
        u(t, function (t) {
          const i = s++;
          let u = false;
          f++;
          o(e, r, t).then((t) => {
            if (!u) {
              u = true;
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
