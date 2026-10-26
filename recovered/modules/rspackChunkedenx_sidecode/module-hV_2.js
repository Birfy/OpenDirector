import n from "./module-A_3.js";
import i from "./module-EJ_2.js";
import o from "./module-aq_2.js";
import s from "./module-F4_3.js";
import a from "./module-V6_3.js";
import u from "./module-sT_2.js";
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
