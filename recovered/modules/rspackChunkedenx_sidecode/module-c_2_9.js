import n from "./module-A_10.js";
import o from "./module-r9_9.js";
import i from "./module-or_9.js";
import a from "./module-F_10.js";
import { f as f_1 } from "./module-R_9.js";
import u from "./module-er_9.js";
n(
  {
    target: "Object",
    stat: true,
    sham: !o,
  },
  {
    getOwnPropertyDescriptors: function (t) {
      let e;
      let r;
      const n = a(t);
      const o = f_1;
      for (var c = i(n), f = {}, l = 0; c.length > l;) {
        if ((r = o(n, (e = c[l++]))) !== undefined) {
          u(f, e, r);
        }
      }
      return f;
    },
  },
);
