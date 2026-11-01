import n from "./module-A_23.js";
import i from "./module-ot_23.js";
import o from "./module-JA_23.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    keyOf: function (t) {
      const r = o(
        i(this),
        function (r, key) {
          if (r === t) {
            return {
              key,
            };
          }
        },
        true,
      );
      return r && r.key;
    },
  },
);
