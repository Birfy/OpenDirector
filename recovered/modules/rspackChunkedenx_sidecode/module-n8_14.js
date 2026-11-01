import n from "./module-A_15.js";
import o from "./module-WG_2_14.js";
import i from "./module-zQ_15.js";
import a from "./module-vM_15.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    some: function (t) {
      const r = i(this);
      const e = o(t, arguments.length > 1 ? arguments[1] : undefined);
      return (
        a(
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
