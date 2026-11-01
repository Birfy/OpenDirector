import n from "./module-A_12.js";
import o from "./module-M_2_11.js";
import i from "./module-vo_11.js";
import { f } from "./module-Qa_12.js";
import s from "./module-FS_11.js";
import u from "./module-xK_11.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_11.js"),
  },
  {
    race: function (r) {
      const t = this;
      const e = f(t);
      const e_reject = e.reject;
      const c = s(function () {
        const a = i(t.resolve);
        u(r, function (r) {
          o(a, t, r).then(e.resolve, e_reject);
        });
      });
      if (c.error) {
        e_reject(c.value);
      }
      return e.promise;
    },
  },
);
