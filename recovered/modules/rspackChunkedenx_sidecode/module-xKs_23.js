import n from "./module-A_24.js";
import o from "./module-M_2_23.js";
import i from "./module-vo_23.js";
import { f } from "./module-Qa_24.js";
import s from "./module-FS_23.js";
import c from "./module-xK_23.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_23.js"),
  },
  {
    race: function (t) {
      const r = this;
      const e = f(r);
      const e_reject = e.reject;
      const u = s(function () {
        const a = i(r.resolve);
        c(t, function (t) {
          o(a, r, t).then(e.resolve, e_reject);
        });
      });
      if (u.error) {
        e_reject(u.value);
      }
      return e.promise;
    },
  },
);
