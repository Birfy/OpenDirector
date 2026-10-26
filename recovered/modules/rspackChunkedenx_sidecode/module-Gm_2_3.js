import n from "./module-A_4.js";
import i from "./module-O9_3.js";
import o from "./module-S9_3.js";
import s from "./module-wr_3.js";
import a from "./module-ip_2_3.js";
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
