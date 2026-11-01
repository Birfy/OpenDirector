import n from "g";
import i from "fM";
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
    some: function (t) {
      const e = a(this);
      const r = i(t, arguments.length > 1 ? arguments[1] : undefined);
      return (
        o(
          e,
          function (t, n) {
            if (r(t, n, e)) {
              return true;
            }
          },
          true,
        ) === true
      );
    },
  },
);
