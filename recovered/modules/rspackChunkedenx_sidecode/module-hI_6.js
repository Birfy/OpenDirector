import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-xK_6.js";
import i from "./module-Y_7.js";
import s from "./module-vo_6.js";
import _c from "./module-e7_6.js";
const _c_Map = _c.Map;
n(
  {
    target: "Map",
    stat: true,
    forced: true,
  },
  {
    keyBy: function (t, r) {
      const e = new (i(this) ? this : _c_Map)();
      s(r);
      const n = s(e.set);
      a(t, function (t) {
        o(n, e, r(t), t);
      });
      return e;
    },
  },
);
