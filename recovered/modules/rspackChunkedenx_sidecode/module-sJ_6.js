import n from "./module-A_7.js";
import o from "./module-O9_6.js";
import _a from "./module-up_6.js";
const _a_unpack = _a.unpack;
const i = o(DataView.prototype.getUint16);
n(
  {
    target: "DataView",
    proto: true,
  },
  {
    getFloat16: function (t) {
      const r = i(this, t, arguments.length > 1 && arguments[1]);
      return _a_unpack([255 & r, (r >> 8) & 255], 10);
    },
  },
);
