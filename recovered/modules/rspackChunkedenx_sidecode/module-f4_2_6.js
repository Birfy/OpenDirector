import n from "./module-A_7.js";
import o from "./module-zOL_6.js";
import a from "./module-ot_7.js";
import i from "./module-JA_7.js";
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
        i(
          a(this),
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
