import n from "./module-A_8.js";
import o from "./module-WG_2_7.js";
import i from "./module-zQ_8.js";
import a from "./module-vM_8.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    find: function (r) {
      const t = i(this);
      const e = o(r, arguments.length > 1 ? arguments[1] : undefined);
      const n = a(
        t,
        function (r) {
          if (e(r, r, t)) {
            return {
              value: r,
            };
          }
        },
        true,
      );
      return n && n.value;
    },
  },
);
