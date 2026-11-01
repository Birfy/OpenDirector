import n from "./module-A_7.js";
import o from "./module-r9_6.js";
import a from "./module-or_6.js";
import i from "./module-F_7.js";
import { f as f_1 } from "./module-R_6.js";
import c from "./module-er_6.js";
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
      const n = i(t);
      const o = f_1;
      for (var u = a(n), f = {}, l = 0; u.length > l;) {
        if ((e = o(n, (r = u[l++]))) !== undefined) {
          c(f, r, e);
        }
      }
      return f;
    },
  },
);
