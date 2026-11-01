import n from "./module-A_5.js";
import i from "./module-M_2_4.js";
import o from "./module-vo_4.js";
import { f } from "./module-Qa_5.js";
import a from "./module-FS_4.js";
import u from "./module-xK_4.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_4.js"),
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
