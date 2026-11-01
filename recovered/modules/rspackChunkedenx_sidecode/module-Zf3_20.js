import n from "./module-A_21.js";
import o from "./module-aq_20.js";
import i from "./module-F4_21.js";
import a from "./module-V6_21.js";
import s from "./module-mS_21.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    at: function (t) {
      const r = o(this);
      const e = i(r);
      const n = a(t);
      const s = n >= 0 ? n : e + n;
      if (s < 0 || s >= e) {
        return undefined;
      }
      return r[s];
    },
  },
);
s("at");
