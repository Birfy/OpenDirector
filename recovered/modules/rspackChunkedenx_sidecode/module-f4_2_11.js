import n from "./module-A_12.js";
import o from "./module-zOL_11.js";
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
