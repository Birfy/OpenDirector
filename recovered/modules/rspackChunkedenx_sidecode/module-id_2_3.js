import n from "./module-A_4.js";
import i from "./module-M_2_3.js";
import o from "./module-OA_3.js";
import s from "./module-yo_4.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    isSupersetOf: function (t) {
      return i(s, this, o(t));
    },
  },
);
