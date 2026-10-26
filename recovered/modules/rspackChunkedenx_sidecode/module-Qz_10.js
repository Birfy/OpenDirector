import n from "./module-A_10.js";
import o from "./module-EJ_9.js";
import i from "./module-vo_9.js";
import a from "./module-aq_9.js";
import s from "./module-F4_10.js";
import u from "./module-sT_9.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    flatMap: function (t) {
      let e;
      const r = a(this);
      const n = s(r);
      i(t);
      e = u(r, 0);
      e.length = o(
        e,
        r,
        r,
        n,
        0,
        1,
        t,
        arguments.length > 1 ? arguments[1] : undefined,
      );
      return e;
    },
  },
);
