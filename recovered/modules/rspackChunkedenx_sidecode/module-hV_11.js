import n from "./module-A_12.js";
import o from "./module-EJ_11.js";
import i from "./module-aq_11.js";
import a from "./module-F4_12.js";
import s from "./module-V6_12.js";
import u from "./module-sT_11.js";
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
