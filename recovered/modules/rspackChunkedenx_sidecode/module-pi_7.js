import n from "./module-A_8.js";
import o from "./module-eqX_7.js";
import _i from "./module-Rv_7.js";
const _i_remove = _i.remove;
n(
  {
    target: "WeakSet",
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
