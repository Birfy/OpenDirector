import n from "./module-A_14.js";
import o from "./module-aq_13.js";
import i from "./module-F4_14.js";
import a from "./module-V6_14.js";
import s from "./module-mS_14.js";
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
