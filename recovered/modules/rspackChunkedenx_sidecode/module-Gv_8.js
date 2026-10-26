import n from "./module-A_9.js";
import i from "./module-WG_2_8.js";
import o from "./module-ot_9.js";
import s from "./module-e7_8.js";
import a from "./module-JA_9.js";
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
    filter: function (t) {
      const r = o(this);
      const e = i(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = new s_Map();
      a(r, function (t, i) {
        if (e(t, i, r)) {
          s_set(n, i, t);
        }
      });
      return n;
    },
  },
);
