import n from "./module-A_24.js";
import o from "./module-M_2_23.js";
import i from "./module-xK_23.js";
import a from "./module-Y_24.js";
import s from "./module-vo_23.js";
import _c from "./module-e7_23.js";
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
