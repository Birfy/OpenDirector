import n from "./module-A_16.js";
import o from "./module-O9_15.js";
import i from "./module-S9_15.js";
import a from "./module-wr_15.js";
import s from "./module-ip_2_15.js";
const c = o(DataView.prototype.setUint8);
n(
  {
    target: "DataView",
    proto: true,
    forced: true,
  },
  {
    setUint8Clamped: function (r, t) {
      if (i(this) !== "DataView") {
        throw TypeError("Incorrect receiver");
      }
      return c(this, a(r), s(t));
    },
  },
);
