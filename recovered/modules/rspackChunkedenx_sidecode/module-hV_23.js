import n from "./module-A_24.js";
import o from "./module-EJ_23.js";
import i from "./module-aq_23.js";
import a from "./module-F4_24.js";
import s from "./module-V6_24.js";
import c from "./module-sT_23.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    flat: function () {
      const t = arguments.length ? arguments[0] : undefined;
      const r = i(this);
      const e = a(r);
      const n = c(r, 0);
      n.length = o(n, r, r, e, 0, t === undefined ? 1 : s(t));
      return n;
    },
  },
);
