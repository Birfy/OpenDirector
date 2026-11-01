import n from "./module-A_11.js";
import o from "./module-WG_2_10.js";
import i from "./module-zQ_11.js";
import a from "./module-vM_11.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    every: function (t) {
      const r = i(this);
      const e = o(t, arguments.length > 1 ? arguments[1] : undefined);
      return (
        a(
          r,
          function (t) {
            if (!e(t, t, r)) {
              return false;
            }
          },
          true,
        ) !== false
      );
    },
  },
);
