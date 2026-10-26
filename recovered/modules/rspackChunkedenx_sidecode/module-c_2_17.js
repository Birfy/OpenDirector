import n from "./module-A_18.js";
import o from "./module-r9_17.js";
import i from "./module-or_17.js";
import a from "./module-F_18.js";
import { f as f_1 } from "./module-R_17.js";
import u from "./module-er_17.js";
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
