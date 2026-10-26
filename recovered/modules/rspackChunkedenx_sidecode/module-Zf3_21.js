import n from "./module-A_22.js";
import i from "./module-aq_21.js";
import o from "./module-F4_22.js";
import s from "./module-V6_22.js";
import a from "./module-mS_22.js";
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
