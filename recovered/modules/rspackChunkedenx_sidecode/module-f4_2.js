import n from "./module-A.js";
import o from "./module-zOL.js";
import i from "./module-ot.js";
import a from "./module-JA.js";
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
