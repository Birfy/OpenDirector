import $ from "./module-A_13.js";
import tt from "./module-WG_2_12.js";
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
    findKey: function (J) {
      const Z = te(this);
      const Q = tt(J, arguments.length > 1 ? arguments[1] : undefined);
      const $ = tr(
        Z,
        function (J, $) {
          if (Q(J, $, Z)) {
            return {
              key: $,
            };
          }
        },
        true,
      );
      return $ && $.key;
    },
  },
);
