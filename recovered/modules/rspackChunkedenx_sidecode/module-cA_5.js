import n from "./module-A_6.js";
import i from "./module-zQ_6.js";
import _o from "./module-yh_5.js";
const _o_add = _o.add;
n(
  {
    target: "Set",
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
