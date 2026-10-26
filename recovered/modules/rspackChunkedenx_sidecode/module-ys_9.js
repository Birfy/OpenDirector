import n from "./module-A_10.js";
import o from "./module-WG_2_9.js";
import i from "./module-zQ_10.js";
import a from "./module-yh_9.js";
import s from "./module-vM_10.js";
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
      const e = i(this);
      const r = o(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = new a_Set();
      s(e, function (t) {
        a_add(n, r(t, t, e));
      });
      return n;
    },
  },
);
