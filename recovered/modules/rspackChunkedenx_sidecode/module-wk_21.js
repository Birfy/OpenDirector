import n from "./module-A_22.js";
import i from "./module-M_2_21.js";
import o from "./module-vo_21.js";
import { f as f_1 } from "./module-Qa_22.js";
import a from "./module-FS_21.js";
import u from "./module-xK_21.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_21.js"),
  },
  {
    all: function (t) {
      const r = this;
      const e = f_1(r);
      const e_resolve = e.resolve;
      const e_reject = e.reject;
      const f = a(function () {
        const e = o(r.resolve);
        const s = [];
        let a = 0;
        let f = 1;
        u(t, function (t) {
          const o = a++;
          let u = false;
          f++;
          i(e, r, t).then((t) => {
            if (!u) {
              u = true;
              s[o] = t;
              if (!--f) {
                e_resolve(s);
              }
            }
          }, e_reject);
        });
        if (!--f) {
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
