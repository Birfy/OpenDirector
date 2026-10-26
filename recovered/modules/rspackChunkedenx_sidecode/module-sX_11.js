import n from "./module-A_11.js";
import o from "./module-M_2_10.js";
import i from "./module-OA_10.js";
import a from "./module-PW_10.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    difference: function (t) {
      return o(a, this, i(t));
    },
  },
);
