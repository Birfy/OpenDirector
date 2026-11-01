import n from "./module-A_10.js";
import o from "./module-WG_2_9.js";
import i from "./module-ot_10.js";
import a from "./module-e7_9.js";
import s from "./module-JA_10.js";
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
      const e = i(this);
      const r = o(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = new a_Map();
      s(e, function (t, o) {
        if (r(t, o, e)) {
          a_set(n, o, t);
        }
      });
      return n;
    },
  },
);
