import n from "./module-A_22.js";
import i from "./module-EJ_21.js";
import o from "./module-aq_21.js";
import s from "./module-F4_22.js";
import a from "./module-V6_22.js";
import u from "./module-sT_21.js";
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
