import n from "./module-A_4.js";
import i from "./module-ui_3.js";
import o from "./module-F_4.js";
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
