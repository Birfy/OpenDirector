import n from "./module-A_8.js";
import o from "./module-EJ_7.js";
import i from "./module-vo_7.js";
import a from "./module-aq_7.js";
import s from "./module-F4_8.js";
import u from "./module-sT_7.js";
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
