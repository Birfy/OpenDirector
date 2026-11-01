import n from "./module-A_10.js";
import o from "./module-O9_9.js";
import i from "./module-S9_9.js";
import a from "./module-wr_9.js";
import _s from "./module-up_9.js";
const _s_pack = _s.pack;
const c = o(DataView.prototype.setUint16);
n(
  {
    target: "DataView",
    proto: true,
  },
  {
    setFloat16: function (t, e) {
      if (i(this) !== "DataView") {
        throw TypeError("Incorrect receiver");
      }
      const r = a(t);
      const n = _s_pack(+e, 10, 2);
      return c(
        this,
        r,
        (n[1] << 8) | n[0],
        arguments.length > 2 && arguments[2],
      );
    },
  },
);
