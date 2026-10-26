import n from "./module-A_8.js";
import o from "./module-r9_7.js";
import i from "./module-or_7.js";
import a from "./module-F_8.js";
import { f as f_1 } from "./module-R_7.js";
import u from "./module-er_7.js";
n(
  {
    target: "Object",
    stat: true,
    sham: !o,
  },
  {
    getOwnPropertyDescriptors: function (r) {
      let t;
      let e;
      const n = a(r);
      const o = f_1;
      for (var c = i(n), f = {}, l = 0; c.length > l;) {
        if ((e = o(n, (t = c[l++]))) !== undefined) {
          u(f, t, e);
        }
      }
      return f;
    },
  },
);
