import n from "./module-A_17.js";
import o from "./module-M_2_16.js";
import i from "./module-vo_16.js";
import { f } from "./module-Qa_17.js";
import s from "./module-FS_16.js";
import u from "./module-xK_16.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_16.js"),
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
