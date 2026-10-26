import $ from "./module-A_13.js";
const tt = require("./module-O9_12.js")(DataView.prototype.getUint8);
$(
  {
    target: "DataView",
    proto: true,
    forced: true,
  },
  {
    getUint8Clamped: function (J) {
      return tt(this, J);
    },
  },
);
