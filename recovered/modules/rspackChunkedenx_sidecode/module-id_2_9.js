import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-OA_9.js";
import a from "./module-yo_10.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    isSupersetOf: function (t) {
      return o(a, this, i(t));
    },
  },
);
