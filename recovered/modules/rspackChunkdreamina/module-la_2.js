import n from "./module-g.js";
import o from "./module-p3.js";
import i from "./module-B.js";
import { f } from "./module-W1_2.js";
import s from "./module-wG.js";
import u from "./module-Fm_2_2.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-tM_2.js"),
  },
  {
    race: function (e) {
      const t = this;
      const r = f(t);
      const r_reject = r.reject;
      const c = s(function () {
        const a = i(t.resolve);
        u(e, function (e) {
          o(a, t, e).then(r.resolve, r_reject);
        });
      });
      if (c.error) {
        r_reject(c.value);
      }
      return r.promise;
    },
  },
);
