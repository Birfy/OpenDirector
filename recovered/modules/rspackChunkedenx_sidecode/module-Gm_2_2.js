import n from "./module-A_3.js";
import i from "./module-O9_2.js";
import o from "./module-S9_2.js";
import s from "./module-wr_2.js";
import a from "./module-ip_2_2.js";
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
