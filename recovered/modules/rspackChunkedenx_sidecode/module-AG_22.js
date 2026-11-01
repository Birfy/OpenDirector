import n from "./module-A_23.js";
import i from "./module-eqX_22.js";
import _o from "./module-Rv_22.js";
const _o_add = _o.add;
n(
  {
    target: "WeakSet",
    proto: true,
    real: true,
    forced: true,
  },
  {
    addAll: function () {
      const t = i(this);
      for (let r = 0, e = arguments.length; r < e; r++) {
        _o_add(t, arguments[r]);
      }
      return t;
    },
  },
);
