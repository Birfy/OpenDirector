import n from "./module-A_8.js";
import o from "./module-WG_2_7.js";
import i from "./module-ot_8.js";
import a from "./module-e7_7.js";
import s from "./module-JA_8.js";
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
