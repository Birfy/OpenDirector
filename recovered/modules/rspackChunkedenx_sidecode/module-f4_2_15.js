import n from "./module-A_16.js";
import o from "./module-zOL_15.js";
import i from "./module-ot_16.js";
import a from "./module-JA_16.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    includes: function (r) {
      return (
        a(
          i(this),
          function (t) {
            if (o(t, r)) {
              return true;
            }
          },
          true,
        ) === true
      );
    },
  },
);
