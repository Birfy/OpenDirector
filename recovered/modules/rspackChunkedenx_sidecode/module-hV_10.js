import n from "./module-A_11.js";
import o from "./module-EJ_10.js";
import i from "./module-aq_10.js";
import a from "./module-F4_11.js";
import s from "./module-V6_11.js";
import u from "./module-sT_10.js";
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
