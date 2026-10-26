import n from "./module-A.js";
import o from "./module-M_2.js";
import i from "./module-vo.js";
import { f } from "./module-Qa.js";
import s from "./module-FS.js";
import u from "./module-xK.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF.js"),
  },
  {
    race: function (t) {
      const r = this;
      const e = f(r);
      const e_reject = e.reject;
      const c = s(function () {
        const a = i(r.resolve);
        u(t, function (t) {
          o(a, r, t).then(e.resolve, e_reject);
        });
      });
      if (c.error) {
        e_reject(c.value);
      }
      return e.promise;
    },
  },
);
