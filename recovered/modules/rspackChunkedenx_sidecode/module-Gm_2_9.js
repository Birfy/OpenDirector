import n from "./module-A_10.js";
import o from "./module-O9_9.js";
import i from "./module-S9_9.js";
import a from "./module-wr_9.js";
import s from "./module-ip_2_9.js";
const c = o(DataView.prototype.setUint8);
n(
  {
    target: "DataView",
    proto: true,
    forced: true,
  },
  {
    setUint8Clamped: function (t, e) {
      if (i(this) !== "DataView") {
        throw TypeError("Incorrect receiver");
      }
      return c(this, a(t), s(e));
    },
  },
);
