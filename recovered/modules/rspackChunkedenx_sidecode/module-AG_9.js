import n from "./module-A_10.js";
import o from "./module-eqX_9.js";
import _i from "./module-Rv_9.js";
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
      for (let e = 0, r = arguments.length; e < r; e++) {
        _i_add(t, arguments[e]);
      }
      return t;
    },
  },
);
