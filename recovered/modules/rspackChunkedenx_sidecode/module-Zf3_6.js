import n from "./module-A_7.js";
import o from "./module-aq_6.js";
import a from "./module-F4_7.js";
import i from "./module-V6_7.js";
import s from "./module-mS_7.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    at: function (t) {
      const r = o(this);
      const e = a(r);
      const n = i(t);
      const s = n >= 0 ? n : e + n;
      if (s < 0 || s >= e) {
        return undefined;
      }
      return r[s];
    },
  },
);
s("at");
