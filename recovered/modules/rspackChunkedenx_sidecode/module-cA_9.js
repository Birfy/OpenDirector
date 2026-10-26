import n from "./module-A_10.js";
import o from "./module-zQ_10.js";
import _i from "./module-yh_9.js";
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
      for (let e = 0, r = arguments.length; e < r; e++) {
        _i_add(t, arguments[e]);
      }
      return t;
    },
  },
);
