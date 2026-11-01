import n from "./module-A_7.js";
import o from "./module-eqX_6.js";
import _a from "./module-Rv_6.js";
const _a_add = _a.add;
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
        _a_add(t, arguments[r]);
      }
      return t;
    },
  },
);
