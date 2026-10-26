import n from "./module-A.js";
import o from "./module-M_2.js";
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
