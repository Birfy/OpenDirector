import n from "./module-A_10.js";
import o from "./module-WG_2_9.js";
import i from "./module-zQ_10.js";
import a from "./module-vM_10.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    every: function (t) {
      const e = i(this);
      const r = o(t, arguments.length > 1 ? arguments[1] : undefined);
      return (
        a(
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
