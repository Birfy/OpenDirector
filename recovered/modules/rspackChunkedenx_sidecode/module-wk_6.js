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
    all: function (t) {
      const r = this;
      const e = f_1(r);
      const e_resolve = e.resolve;
      const e_reject = e.reject;
      const f = s(function () {
        const e = a(r.resolve);
        const i = [];
        let s = 0;
        let f = 1;
        c(t, function (t) {
          const a = s++;
          let c = false;
          f++;
          o(e, r, t).then((t) => {
            if (!c) {
              c = true;
              i[a] = t;
              if (!--f) {
                e_resolve(i);
              }
            }
          }, e_reject);
        });
        if (!--f) {
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
