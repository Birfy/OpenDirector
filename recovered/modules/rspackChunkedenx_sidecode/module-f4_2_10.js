import n from "./module-A_11.js";
import o from "./module-zOL_10.js";
import i from "./module-ot_11.js";
import a from "./module-JA_11.js";
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
