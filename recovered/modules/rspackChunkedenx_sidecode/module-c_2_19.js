import n from "./module-A_20.js";
import o from "./module-r9_19.js";
import i from "./module-or_19.js";
import a from "./module-F_20.js";
import { f as f_1 } from "./module-R_19.js";
import u from "./module-er_19.js";
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
