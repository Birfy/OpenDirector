import n from "./module-A_5.js";
import i from "./module-ui_4.js";
import o from "./module-F_5.js";
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
