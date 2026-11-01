import n from "./module-A_4.js";
import i from "./module-WG_2_3.js";
import o from "./module-zQ_4.js";
import s from "./module-yh_3.js";
import a from "./module-vM_4.js";
const s_Set = s.Set;
const s_add = s.add;
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    filter: function (t) {
      const r = o(this);
      const e = i(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = new s_Set();
      a(r, function (t) {
        if (e(t, t, r)) {
          s_add(n, t);
        }
      });
      return n;
    },
  },
);
