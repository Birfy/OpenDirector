import n from "./module-A_15.js";
import o from "./module-EJ_14.js";
import i from "./module-vo_14.js";
import a from "./module-aq_14.js";
import s from "./module-F4_15.js";
import c from "./module-sT_14.js";
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
