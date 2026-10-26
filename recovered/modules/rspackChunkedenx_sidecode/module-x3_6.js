import n from "./module-A_7.js";
const o = require("./module-O9_6.js")(DataView.prototype.getUint8);
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
