import n from "./module-A_7.js";
import o from "./module-O9_6.js";
import a from "./module-S9_6.js";
import i from "./module-wr_6.js";
import s from "./module-ip_2_6.js";
const u = o(DataView.prototype.setUint8);
n(
  {
    target: "DataView",
    proto: true,
    forced: true,
  },
  {
    setUint8Clamped: function (t, r) {
      if (a(this) !== "DataView") {
        throw TypeError("Incorrect receiver");
      }
      return u(this, i(t), s(r));
    },
  },
);
