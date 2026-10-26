import n from "./module-A_19.js";
import o from "./module-eqX_18.js";
import _i from "./module-Rv_18.js";
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
      const r = o(this);
      for (let t = 0, e = arguments.length; t < e; t++) {
        _i_add(r, arguments[t]);
      }
      return r;
    },
  },
);
