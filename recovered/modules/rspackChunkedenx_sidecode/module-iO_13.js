import n from "./module-A_14.js";
import o from "./module-WG_2_13.js";
import i from "./module-zQ_14.js";
import a from "./module-yh_13.js";
import s from "./module-vM_14.js";
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
