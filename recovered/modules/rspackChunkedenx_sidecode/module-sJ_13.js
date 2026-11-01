import n from "./module-A_14.js";
import o from "./module-O9_13.js";
import _i from "./module-up_13.js";
const _i_unpack = _i.unpack;
const a = o(DataView.prototype.getUint16);
n(
  {
    target: "DataView",
    proto: true,
  },
  {
    getFloat16: function (r) {
      const t = a(this, r, arguments.length > 1 && arguments[1]);
      return _i_unpack([255 & t, (t >> 8) & 255], 10);
    },
  },
);
