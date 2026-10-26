import n from "./module-A_15.js";
import o from "./module-ot_15.js";
import i from "./module-JA_15.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    keyOf: function (t) {
      const r = i(
        o(this),
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
