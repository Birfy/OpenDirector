import n from "./module-A_20.js";
const o = require("./module-O9_19.js")(DataView.prototype.getUint8);
n(
  {
    target: "DataView",
    proto: true,
    forced: true,
  },
  {
    getUint8Clamped: function (r) {
      return o(this, r);
    },
  },
);
