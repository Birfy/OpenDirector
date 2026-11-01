import n from "./module-A_12.js";
import o from "./module-WG_2_11.js";
import i from "./module-ot_12.js";
import a from "./module-JA_12.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    some: function (r) {
      const t = i(this);
      const e = o(r, arguments.length > 1 ? arguments[1] : undefined);
      return (
        a(
          t,
          function (r, n) {
            if (e(r, n, t)) {
              return true;
            }
          },
          true,
        ) === true
      );
    },
  },
);
