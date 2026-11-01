import n from "./module-A_7.js";
import o from "./module-EJ_6.js";
import a from "./module-aq_6.js";
import i from "./module-F4_7.js";
import s from "./module-V6_7.js";
import c from "./module-sT_6.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    flat: function () {
      const t = arguments.length ? arguments[0] : undefined;
      const r = a(this);
      const e = i(r);
      const n = c(r, 0);
      n.length = o(n, r, r, e, 0, t === undefined ? 1 : s(t));
      return n;
    },
  },
);
