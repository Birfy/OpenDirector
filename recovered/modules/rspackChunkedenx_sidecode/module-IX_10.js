import n from "./module-A_11.js";
import o from "./module-WG_2_10.js";
import i from "./module-ot_11.js";
import a from "./module-JA_11.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    findKey: function (t) {
      const r = i(this);
      const e = o(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = a(
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
