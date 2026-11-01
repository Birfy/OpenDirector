import n from "./module-A_20.js";
import o from "./module-WG_2_19.js";
import i from "./module-zQ_20.js";
import a from "./module-vM_20.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    every: function (r) {
      const t = i(this);
      const e = o(r, arguments.length > 1 ? arguments[1] : undefined);
      return (
        a(
          t,
          function (r) {
            if (!e(r, r, t)) {
              return false;
            }
          },
          true,
        ) !== false
      );
    },
  },
);
