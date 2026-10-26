import n from "./module-A_15.js";
import o from "./module-M_2_14.js";
import i from "./module-xK_14.js";
import a from "./module-Y_15.js";
import s from "./module-vo_14.js";
import _c from "./module-e7_14.js";
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
