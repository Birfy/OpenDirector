import n from "./module-A_14.js";
import o from "./module-zOL_13.js";
import i from "./module-ot_14.js";
import a from "./module-JA_14.js";
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
