import n from "./module-A_11.js";
import o from "./module-WG_2_10.js";
import i from "./module-zQ_11.js";
import a from "./module-yh_10.js";
import s from "./module-vM_11.js";
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
    map: function (t) {
      const r = i(this);
      const e = o(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = new a_Set();
      s(r, function (t) {
        a_add(n, e(t, t, r));
      });
      return n;
    },
  },
);
