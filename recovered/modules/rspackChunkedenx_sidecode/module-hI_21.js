import n from "./module-A_22.js";
import i from "./module-M_2_21.js";
import o from "./module-xK_21.js";
import s from "./module-Y_22.js";
import a from "./module-vo_21.js";
import _u from "./module-e7_21.js";
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
