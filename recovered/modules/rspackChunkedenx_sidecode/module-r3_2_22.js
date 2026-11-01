import n from "./module-A_23.js";
import i from "./module-O9_22.js";
import o from "./module-vj_23.js";
import s from "./module-V6_23.js";
import a from "./module-ng_23.js";
import u from "./module-X_23.js";
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
