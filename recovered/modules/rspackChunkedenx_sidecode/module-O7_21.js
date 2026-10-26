import n from "./module-A_22.js";
import i from "./module-p8_21.js";
import _o from "./module-xUg_21.js";
const _o_remove = _o.remove;
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
      const r = i(this);
      let e = true;
      for (let n = 0, s = arguments.length; n < s; n++) {
        t = _o_remove(r, arguments[n]);
        e = e && t;
      }
      return !!e;
    },
  },
);
