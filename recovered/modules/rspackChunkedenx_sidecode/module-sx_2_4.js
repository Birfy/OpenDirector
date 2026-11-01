import n from "./module-A_5.js";
import i from "./module-M_2_4.js";
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
