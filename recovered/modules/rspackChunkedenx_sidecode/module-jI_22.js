import n from "./module-A_23.js";
import i from "./module-WG_2_22.js";
import o from "./module-zQ_23.js";
import s from "./module-vM_23.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    find: function (t) {
      const r = o(this);
      const e = i(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = s(
        r,
        function (t) {
          if (e(t, t, r)) {
            return {
              value: t,
            };
          }
        },
        true,
      );
      return n && n.value;
    },
  },
);
