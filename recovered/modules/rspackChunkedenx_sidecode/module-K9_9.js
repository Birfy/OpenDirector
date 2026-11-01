import n from "./module-A_10.js";
import o from "./module-zQ_10.js";
import _i from "./module-yh_9.js";
const _i_remove = _i.remove;
n(
  {
    target: "Set",
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
