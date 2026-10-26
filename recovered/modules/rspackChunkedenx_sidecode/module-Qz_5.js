import n from "./module-A_5.js";
import i from "./module-EJ_4.js";
import o from "./module-vo_4.js";
import s from "./module-aq_4.js";
import a from "./module-F4_5.js";
import u from "./module-sT_4.js";
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
