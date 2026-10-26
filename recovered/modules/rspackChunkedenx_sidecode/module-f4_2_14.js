import n from "./module-A_15.js";
import o from "./module-zOL_14.js";
import i from "./module-ot_15.js";
import a from "./module-JA_15.js";
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
