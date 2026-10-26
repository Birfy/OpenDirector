import n from "./module-A_8.js";
import o from "./module-zQ_8.js";
import _i from "./module-yh_7.js";
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
      const r = o(this);
      for (let t = 0, e = arguments.length; t < e; t++) {
        _i_add(r, arguments[t]);
      }
      return r;
    },
  },
);
