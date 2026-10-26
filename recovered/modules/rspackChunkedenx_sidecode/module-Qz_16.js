import n from "./module-A_16.js";
import o from "./module-EJ_15.js";
import i from "./module-vo_15.js";
import a from "./module-aq_15.js";
import s from "./module-F4_16.js";
import u from "./module-sT_15.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    flatMap: function (r) {
      let t;
      const e = a(this);
      const n = s(e);
      i(r);
      t = u(e, 0);
      t.length = o(
        t,
        e,
        e,
        n,
        0,
        1,
        r,
        arguments.length > 1 ? arguments[1] : undefined,
      );
      return t;
    },
  },
);
