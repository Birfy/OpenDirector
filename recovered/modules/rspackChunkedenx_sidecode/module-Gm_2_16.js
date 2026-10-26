import n from "./module-A_17.js";
import o from "./module-O9_16.js";
import i from "./module-S9_16.js";
import a from "./module-wr_16.js";
import s from "./module-ip_2_16.js";
const c = o(DataView.prototype.setUint8);
n(
  {
    target: "DataView",
    proto: true,
    forced: true,
  },
  {
    setUint8Clamped: function (t, r) {
      if (i(this) !== "DataView") {
        throw TypeError("Incorrect receiver");
      }
      return c(this, a(t), s(r));
    },
  },
);
