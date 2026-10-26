import n from "./module-A_8.js";
import o from "./module-zOL_7.js";
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
