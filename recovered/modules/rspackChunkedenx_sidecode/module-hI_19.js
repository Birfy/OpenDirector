import n from "./module-A_20.js";
import o from "./module-M_2_19.js";
import i from "./module-xK_19.js";
import a from "./module-Y_20.js";
import s from "./module-vo_19.js";
import _u from "./module-e7_19.js";
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
