import n from "./module-A.js";
import o from "./module-WG_2.js";
import i from "./module-zQ.js";
import a from "./module-vM.js";
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
