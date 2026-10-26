import n from "./module-A_3.js";
import i from "./module-O9_2.js";
import _o from "./module-up_2.js";
const _o_unpack = _o.unpack;
const s = i(DataView.prototype.getUint16);
n(
  {
    target: "DataView",
    proto: true,
  },
  {
    getFloat16: function (t) {
      const r = s(this, t, arguments.length > 1 && arguments[1]);
      return _o_unpack([255 & r, (r >> 8) & 255], 10);
    },
  },
);
