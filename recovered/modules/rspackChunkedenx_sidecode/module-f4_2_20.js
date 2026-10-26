import n from "./module-A_21.js";
import o from "./module-zOL_20.js";
import i from "./module-ot_21.js";
import a from "./module-JA_21.js";
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
