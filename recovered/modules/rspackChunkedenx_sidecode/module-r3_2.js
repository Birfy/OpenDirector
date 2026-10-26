import n from "./module-A.js";
import o from "./module-O9.js";
import i from "./module-vj.js";
import a from "./module-V6.js";
import s from "./module-ng.js";
import u from "./module-X.js";
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
