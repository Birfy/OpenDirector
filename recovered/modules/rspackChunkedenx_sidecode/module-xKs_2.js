import n from "./module-A_3.js";
import i from "./module-M_2_2.js";
import o from "./module-vo_2.js";
import { f } from "./module-Qa_3.js";
import a from "./module-FS_2.js";
import u from "./module-xK_2.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_2.js"),
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
