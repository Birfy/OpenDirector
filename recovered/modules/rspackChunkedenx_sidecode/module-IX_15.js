import n from "./module-A_16.js";
import o from "./module-WG_2_15.js";
import i from "./module-ot_16.js";
import a from "./module-JA_16.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    findKey: function (r) {
      const t = i(this);
      const e = o(r, arguments.length > 1 ? arguments[1] : undefined);
      const n = a(
        t,
        function (r, n) {
          if (e(r, n, t)) {
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
