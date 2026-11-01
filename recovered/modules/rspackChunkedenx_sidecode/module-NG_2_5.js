import n from "./module-A_6.js";
import i from "./module-ui_5.js";
import o from "./module-F_6.js";
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
