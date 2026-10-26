import n from "./module-A_22.js";
import i from "./module-M_2_21.js";
n(
  {
    target: "URL",
    proto: true,
    enumerable: true,
  },
  {
    toJSON: function () {
      return i(URL.prototype.toString, this);
    },
  },
);
