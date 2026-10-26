import n from "./module-A_7.js";
import o from "./module-EJ_6.js";
import a from "./module-vo_6.js";
import i from "./module-aq_6.js";
import s from "./module-F4_7.js";
import c from "./module-sT_6.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    flatMap: function (t) {
      let r;
      const e = i(this);
      const n = s(e);
      a(t);
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
