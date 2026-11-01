import n from "./module-A_23.js";
import i from "./module-EJ_22.js";
import o from "./module-aq_22.js";
import s from "./module-F4_23.js";
import a from "./module-V6_23.js";
import u from "./module-sT_22.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    flat: function () {
      const t = arguments.length ? arguments[0] : undefined;
      const r = o(this);
      const e = s(r);
      const n = u(r, 0);
      n.length = i(n, r, r, e, 0, t === undefined ? 1 : a(t));
      return n;
    },
  },
);
