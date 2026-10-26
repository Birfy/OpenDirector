import n from "./module-A_6.js";
import i from "./module-r9_5.js";
import o from "./module-or_5.js";
import s from "./module-F_6.js";
import { f as f_1 } from "./module-R_5.js";
import u from "./module-er_5.js";
n(
  {
    target: "Object",
    stat: true,
    sham: !i,
  },
  {
    getOwnPropertyDescriptors: function (t) {
      let r;
      let e;
      const n = s(t);
      const i = f_1;
      for (var c = o(n), f = {}, h = 0; c.length > h;) {
        if ((e = i(n, (r = c[h++]))) !== undefined) {
          u(f, r, e);
        }
      }
      return f;
    },
  },
);
