import n from "./module-A_3.js";
import i from "./module-WG_2_2.js";
import o from "./module-zQ_3.js";
import s from "./module-vM_3.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    every: function (t) {
      const r = o(this);
      const e = i(t, arguments.length > 1 ? arguments[1] : undefined);
      return (
        s(
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
