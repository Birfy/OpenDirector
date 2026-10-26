import n from "./module-A_18.js";
import o from "./module-aq_17.js";
import i from "./module-F4_18.js";
import a from "./module-V6_18.js";
import s from "./module-mS_18.js";
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
