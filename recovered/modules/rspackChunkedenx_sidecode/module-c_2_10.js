import n from "./module-A_11.js";
import o from "./module-r9_10.js";
import i from "./module-or_10.js";
import a from "./module-F_11.js";
import { f as f_1 } from "./module-R_10.js";
import u from "./module-er_10.js";
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
      for (var c = i(n), f = {}, l = 0; c.length > l;) {
        if ((e = o(n, (r = c[l++]))) !== undefined) {
          u(f, r, e);
        }
      }
      return f;
    },
  },
);
