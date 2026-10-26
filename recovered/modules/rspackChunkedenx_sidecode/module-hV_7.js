import n from "./module-A_8.js";
import o from "./module-EJ_7.js";
import i from "./module-aq_7.js";
import a from "./module-F4_8.js";
import s from "./module-V6_8.js";
import u from "./module-sT_7.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    flat: function () {
      const r = arguments.length ? arguments[0] : undefined;
      const t = i(this);
      const e = a(t);
      const n = u(t, 0);
      n.length = o(n, t, t, e, 0, r === undefined ? 1 : s(r));
      return n;
    },
  },
);
