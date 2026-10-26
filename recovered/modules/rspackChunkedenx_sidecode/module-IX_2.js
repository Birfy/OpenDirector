import n from "./module-A_3.js";
import i from "./module-WG_2_2.js";
import o from "./module-ot_3.js";
import s from "./module-JA_3.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    findKey: function (t) {
      const r = o(this);
      const e = i(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = s(
        r,
        function (t, n) {
          if (e(t, n, r)) {
            return {
              key: n,
            };
          }
        },
        true,
      );
      return n && n.key;
    },
  },
);
