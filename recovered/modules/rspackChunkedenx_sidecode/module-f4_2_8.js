import n from "./module-A_9.js";
import i from "./module-zOL_8.js";
import o from "./module-ot_9.js";
import s from "./module-JA_9.js";
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
