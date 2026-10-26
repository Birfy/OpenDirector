import n from "./module-A.js";
import o from "./module-O9.js";
import _i from "./module-up.js";
const _i_unpack = _i.unpack;
const a = o(DataView.prototype.getUint16);
n(
  {
    target: "DataView",
    proto: true,
  },
  {
    getFloat16: function (t) {
      const r = a(this, t, arguments.length > 1 && arguments[1]);
      return _i_unpack([255 & r, (r >> 8) & 255], 10);
    },
  },
);
