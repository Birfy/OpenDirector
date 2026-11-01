import $ from "./module-A_13.js";
import tt from "./module-zOL_12.js";
import te from "./module-ot_13.js";
import tr from "./module-JA_13.js";
$(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    includes: function (J) {
      return (
        tr(
          te(this),
          function (Z) {
            if (tt(Z, J)) {
              return true;
            }
          },
          true,
        ) === true
      );
    },
  },
);
