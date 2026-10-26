import n from "./module-A_22.js";
import i from "./module-O9_21.js";
import o from "./module-S9_21.js";
import s from "./module-wr_21.js";
import a from "./module-ip_2_21.js";
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
