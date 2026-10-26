import n from "./module-A_4.js";
import i from "./module-aq_3.js";
import o from "./module-F4_4.js";
import s from "./module-V6_4.js";
import a from "./module-mS_4.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    at: function (t) {
      const r = i(this);
      const e = o(r);
      const n = s(t);
      const a = n >= 0 ? n : e + n;
      if (a < 0 || a >= e) {
        return undefined;
      }
      return r[a];
    },
  },
);
a("at");
