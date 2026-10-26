import n from "./module-A_4.js";
import i from "./module-WG_2_3.js";
import o from "./module-zQ_4.js";
import s from "./module-vM_4.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    some: function (t) {
      const r = o(this);
      const e = i(t, arguments.length > 1 ? arguments[1] : undefined);
      return (
        s(
          r,
          function (t) {
            if (e(t, t, r)) {
              return true;
            }
          },
          true,
        ) === true
      );
    },
  },
);
