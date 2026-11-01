import n from "./module-A_15.js";
import o from "./module-O9_14.js";
import i from "./module-vj_15.js";
import a from "./module-V6_15.js";
import s from "./module-ng_15.js";
import c from "./module-X_15.js";
const u = o("".charAt);
n(
  {
    target: "String",
    proto: true,
    forced: c(function () {
      return "𠮷".at(-2) !== "\uD842";
    }),
  },
  {
    at: function (t) {
      const r = s(i(this));
      const r_length = r.length;
      const n = a(t);
      const o = n >= 0 ? n : r_length + n;
      if (o < 0 || o >= r_length) {
        return undefined;
      }
      return u(r, o);
    },
  },
);
