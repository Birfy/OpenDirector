import n from "./module-A.js";
import o from "./module-ui.js";
import i from "./module-F.js";
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
