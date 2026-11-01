import n from "./module-A_16.js";
import o from "./module-r9_15.js";
import i from "./module-or_15.js";
import a from "./module-F_16.js";
import { f as f_1 } from "./module-R_15.js";
import u from "./module-er_15.js";
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
