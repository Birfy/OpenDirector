import n from "./module-A.js";
import o from "./module-M_2.js";
import i from "./module-OA.js";
import a from "./module-XL_2.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    isDisjointFrom: function (t) {
      return o(a, this, i(t));
    },
  },
);
