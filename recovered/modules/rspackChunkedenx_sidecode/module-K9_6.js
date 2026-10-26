import n from "./module-A_7.js";
import o from "./module-zQ_7.js";
import _a from "./module-yh_6.js";
const _a_remove = _a.remove;
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
      const r = o(this);
      let e = true;
      for (let n = 0, i = arguments.length; n < i; n++) {
        t = _a_remove(r, arguments[n]);
        e = e && t;
      }
      return !!e;
    },
  },
);
