import n from "./module-A_20.js";
import o from "./module-zQ_20.js";
import _i from "./module-yh_19.js";
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
      let r;
      const t = o(this);
      let e = true;
      for (let n = 0, a = arguments.length; n < a; n++) {
        r = _i_remove(t, arguments[n]);
        e = e && r;
      }
      return !!e;
    },
  },
);
