import $ from "./module-A_13.js";
import tt from "./module-O9_12.js";
import _te from "./module-up_12.js";
const _te_unpack = _te.unpack;
const tr = tt(DataView.prototype.getUint16);
$(
  {
    target: "DataView",
    proto: true,
  },
  {
    getFloat16: function (J) {
      const Z = tr(this, J, arguments.length > 1 && arguments[1]);
      return _te_unpack([255 & Z, (Z >> 8) & 255], 10);
    },
  },
);
