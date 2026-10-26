import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-OA_6.js";
import i from "./module-PW_6.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    difference: function (t) {
      return o(i, this, a(t));
    },
  },
);
