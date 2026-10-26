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
