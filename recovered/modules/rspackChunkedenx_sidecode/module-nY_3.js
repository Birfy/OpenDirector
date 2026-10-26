import n from "./module-A.js";
import o from "./module-WG_2.js";
import i from "./module-ot.js";
import a from "./module-e7.js";
import s from "./module-JA.js";
const a_Map = a.Map;
const a_set = a.set;
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    mapKeys: function (t) {
      const r = i(this);
      const e = o(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = new a_Map();
      s(r, function (t, o) {
        a_set(n, e(t, o, r), t);
      });
      return n;
    },
  },
);
