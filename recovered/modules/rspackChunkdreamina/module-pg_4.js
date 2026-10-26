import n from "./module-g.js";
import o from "./module-f7.js";
import i from "./module-B.js";
import a from "./module-O_2.js";
import s from "./module-OG_2.js";
import u from "./module-Cp_3.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    flatMap: function (e) {
      let t;
      const r = a(this);
      const n = s(r);
      i(e);
      t = u(r, 0);
      t.length = o(
        t,
        r,
        r,
        n,
        0,
        1,
        e,
        arguments.length > 1 ? arguments[1] : undefined,
      );
      return t;
    },
  },
);
