import n from "./module-g.js";
import o from "./module-p3.js";
import i from "./module-B.js";
import { f as f_1 } from "./module-W1_2.js";
import s from "./module-wG.js";
import u from "./module-Fm_2_2.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-tM_2.js"),
  },
  {
    all: function (e) {
      const t = this;
      const r = f_1(t);
      const r_resolve = r.resolve;
      const r_reject = r.reject;
      const f = s(function () {
        const r = i(t.resolve);
        const a = [];
        let s = 0;
        let f = 1;
        u(e, function (e) {
          const i = s++;
          let u = false;
          f++;
          o(r, t, e).then((e) => {
            if (!u) {
              u = true;
              a[i] = e;
              if (!--f) {
                r_resolve(a);
              }
            }
          }, r_reject);
        });
        if (!--f) {
          r_resolve(a);
        }
      });
      if (f.error) {
        r_reject(f.value);
      }
      return r.promise;
    },
  },
);
