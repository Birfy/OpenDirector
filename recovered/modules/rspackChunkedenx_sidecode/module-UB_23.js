import n from "./module-A_24.js";
import o from "./module-O9_23.js";
import i from "./module-S9_23.js";
import a from "./module-wr_23.js";
import _s from "./module-up_23.js";
const _s_pack = _s.pack;
const u = o(DataView.prototype.setUint16);
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
      return u(
        this,
        e,
        (n[1] << 8) | n[0],
        arguments.length > 2 && arguments[2],
      );
    },
  },
);
