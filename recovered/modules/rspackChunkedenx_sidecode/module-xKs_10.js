import n from "./module-A_11.js";
import o from "./module-M_2_10.js";
import i from "./module-vo_10.js";
import { f } from "./module-Qa_11.js";
import s from "./module-FS_10.js";
import u from "./module-xK_10.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_10.js"),
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
