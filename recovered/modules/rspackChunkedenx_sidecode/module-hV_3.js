import n from "./module-A_4.js";
import i from "./module-EJ_3.js";
import o from "./module-aq_3.js";
import s from "./module-F4_4.js";
import a from "./module-V6_4.js";
import u from "./module-sT_3.js";
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
