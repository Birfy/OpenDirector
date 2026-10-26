import n from "./module-A_16.js";
import o from "./module-O9_15.js";
import i from "./module-S9_15.js";
import a from "./module-wr_15.js";
import _s from "./module-up_15.js";
const _s_pack = _s.pack;
const c = o(DataView.prototype.setUint16);
n(
  {
    target: "DataView",
    proto: true,
  },
  {
    setFloat16: function (r, t) {
      if (i(this) !== "DataView") {
        throw TypeError("Incorrect receiver");
      }
      const e = a(r);
      const n = _s_pack(+t, 10, 2);
      return c(
        this,
        e,
        (n[1] << 8) | n[0],
        arguments.length > 2 && arguments[2],
      );
    },
  },
);
