import n from "./module-A_17.js";
import o from "./module-ui_16.js";
import i from "./module-F_17.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    with: function (t, r) {
      return o(i(this), Array, t, r);
    },
  },
);
