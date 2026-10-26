import n from "./module-A_17.js";
import o from "./module-zOL_16.js";
import i from "./module-ot_17.js";
import a from "./module-JA_17.js";
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
