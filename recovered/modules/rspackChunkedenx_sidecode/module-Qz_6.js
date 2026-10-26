import n from "./module-A_6.js";
import i from "./module-EJ_5.js";
import o from "./module-vo_5.js";
import s from "./module-aq_5.js";
import a from "./module-F4_6.js";
import u from "./module-sT_5.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    flatMap: function (t) {
      let r;
      const e = s(this);
      const n = a(e);
      o(t);
      r = u(e, 0);
      r.length = i(
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
