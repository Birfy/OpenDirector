import n from "./module-A_9.js";
import i from "./module-r9_8.js";
import o from "./module-or_8.js";
import s from "./module-F_9.js";
import { f as f_1 } from "./module-R_8.js";
import u from "./module-er_8.js";
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
