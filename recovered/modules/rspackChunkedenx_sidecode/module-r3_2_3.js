import n from "./module-A_4.js";
import i from "./module-O9_3.js";
import o from "./module-vj_4.js";
import s from "./module-V6_4.js";
import a from "./module-ng_4.js";
import u from "./module-X_4.js";
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
