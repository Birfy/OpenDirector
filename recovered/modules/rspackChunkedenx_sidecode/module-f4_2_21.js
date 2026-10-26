import n from "./module-A_22.js";
import i from "./module-zOL_21.js";
import o from "./module-ot_22.js";
import s from "./module-JA_22.js";
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
