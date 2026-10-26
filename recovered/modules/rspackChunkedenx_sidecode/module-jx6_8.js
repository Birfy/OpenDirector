import n from "./module-A_9.js";
import i from "./module-M_2_8.js";
import o from "./module-OA_8.js";
import s from "./module-Vt_2_8.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    intersection: function (t) {
      return i(s, this, o(t));
    },
  },
);
