import n from "./module-A_19.js";
import o from "./module-WG_2_18.js";
import i from "./module-zQ_19.js";
import a from "./module-vM_19.js";
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
