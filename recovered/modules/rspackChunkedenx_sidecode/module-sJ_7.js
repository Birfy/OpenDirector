import n from "./module-A_8.js";
import o from "./module-O9_7.js";
import _i from "./module-up_7.js";
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
