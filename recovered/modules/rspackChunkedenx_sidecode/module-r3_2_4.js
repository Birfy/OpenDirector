import n from "./module-A_5.js";
import i from "./module-O9_4.js";
import o from "./module-vj_5.js";
import s from "./module-V6_5.js";
import a from "./module-ng_5.js";
import u from "./module-X_5.js";
const c = i("".charAt);
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
      const r = a(o(this));
      const r_length = r.length;
      const n = s(t);
      const i = n >= 0 ? n : r_length + n;
      if (i < 0 || i >= r_length) {
        return undefined;
      }
      return c(r, i);
    },
  },
);
