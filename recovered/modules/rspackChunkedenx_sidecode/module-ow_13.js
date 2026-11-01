import n from "./module-A_14.js";
import o from "./module-WG_2_13.js";
import i from "./module-ot_14.js";
import a from "./module-e7_13.js";
import s from "./module-JA_14.js";
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
    mapValues: function (r) {
      const t = i(this);
      const e = o(r, arguments.length > 1 ? arguments[1] : undefined);
      const n = new a_Map();
      s(t, function (r, o) {
        a_set(n, o, e(r, o, t));
      });
      return n;
    },
  },
);
