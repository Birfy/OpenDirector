import n from "./module-g.js";
import o from "./module-o.js";
import i from "./module-H_2.js";
import a from "./module-Ok_2.js";
import s from "./module-BC_2.js";
import u from "./module-VV_4.js";
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
    at: function (e) {
      const t = s(i(this));
      const t_length = t.length;
      const n = a(e);
      const o = n >= 0 ? n : t_length + n;
      if (o < 0 || o >= t_length) {
        return undefined;
      }
      return c(t, o);
    },
  },
);
