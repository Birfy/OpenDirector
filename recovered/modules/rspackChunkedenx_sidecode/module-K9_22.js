import n from "./module-A_23.js";
import i from "./module-zQ_23.js";
import _o from "./module-yh_22.js";
const _o_remove = _o.remove;
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
