import n from "./module-A_24.js";
import o from "./module-WG_2_23.js";
import i from "./module-ot_24.js";
import a from "./module-JA_24.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    every: function (t) {
      const r = i(this);
      const e = o(t, arguments.length > 1 ? arguments[1] : undefined);
      return (
        a(
          r,
          function (t, n) {
            if (!e(t, n, r)) {
              return false;
            }
          },
          true,
        ) !== false
      );
    },
  },
);
