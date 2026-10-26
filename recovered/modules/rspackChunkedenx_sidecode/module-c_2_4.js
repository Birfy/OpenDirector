import n from "./module-A_5.js";
import i from "./module-r9_4.js";
import o from "./module-or_4.js";
import s from "./module-F_5.js";
import { f as f_1 } from "./module-R_4.js";
import u from "./module-er_4.js";
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
