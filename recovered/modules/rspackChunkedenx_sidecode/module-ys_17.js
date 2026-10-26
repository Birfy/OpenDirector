import n from "./module-A_18.js";
import o from "./module-WG_2_17.js";
import i from "./module-zQ_18.js";
import a from "./module-yh_17.js";
import s from "./module-vM_18.js";
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
    map: function (r) {
      const t = i(this);
      const e = o(r, arguments.length > 1 ? arguments[1] : undefined);
      const n = new a_Set();
      s(t, function (r) {
        a_add(n, e(r, r, t));
      });
      return n;
    },
  },
);
