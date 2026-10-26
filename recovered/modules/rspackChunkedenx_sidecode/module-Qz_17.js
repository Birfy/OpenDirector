import n from "./module-A_17.js";
import o from "./module-EJ_16.js";
import i from "./module-vo_16.js";
import a from "./module-aq_16.js";
import s from "./module-F4_17.js";
import u from "./module-sT_16.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    flatMap: function (t) {
      let r;
      const e = a(this);
      const n = s(e);
      i(t);
      r = u(e, 0);
      r.length = o(
        r,
        e,
        e,
        n,
        0,
        1,
        t,
        arguments.length > 1 ? arguments[1] : undefined,
      );
      return r;
    },
  },
);
