import n from "./module-A_3.js";
import i from "./module-WG_2_2.js";
import o from "./module-ot_3.js";
import s from "./module-e7_2.js";
import a from "./module-JA_3.js";
const s_Map = s.Map;
const s_set = s.set;
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    mapKeys: function (t) {
      const r = o(this);
      const e = i(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = new s_Map();
      a(r, function (t, i) {
        s_set(n, e(t, i, r), t);
      });
      return n;
    },
  },
);
