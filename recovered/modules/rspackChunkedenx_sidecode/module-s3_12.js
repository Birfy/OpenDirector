import $ from "./module-A_13.js";
import tt from "./module-WG_2_12.js";
import te from "./module-zQ_13.js";
import tr from "./module-vM_13.js";
$(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    every: function (J) {
      const Z = te(this);
      const Q = tt(J, arguments.length > 1 ? arguments[1] : undefined);
      return (
        tr(
          Z,
          function (J) {
            if (!Q(J, J, Z)) {
              return false;
            }
          },
          true,
        ) !== false
      );
    },
  },
);
