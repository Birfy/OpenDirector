import n from "./module-A_20.js";
import o from "./module-ot_20.js";
import i from "./module-JA_20.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    keyOf: function (r) {
      const t = i(
        o(this),
        function (t, key) {
          if (t === r) {
            return {
              key,
            };
          }
        },
        true,
      );
      return t && t.key;
    },
  },
);
