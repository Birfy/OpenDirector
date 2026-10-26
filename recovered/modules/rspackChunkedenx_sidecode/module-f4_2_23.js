import n from "./module-A_24.js";
import o from "./module-zOL_23.js";
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
    includes: function (t) {
      return (
        a(
          i(this),
          function (r) {
            if (o(r, t)) {
              return true;
            }
          },
          true,
        ) === true
      );
    },
  },
);
