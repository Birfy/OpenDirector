import n from "./module-A_7.js";
import o from "./module-WG_2_6.js";
import a from "./module-zQ_7.js";
import i from "./module-vM_7.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    some: function (t) {
      const r = a(this);
      const e = o(t, arguments.length > 1 ? arguments[1] : undefined);
      return (
        i(
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
