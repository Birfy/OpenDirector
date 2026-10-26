import n from "./module-A_10.js";
import o from "./module-zOL_9.js";
import i from "./module-ot_10.js";
import a from "./module-JA_10.js";
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
          function (e) {
            if (o(e, t)) {
              return true;
            }
          },
          true,
        ) === true
      );
    },
  },
);
