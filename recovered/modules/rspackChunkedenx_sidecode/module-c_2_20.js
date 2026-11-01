import n from "./module-A_21.js";
import o from "./module-r9_20.js";
import i from "./module-or_20.js";
import a from "./module-F_21.js";
import { f as f_1 } from "./module-R_20.js";
import c from "./module-er_20.js";
n(
  {
    target: "Object",
    stat: true,
    sham: !o,
  },
  {
    getOwnPropertyDescriptors: function (t) {
      let r;
      let e;
      const n = a(t);
      const o = f_1;
      for (var u = i(n), f = {}, l = 0; u.length > l;) {
        if ((e = o(n, (r = u[l++]))) !== undefined) {
          c(f, r, e);
        }
      }
      return f;
    },
  },
);
