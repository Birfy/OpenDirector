import n from "./module-A_11.js";
import o from "./module-O9_10.js";
import i from "./module-S9_10.js";
import a from "./module-wr_10.js";
import s from "./module-ip_2_10.js";
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
