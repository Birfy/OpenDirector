import n from "./module-A_18.js";
import o from "./module-WG_2_17.js";
import i from "./module-ot_18.js";
import a from "./module-e7_17.js";
import s from "./module-JA_18.js";
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
    filter: function (r) {
      const t = i(this);
      const e = o(r, arguments.length > 1 ? arguments[1] : undefined);
      const n = new a_Map();
      s(t, function (r, o) {
        if (e(r, o, t)) {
          a_set(n, o, r);
        }
      });
      return n;
    },
  },
);
