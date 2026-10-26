import n from "./module-A_10.js";
import o from "./module-ot_10.js";
import i from "./module-JA_10.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    keyOf: function (t) {
      const e = i(
        o(this),
        function (e, key) {
          if (e === t) {
            return {
              key,
            };
          }
        },
        true,
      );
      return e && e.key;
    },
  },
);
