import n from "./module-A_5.js";
const i = require("./module-O9_4.js")(DataView.prototype.getUint8);
n(
  {
    target: "DataView",
    proto: true,
    forced: true,
  },
  {
    getUint8Clamped: function (t) {
      return i(this, t);
    },
  },
);
