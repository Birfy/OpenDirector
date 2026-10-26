import n from "./module-A_10.js";
import o from "./module-WG_2_9.js";
import i from "./module-ot_10.js";
import a from "./module-JA_10.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    every: function (t) {
      const e = i(this);
      const r = o(t, arguments.length > 1 ? arguments[1] : undefined);
      return (
        a(
          e,
          function (t, n) {
            if (!r(t, n, e)) {
              return false;
            }
          },
          true,
        ) !== false
      );
    },
  },
);
