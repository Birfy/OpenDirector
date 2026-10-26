import n from "./module-A_17.js";
import o from "./module-M_2_16.js";
import i from "./module-xK_16.js";
import a from "./module-Y_17.js";
import s from "./module-vo_16.js";
import _u from "./module-e7_16.js";
const _u_Map = _u.Map;
n(
  {
    target: "Map",
    stat: true,
    forced: true,
  },
  {
    keyBy: function (t, r) {
      const e = new (a(this) ? this : _u_Map)();
      s(r);
      const n = s(e.set);
      i(t, function (t) {
        o(n, e, r(t), t);
      });
      return e;
    },
  },
);
