import $ from "./module-A_13.js";
import tt from "./module-O9_12.js";
import te from "./module-S9_12.js";
import tr from "./module-wr_12.js";
import tn from "./module-ip_2_12.js";
const to = tt(DataView.prototype.setUint8);
$(
  {
    target: "DataView",
    proto: true,
    forced: true,
  },
  {
    setUint8Clamped: function (J, Z) {
      if (te(this) !== "DataView") {
        throw TypeError("Incorrect receiver");
      }
      return to(this, tr(J), tn(Z));
    },
  },
);
