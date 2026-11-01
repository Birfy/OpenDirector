import n from "./module-A.js";
import o from "./module-r9.js";
import i from "./module-or.js";
import a from "./module-F.js";
import { f as f_1 } from "./module-R.js";
import u from "./module-er.js";
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
      for (var c = i(n), f = {}, h = 0; c.length > h;) {
        if ((e = o(n, (r = c[h++]))) !== undefined) {
          u(f, r, e);
        }
      }
      return f;
    },
  },
);
