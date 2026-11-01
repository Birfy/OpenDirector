import n from "./module-A_17.js";
import o from "./module-EJ_16.js";
import i from "./module-aq_16.js";
import a from "./module-F4_17.js";
import s from "./module-V6_17.js";
import u from "./module-sT_16.js";
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
      const n = u(r, 0);
      n.length = o(n, r, r, e, 0, t === undefined ? 1 : s(t));
      return n;
    },
  },
);
