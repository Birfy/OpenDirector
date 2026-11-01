import n from "g";
import i from "vP";
import { remove } from "UF";
n(
  {
    target: "Map",
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
