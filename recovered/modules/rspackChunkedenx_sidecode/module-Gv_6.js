import n from "./module-A_7.js";
import o from "./module-WG_2_6.js";
import a from "./module-ot_7.js";
import i from "./module-e7_6.js";
import s from "./module-JA_7.js";
const i_Map = i.Map;
const i_set = i.set;
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    filter: function (t) {
      const r = a(this);
      const e = o(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = new i_Map();
      s(r, function (t, o) {
        if (e(t, o, r)) {
          i_set(n, o, t);
        }
      });
      return n;
    },
  },
);
