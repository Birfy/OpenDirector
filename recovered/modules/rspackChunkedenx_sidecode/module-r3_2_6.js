import n from "./module-A_7.js";
import o from "./module-O9_6.js";
import a from "./module-vj_7.js";
import i from "./module-V6_7.js";
import s from "./module-ng_7.js";
import c from "./module-X_7.js";
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
      const r = s(a(this));
      const r_length = r.length;
      const n = i(t);
      const o = n >= 0 ? n : r_length + n;
      if (o < 0 || o >= r_length) {
        return undefined;
      }
      return u(r, o);
    },
  },
);
