import n from "./module-A_9.js";
import i from "./module-aq_8.js";
import o from "./module-F4_9.js";
import s from "./module-V6_9.js";
import a from "./module-mS_9.js";
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
