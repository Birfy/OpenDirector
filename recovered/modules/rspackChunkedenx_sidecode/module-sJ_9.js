import n from "./module-A_10.js";
import o from "./module-O9_9.js";
import _i from "./module-up_9.js";
const _i_unpack = _i.unpack;
const a = o(DataView.prototype.getUint16);
n(
  {
    target: "DataView",
    proto: true,
  },
  {
    getFloat16: function (t) {
      const e = a(this, t, arguments.length > 1 && arguments[1]);
      return _i_unpack([255 & e, (e >> 8) & 255], 10);
    },
  },
);
