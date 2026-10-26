import n from "./module-A_19.js";
import o from "./module-ui_18.js";
import i from "./module-F_19.js";
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
