import n from "./module-A_17.js";
import o from "./module-zQ_17.js";
import _i from "./module-yh_16.js";
const _i_add = _i.add;
n(
  {
    target: "Set",
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
