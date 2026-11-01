import n from "./module-A_21.js";
import o from "./module-WG_2_20.js";
import i from "./module-zQ_21.js";
import a from "./module-yh_20.js";
import s from "./module-vM_21.js";
const a_Set = a.Set;
const a_add = a.add;
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    filter: function (t) {
      const r = i(this);
      const e = o(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = new a_Set();
      s(r, function (t) {
        if (e(t, t, r)) {
          a_add(n, t);
        }
      });
      return n;
    },
  },
);
