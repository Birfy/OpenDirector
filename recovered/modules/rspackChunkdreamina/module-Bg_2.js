import n from "g";
import i from "o";
import a from "xE";
import o from "Xp";
import s from "ob";
const c = i(DataView.prototype.setUint8);
n(
  {
    target: "DataView",
    proto: true,
    forced: true,
  },
  {
    setUint8Clamped: function (t, e) {
      if (a(this) !== "DataView") {
        throw TypeError("Incorrect receiver");
      }
      return c(this, o(t), s(e));
    },
  },
);
