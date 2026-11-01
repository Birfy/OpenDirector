import n from "./module-A_12.js";
import o from "./module-M_2_11.js";
n(
  {
    target: "URL",
    proto: true,
    enumerable: true,
  },
  {
    toJSON: function () {
      return o(URL.prototype.toString, this);
    },
  },
);
