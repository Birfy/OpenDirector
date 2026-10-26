import n from "g";
import i from "vP";
import a from "jnk";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    keyOf: function (t) {
      const e = a(
        i(this),
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
