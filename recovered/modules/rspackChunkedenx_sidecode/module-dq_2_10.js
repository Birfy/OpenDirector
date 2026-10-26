import n from "./module-A_11.js";
import o from "./module-ot_11.js";
import _i from "./module-e7_10.js";
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
