import n from "g";
import i from "B5";
import { remove } from "A8";
n(
  {
    target: "WeakMap",
    proto: true,
    real: true,
    forced: true,
  },
  {
    deleteAll: function () {
      let t;
      const e = i(this);
      let r = true;
      for (let n = 0, o = arguments.length; n < o; n++) {
        t = remove(e, arguments[n]);
        r = r && t;
      }
      return !!r;
    },
  },
);
