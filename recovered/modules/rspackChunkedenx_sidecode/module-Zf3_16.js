import n from "./module-A_17.js";
import o from "./module-aq_16.js";
import i from "./module-F4_17.js";
import a from "./module-V6_17.js";
import s from "./module-mS_17.js";
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
