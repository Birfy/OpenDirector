import n from "./module-A_8.js";
import o from "./module-WG_2_7.js";
import i from "./module-ot_8.js";
import a from "./module-JA_8.js";
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
