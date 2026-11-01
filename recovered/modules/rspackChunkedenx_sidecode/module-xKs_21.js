import n from "./module-A_22.js";
import i from "./module-M_2_21.js";
import o from "./module-vo_21.js";
import { f } from "./module-Qa_22.js";
import a from "./module-FS_21.js";
import u from "./module-xK_21.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_21.js"),
  },
  {
    race: function (t) {
      const r = this;
      const e = f(r);
      const e_reject = e.reject;
      const c = a(function () {
        const s = o(r.resolve);
        u(t, function (t) {
          i(s, r, t).then(e.resolve, e_reject);
        });
      });
      if (c.error) {
        e_reject(c.value);
      }
      return e.promise;
    },
  },
);
