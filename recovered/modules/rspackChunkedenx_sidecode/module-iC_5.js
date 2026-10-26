import n from "./module-A_6.js";
import i from "./module-WG_2_5.js";
import o from "./module-ot_6.js";
import s from "./module-JA_6.js";
n(
  {
    target: "Map",
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
        function (t, n) {
          if (e(t, n, r)) {
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
