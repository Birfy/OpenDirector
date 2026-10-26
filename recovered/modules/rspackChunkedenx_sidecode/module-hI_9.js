import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-xK_9.js";
import a from "./module-Y_10.js";
import s from "./module-vo_9.js";
import _u from "./module-e7_9.js";
const _u_Map = _u.Map;
n(
  {
    target: "Map",
    stat: true,
    forced: true,
  },
  {
    keyBy: function (t, e) {
      const r = new (a(this) ? this : _u_Map)();
      s(e);
      const n = s(r.set);
      i(t, function (t) {
        o(n, r, e(t), t);
      });
      return r;
    },
  },
);
