import n from "./module-A.js";
import o from "./module-M_2.js";
import i from "./module-xK.js";
import a from "./module-Y.js";
import s from "./module-vo.js";
import _u from "./module-e7.js";
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
