import n from "./module-A_10.js";
import o from "./module-O9_9.js";
import i from "./module-vj_10.js";
import a from "./module-V6_10.js";
import s from "./module-ng_10.js";
import u from "./module-X_10.js";
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
      const e = s(i(this));
      const e_length = e.length;
      const n = a(t);
      const o = n >= 0 ? n : e_length + n;
      if (o < 0 || o >= e_length) {
        return undefined;
      }
      return c(e, o);
    },
  },
);
