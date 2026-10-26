import n from "./module-A_3.js";
import i from "./module-zOL_2.js";
import o from "./module-ot_3.js";
import s from "./module-JA_3.js";
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
