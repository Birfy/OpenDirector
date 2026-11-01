import n from "./module-A.js";
import o from "./module-WG_2.js";
import i from "./module-ot.js";
import a from "./module-JA.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    find: function (t) {
      const r = i(this);
      const e = o(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = a(
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
