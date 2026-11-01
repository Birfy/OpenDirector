import n from "./module-A_10.js";
import o from "./module-EJ_9.js";
import i from "./module-aq_9.js";
import a from "./module-F4_10.js";
import s from "./module-V6_10.js";
import u from "./module-sT_9.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    flat: function () {
      const t = arguments.length ? arguments[0] : undefined;
      const e = i(this);
      const r = a(e);
      const n = u(e, 0);
      n.length = o(n, e, e, r, 0, t === undefined ? 1 : s(t));
      return n;
    },
  },
);
