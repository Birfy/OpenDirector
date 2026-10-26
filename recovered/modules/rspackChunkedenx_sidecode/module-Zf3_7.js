import n from "./module-A_8.js";
import o from "./module-aq_7.js";
import i from "./module-F4_8.js";
import a from "./module-V6_8.js";
import s from "./module-mS_8.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    at: function (r) {
      const t = o(this);
      const e = i(t);
      const n = a(r);
      const s = n >= 0 ? n : e + n;
      if (s < 0 || s >= e) {
        return undefined;
      }
      return t[s];
    },
  },
);
s("at");
