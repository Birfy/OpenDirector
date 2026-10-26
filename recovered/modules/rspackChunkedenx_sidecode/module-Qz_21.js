import n from "./module-A_21.js";
import o from "./module-EJ_20.js";
import i from "./module-vo_20.js";
import a from "./module-aq_20.js";
import s from "./module-F4_21.js";
import c from "./module-sT_20.js";
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
