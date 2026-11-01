import n from "./module-A_15.js";
import o from "./module-p8_14.js";
import _i from "./module-xUg_14.js";
const _i_remove = _i.remove;
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
      const r = o(this);
      let e = true;
      for (let n = 0, a = arguments.length; n < a; n++) {
        t = _i_remove(r, arguments[n]);
        e = e && t;
      }
      return !!e;
    },
  },
);
