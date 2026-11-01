import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
$(
  {
    target: "URL",
    proto: true,
    enumerable: true,
  },
  {
    toJSON: function () {
      return tt(URL.prototype.toString, this);
    },
  },
);
