import n from "./module-A_6.js";
import i from "./module-WG_2_5.js";
import o from "./module-ot_6.js";
import s from "./module-e7_5.js";
import a from "./module-JA_6.js";
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
    mapValues: function (t) {
      const r = o(this);
      const e = i(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = new s_Map();
      a(r, function (t, i) {
        s_set(n, i, e(t, i, r));
      });
      return n;
    },
  },
);
