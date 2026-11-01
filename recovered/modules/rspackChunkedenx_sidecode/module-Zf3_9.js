import n from "./module-A_10.js";
import o from "./module-aq_9.js";
import i from "./module-F4_10.js";
import a from "./module-V6_10.js";
import s from "./module-mS_10.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    at: function (t) {
      const e = o(this);
      const r = i(e);
      const n = a(t);
      const s = n >= 0 ? n : r + n;
      if (s < 0 || s >= r) {
        return undefined;
      }
      return e[s];
    },
  },
);
s("at");
