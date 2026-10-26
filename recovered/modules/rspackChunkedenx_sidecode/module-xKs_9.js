import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-vo_9.js";
import { f } from "./module-Qa_10.js";
import s from "./module-FS_9.js";
import u from "./module-xK_9.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_9.js"),
  },
  {
    race: function (t) {
      const e = this;
      const r = f(e);
      const r_reject = r.reject;
      const c = s(function () {
        const a = i(e.resolve);
        u(t, function (t) {
          o(a, e, t).then(r.resolve, r_reject);
        });
      });
      if (c.error) {
        r_reject(c.value);
      }
      return r.promise;
    },
  },
);
