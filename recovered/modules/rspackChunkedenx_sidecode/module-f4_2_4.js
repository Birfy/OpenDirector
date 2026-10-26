import n from "./module-A_5.js";
import i from "./module-zOL_4.js";
import o from "./module-ot_5.js";
import s from "./module-JA_5.js";
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
