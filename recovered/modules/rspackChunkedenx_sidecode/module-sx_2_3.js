import n from "./module-A_4.js";
import i from "./module-M_2_3.js";
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
