import n from "./module-A_11.js";
import o from "./module-WG_2_10.js";
import i from "./module-ot_11.js";
import a from "./module-e7_10.js";
import s from "./module-JA_11.js";
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
    filter: function (t) {
      const r = i(this);
      const e = o(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = new a_Map();
      s(r, function (t, o) {
        if (e(t, o, r)) {
          a_set(n, o, t);
        }
      });
      return n;
    },
  },
);
