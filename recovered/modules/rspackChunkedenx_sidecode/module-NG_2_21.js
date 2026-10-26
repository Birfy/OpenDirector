import n from "./module-A_22.js";
import i from "./module-ui_21.js";
import o from "./module-F_22.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    with: function (t, r) {
      return i(o(this), Array, t, r);
    },
  },
);
