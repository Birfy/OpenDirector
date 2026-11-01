import n from "./module-A_21.js";
import o from "./module-M_2_20.js";
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
