import n from "g";
import i from "pCt";
import a from "vP";
import o from "jnk";
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
        o(
          a(this),
          function (e) {
            if (i(e, t)) {
              return true;
            }
          },
          true,
        ) === true
      );
    },
  },
);
