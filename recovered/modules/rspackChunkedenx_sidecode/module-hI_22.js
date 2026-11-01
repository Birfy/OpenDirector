import n from "./module-A_23.js";
import i from "./module-M_2_22.js";
import o from "./module-xK_22.js";
import s from "./module-Y_23.js";
import a from "./module-vo_22.js";
import _u from "./module-e7_22.js";
const _u_Map = _u.Map;
n(
  {
    target: "Map",
    stat: true,
    forced: true,
  },
  {
    keyBy: function (t, r) {
      const e = new (s(this) ? this : _u_Map)();
      a(r);
      const n = a(e.set);
      o(t, function (t) {
        i(n, e, r(t), t);
      });
      return e;
    },
  },
);
