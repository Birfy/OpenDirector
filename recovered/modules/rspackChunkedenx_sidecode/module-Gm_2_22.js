import n from "./module-A_23.js";
import i from "./module-O9_22.js";
import o from "./module-S9_22.js";
import s from "./module-wr_22.js";
import a from "./module-ip_2_22.js";
const c = i(DataView.prototype.setUint8);
n(
  {
    target: "DataView",
    proto: true,
    forced: true,
  },
  {
    setUint8Clamped: function (t, r) {
      if (o(this) !== "DataView") {
        throw TypeError("Incorrect receiver");
      }
      return c(this, s(t), a(r));
    },
  },
);
