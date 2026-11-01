import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-vo_6.js";
import { f } from "./module-Qa_7.js";
import s from "./module-FS_6.js";
import c from "./module-xK_6.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_6.js"),
  },
  {
    race: function (t) {
      const r = this;
      const e = f(r);
      const e_reject = e.reject;
      const u = s(function () {
        const i = a(r.resolve);
        c(t, function (t) {
          o(i, r, t).then(e.resolve, e_reject);
        });
      });
      if (u.error) {
        e_reject(u.value);
      }
      return e.promise;
    },
  },
);
