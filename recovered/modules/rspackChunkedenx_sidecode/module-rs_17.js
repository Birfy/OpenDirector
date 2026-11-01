import n from "./module-A_18.js";
import o from "./module-WG_2_17.js";
import i from "./module-ot_18.js";
import a from "./module-JA_18.js";
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
