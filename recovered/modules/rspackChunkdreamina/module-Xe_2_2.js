import n from "./module-g.js";
import o from "./module-uL_2.js";
import i from "./module-MR.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    with: function (e, t) {
      return o(i(this), Array, e, t);
    },
  },
);
