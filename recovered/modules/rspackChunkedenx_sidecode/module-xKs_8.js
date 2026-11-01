import n from "./module-A_9.js";
import i from "./module-M_2_8.js";
import o from "./module-vo_8.js";
import { f } from "./module-Qa_9.js";
import a from "./module-FS_8.js";
import u from "./module-xK_8.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-GF_8.js"),
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
