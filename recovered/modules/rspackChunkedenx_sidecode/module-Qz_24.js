import n from "./module-A_24.js";
import o from "./module-EJ_23.js";
import i from "./module-vo_23.js";
import a from "./module-aq_23.js";
import s from "./module-F4_24.js";
import c from "./module-sT_23.js";
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
      r = c(e, 0);
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
