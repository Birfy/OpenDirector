import n from "./module-A_20.js";
import o from "./module-WG_2_19.js";
import i from "./module-ot_20.js";
import a from "./module-e7_19.js";
import s from "./module-JA_20.js";
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
    mapKeys: function (r) {
      const t = i(this);
      const e = o(r, arguments.length > 1 ? arguments[1] : undefined);
      const n = new a_Map();
      s(t, function (r, o) {
        a_set(n, e(r, o, t), r);
      });
      return n;
    },
  },
);
