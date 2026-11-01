import n from "./module-A_17.js";
import o from "./module-O9_16.js";
import i from "./module-S9_16.js";
import a from "./module-wr_16.js";
import _s from "./module-up_16.js";
const _s_pack = _s.pack;
const c = o(DataView.prototype.setUint16);
n(
  {
    target: "DataView",
    proto: true,
  },
  {
    setFloat16: function (t, r) {
      if (i(this) !== "DataView") {
        throw TypeError("Incorrect receiver");
      }
      const e = a(t);
      const n = _s_pack(+r, 10, 2);
      return c(
        this,
        e,
        (n[1] << 8) | n[0],
        arguments.length > 2 && arguments[2],
      );
    },
  },
);
