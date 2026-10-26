import n from "./module-A_8.js";
import o from "./module-ui_7.js";
import i from "./module-F_8.js";
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
