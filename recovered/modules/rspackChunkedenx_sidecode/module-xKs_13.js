import n from "./module-A_14.js";
import o from "./module-M_2_13.js";
import i from "./module-vo_13.js";
import { f } from "./module-Qa_14.js";
import s from "./module-FS_13.js";
import u from "./module-xK_13.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_13.js"),
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
