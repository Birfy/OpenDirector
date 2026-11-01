import n from "./module-A_6.js";
import i from "./module-M_2_5.js";
import o from "./module-vo_5.js";
import { f } from "./module-Qa_6.js";
import a from "./module-FS_5.js";
import u from "./module-xK_5.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_5.js"),
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
