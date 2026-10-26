import n from "./module-A.js";
import o from "./module-EJ.js";
import i from "./module-vo.js";
import a from "./module-aq.js";
import s from "./module-F4.js";
import u from "./module-sT.js";
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
