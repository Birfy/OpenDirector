import n from "./module-A.js";
import o from "./module-O9.js";
import i from "./module-S9.js";
import a from "./module-wr.js";
import s from "./module-ip_2.js";
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
