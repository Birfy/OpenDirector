import n from "./module-A_15.js";
import o from "./module-M_2_14.js";
import i from "./module-vo_14.js";
import { f } from "./module-Qa_15.js";
import s from "./module-FS_14.js";
import c from "./module-xK_14.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_14.js"),
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
