import n from "./module-A_8.js";
import o from "./module-M_2_7.js";
import i from "./module-xK_7.js";
import a from "./module-Y_8.js";
import s from "./module-vo_7.js";
import _u from "./module-e7_7.js";
const _u_Map = _u.Map;
n(
  {
    target: "Map",
    stat: true,
    forced: true,
  },
  {
    keyBy: function (r, t) {
      const e = new (a(this) ? this : _u_Map)();
      s(t);
      const n = s(e.set);
      i(r, function (r) {
        o(n, e, t(r), r);
      });
      return e;
    },
  },
);
