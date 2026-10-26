import n from "./module-A_8.js";
import o from "./module-M_2_7.js";
import i from "./module-vo_7.js";
import { f as f_1 } from "./module-Qa_8.js";
import s from "./module-FS_7.js";
import u from "./module-xK_7.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_7.js"),
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
