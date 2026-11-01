import n from "./module-A_6.js";
import i from "./module-zOL_5.js";
import o from "./module-ot_6.js";
import s from "./module-JA_6.js";
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
