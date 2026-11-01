import n from "./module-A_5.js";
import i from "./module-M_2_4.js";
import o from "./module-OA_4.js";
import s from "./module-yo_5.js";
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
