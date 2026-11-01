import n from "./module-A_6.js";
import i from "./module-M_2_5.js";
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
