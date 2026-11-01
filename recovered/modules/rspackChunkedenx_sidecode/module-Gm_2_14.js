import n from "./module-A_15.js";
import o from "./module-O9_14.js";
import i from "./module-S9_14.js";
import a from "./module-wr_14.js";
import s from "./module-ip_2_14.js";
const u = o(DataView.prototype.setUint8);
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
      return u(this, a(t), s(r));
    },
  },
);
