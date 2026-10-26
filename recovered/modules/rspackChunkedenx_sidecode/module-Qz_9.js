import n from "./module-A_9.js";
import i from "./module-EJ_8.js";
import o from "./module-vo_8.js";
import s from "./module-aq_8.js";
import a from "./module-F4_9.js";
import u from "./module-sT_8.js";
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
