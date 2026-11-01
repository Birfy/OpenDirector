import n from "./module-A_24.js";
import o from "./module-WG_2_23.js";
import i from "./module-ot_24.js";
import a from "./module-e7_23.js";
import s from "./module-JA_24.js";
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
    mapValues: function (t) {
      const r = i(this);
      const e = o(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = new a_Map();
      s(r, function (t, o) {
        a_set(n, o, e(t, o, r));
      });
      return n;
    },
  },
);
