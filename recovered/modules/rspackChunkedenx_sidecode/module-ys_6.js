import n from "./module-A_7.js";
import o from "./module-WG_2_6.js";
import a from "./module-zQ_7.js";
import i from "./module-yh_6.js";
import s from "./module-vM_7.js";
const i_Set = i.Set;
const i_add = i.add;
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    map: function (t) {
      const r = a(this);
      const e = o(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = new i_Set();
      s(r, function (t) {
        i_add(n, e(t, t, r));
      });
      return n;
    },
  },
);
