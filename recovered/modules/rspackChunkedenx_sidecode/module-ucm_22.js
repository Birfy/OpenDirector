import n from "./module-A_23.js";
import i from "./module-WG_2_22.js";
import o from "./module-ot_23.js";
import s from "./module-JA_23.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    every: function (t) {
      const r = o(this);
      const e = i(t, arguments.length > 1 ? arguments[1] : undefined);
      return (
        s(
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
