import n from "./module-A_23.js";
import i from "./module-zOL_22.js";
import o from "./module-ot_23.js";
import s from "./module-JA_23.js";
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
        s(
          o(this),
          function (r) {
            if (i(r, t)) {
              return true;
            }
          },
          true,
        ) === true
      );
    },
  },
);
