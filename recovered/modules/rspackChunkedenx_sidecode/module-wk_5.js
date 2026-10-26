import n from "./module-A_6.js";
import i from "./module-M_2_5.js";
import o from "./module-vo_5.js";
import { f as f_1 } from "./module-Qa_6.js";
import a from "./module-FS_5.js";
import u from "./module-xK_5.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_5.js"),
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
