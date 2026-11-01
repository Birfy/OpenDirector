import n from "./module-A_9.js";
import i from "./module-M_2_8.js";
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
