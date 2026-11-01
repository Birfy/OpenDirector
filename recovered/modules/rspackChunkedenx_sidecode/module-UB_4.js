import n from "./module-A_5.js";
import i from "./module-O9_4.js";
import o from "./module-S9_4.js";
import s from "./module-wr_4.js";
import _a from "./module-up_4.js";
const _a_pack = _a.pack;
const c = i(DataView.prototype.setUint16);
n(
  {
    target: "DataView",
    proto: true,
  },
  {
    setFloat16: function (t, r) {
      if (o(this) !== "DataView") {
        throw TypeError("Incorrect receiver");
      }
      const e = s(t);
      const n = _a_pack(+r, 10, 2);
      return c(
        this,
        e,
        (n[1] << 8) | n[0],
        arguments.length > 2 && arguments[2],
      );
    },
  },
);
