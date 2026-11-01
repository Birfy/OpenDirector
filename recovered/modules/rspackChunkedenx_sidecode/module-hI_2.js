import n from "./module-A_3.js";
import i from "./module-M_2_2.js";
import o from "./module-xK_2.js";
import s from "./module-Y_3.js";
import a from "./module-vo_2.js";
import _u from "./module-e7_2.js";
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
