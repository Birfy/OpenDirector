import n from "g";
import i from "o";
import a from "xE";
import o from "Xp";
import { pack } from "ek";
const c = i(DataView.prototype.setUint16);
n(
  {
    target: "DataView",
    proto: true,
  },
  {
    setFloat16: function (t, e) {
      if (a(this) !== "DataView") {
        throw TypeError("Incorrect receiver");
      }
      const r = o(t);
      const n = pack(+e, 10, 2);
      return c(
        this,
        r,
        (n[1] << 8) | n[0],
        arguments.length > 2 && arguments[2],
      );
    },
  },
);
