import n from "./module-A_12.js";
import o from "./module-ui_11.js";
import i from "./module-F_12.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    with: function (r, t) {
      return o(i(this), Array, r, t);
    },
  },
);
