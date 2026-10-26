import n from "./module-A_17.js";
const o = require("./module-O9_16.js")(DataView.prototype.getUint8);
n(
  {
    target: "DataView",
    proto: true,
    forced: true,
  },
  {
    getUint8Clamped: function (t) {
      return o(this, t);
    },
  },
);
