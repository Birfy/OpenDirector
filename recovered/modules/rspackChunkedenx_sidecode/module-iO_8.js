import n from "./module-A_9.js";
import i from "./module-WG_2_8.js";
import o from "./module-zQ_9.js";
import s from "./module-yh_8.js";
import a from "./module-vM_9.js";
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
