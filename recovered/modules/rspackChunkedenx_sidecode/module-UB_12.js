import $ from "./module-A_13.js";
import tt from "./module-O9_12.js";
import te from "./module-S9_12.js";
import tr from "./module-wr_12.js";
import _tn from "./module-up_12.js";
const _tn_pack = _tn.pack;
const to = tt(DataView.prototype.setUint16);
$(
  {
    target: "DataView",
    proto: true,
  },
  {
    setFloat16: function (J, Z) {
      if (te(this) !== "DataView") {
        throw TypeError("Incorrect receiver");
      }
      const Q = tr(J);
      const $ = _tn_pack(+Z, 10, 2);
      return to(
        this,
        Q,
        ($[1] << 8) | $[0],
        arguments.length > 2 && arguments[2],
      );
    },
  },
);
