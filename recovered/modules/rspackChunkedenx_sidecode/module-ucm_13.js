import n from "./module-A_14.js";
import o from "./module-WG_2_13.js";
import i from "./module-ot_14.js";
import a from "./module-JA_14.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    every: function (r) {
      const t = i(this);
      const e = o(r, arguments.length > 1 ? arguments[1] : undefined);
      return (
        a(
          t,
          function (r, n) {
            if (!e(r, n, t)) {
              return false;
            }
          },
          true,
        ) !== false
      );
    },
  },
);
