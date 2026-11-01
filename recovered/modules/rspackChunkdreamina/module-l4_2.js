import n from "./module-g.js";
import o from "./module-F.js";
import i from "./module-Cj_2.js";
import a from "./module-MR.js";
import { f as f_1 } from "./module-y_2.js";
import u from "./module-Id_2.js";
n(
  {
    target: "Object",
    stat: true,
    sham: !o,
  },
  {
    getOwnPropertyDescriptors: function (e) {
      let t;
      let r;
      const n = a(e);
      const o = f_1;
      for (var c = i(n), f = {}, l = 0; c.length > l;) {
        if ((r = o(n, (t = c[l++]))) !== undefined) {
          u(f, t, r);
        }
      }
      return f;
    },
  },
);
