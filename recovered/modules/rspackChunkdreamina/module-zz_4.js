import n from "./module-g.js";
import o from "./module-f7.js";
import i from "./module-O_2.js";
import a from "./module-OG_2.js";
import s from "./module-Ok_2.js";
import u from "./module-Cp_3.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    flat: function () {
      const e = arguments.length ? arguments[0] : undefined;
      const t = i(this);
      const r = a(t);
      const n = u(t, 0);
      n.length = o(n, t, t, r, 0, e === undefined ? 1 : s(e));
      return n;
    },
  },
);
