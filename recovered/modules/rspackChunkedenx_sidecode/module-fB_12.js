import $ from "./module-A_13.js";
import tt from "./module-ot_13.js";
import te from "./module-JA_13.js";
$(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    keyOf: function (J) {
      const Z = te(
        tt(this),
        function (Z, key) {
          if (Z === J) {
            return {
              key,
            };
          }
        },
        true,
      );
      return Z && Z.key;
    },
  },
);
