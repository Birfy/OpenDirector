import n from "g";
import i from "o";
import { unpack } from "ek";
const o = i(DataView.prototype.getUint16);
n(
  {
    target: "DataView",
    proto: true,
  },
  {
    getFloat16: function (t) {
      const e = o(this, t, arguments.length > 1 && arguments[1]);
      return unpack([255 & e, (e >> 8) & 255], 10);
    },
  },
);
