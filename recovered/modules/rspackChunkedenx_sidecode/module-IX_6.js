import n from "./module-A_7.js";
import o from "./module-WG_2_6.js";
import a from "./module-ot_7.js";
import i from "./module-JA_7.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    findKey: function (t) {
      const r = a(this);
      const e = o(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = i(
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
