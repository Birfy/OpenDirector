import n from "./module-A_15.js";
import o from "./module-WG_2_14.js";
import i from "./module-ot_15.js";
import a from "./module-e7_14.js";
import s from "./module-JA_15.js";
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
