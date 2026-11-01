import n from "./module-A_11.js";
import o from "./module-M_2_10.js";
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
