import n from "./module-A_15.js";
import o from "./module-eqX_14.js";
import _i from "./module-Rv_14.js";
const _i_add = _i.add;
n(
  {
    target: "WeakSet",
    proto: true,
    real: true,
    forced: true,
  },
  {
    addAll: function () {
      const t = o(this);
      for (let r = 0, e = arguments.length; r < e; r++) {
        _i_add(t, arguments[r]);
      }
      return t;
    },
  },
);
