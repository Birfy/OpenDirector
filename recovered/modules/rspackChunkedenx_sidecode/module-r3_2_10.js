import n from "./module-A_11.js";
import o from "./module-O9_10.js";
import i from "./module-vj_11.js";
import a from "./module-V6_11.js";
import s from "./module-ng_11.js";
import u from "./module-X_11.js";
const c = o("".charAt);
n(
  {
    target: "String",
    proto: true,
    forced: u(function () {
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
      return c(r, o);
    },
  },
);
