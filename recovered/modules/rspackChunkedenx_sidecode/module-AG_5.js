import n from "./module-A_6.js";
import i from "./module-eqX_5.js";
import _o from "./module-Rv_5.js";
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
