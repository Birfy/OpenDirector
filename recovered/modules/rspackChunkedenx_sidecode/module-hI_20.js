import n from "./module-A_21.js";
import o from "./module-M_2_20.js";
import i from "./module-xK_20.js";
import a from "./module-Y_21.js";
import s from "./module-vo_20.js";
import _c from "./module-e7_20.js";
const _c_Map = _c.Map;
n(
  {
    target: "Map",
    stat: true,
    forced: true,
  },
  {
    keyBy: function (t, r) {
      const e = new (a(this) ? this : _c_Map)();
      s(r);
      const n = s(e.set);
      i(t, function (t) {
        o(n, e, r(t), t);
      });
      return e;
    },
  },
);
