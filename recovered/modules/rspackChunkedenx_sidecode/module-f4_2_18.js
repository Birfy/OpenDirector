import n from "./module-A_19.js";
import o from "./module-zOL_18.js";
import i from "./module-ot_19.js";
import a from "./module-JA_19.js";
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
