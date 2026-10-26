import n from "./module-A_8.js";
import o from "./module-WG_2_7.js";
import i from "./module-zQ_8.js";
import a from "./module-yh_7.js";
import s from "./module-vM_8.js";
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
    filter: function (r) {
      const t = i(this);
      const e = o(r, arguments.length > 1 ? arguments[1] : undefined);
      const n = new a_Set();
      s(t, function (r) {
        if (e(r, r, t)) {
          a_add(n, r);
        }
      });
      return n;
    },
  },
);
