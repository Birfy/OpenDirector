import n from "./module-A_18.js";
import o from "./module-ui_17.js";
import i from "./module-F_18.js";
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
