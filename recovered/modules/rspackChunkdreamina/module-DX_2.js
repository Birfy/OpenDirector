import n from "g";
import i from "fM";
import a from "V2";
import o from "Ip";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    every: function (t) {
      const e = a(this);
      const r = i(t, arguments.length > 1 ? arguments[1] : undefined);
      return (
        o(
          e,
          function (t) {
            if (!r(t, t, e)) {
              return false;
            }
          },
          true,
        ) !== false
      );
    },
  },
);
