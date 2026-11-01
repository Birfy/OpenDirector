import n from "./module-A_6.js";
import i from "./module-WG_2_5.js";
import o from "./module-zQ_6.js";
import s from "./module-yh_5.js";
import a from "./module-vM_6.js";
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
    map: function (t) {
      const r = o(this);
      const e = i(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = new s_Set();
      a(r, function (t) {
        s_add(n, e(t, t, r));
      });
      return n;
    },
  },
);
