import n from "./module-A_18.js";
import o from "./module-O9_17.js";
import i from "./module-vj_18.js";
import a from "./module-V6_18.js";
import s from "./module-ng_18.js";
import u from "./module-X_18.js";
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
    at: function (r) {
      const t = s(i(this));
      const t_length = t.length;
      const n = a(r);
      const o = n >= 0 ? n : t_length + n;
      if (o < 0 || o >= t_length) {
        return undefined;
      }
      return c(t, o);
    },
  },
);
