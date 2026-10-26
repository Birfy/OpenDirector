import n from "./module-A_21.js";
import o from "./module-O9_20.js";
import i from "./module-vj_21.js";
import a from "./module-V6_21.js";
import s from "./module-ng_21.js";
import c from "./module-X_21.js";
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
