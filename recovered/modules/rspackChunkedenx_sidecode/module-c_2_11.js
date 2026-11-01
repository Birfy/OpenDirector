import n from "./module-A_12.js";
import o from "./module-r9_11.js";
import i from "./module-or_11.js";
import a from "./module-F_12.js";
import { f as f_1 } from "./module-R_11.js";
import u from "./module-er_11.js";
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
      for (var c = i(n), f = {}, h = 0; c.length > h;) {
        if ((e = o(n, (t = c[h++]))) !== undefined) {
          u(f, t, e);
        }
      }
      return f;
    },
  },
);
