import n from "./module-A_10.js";
import o from "./module-ot_10.js";
import _i from "./module-e7_9.js";
const _i_remove = _i.remove;
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
      const e = o(this);
      let r = true;
      for (let n = 0, a = arguments.length; n < a; n++) {
        t = _i_remove(e, arguments[n]);
        r = r && t;
      }
      return !!r;
    },
  },
);
