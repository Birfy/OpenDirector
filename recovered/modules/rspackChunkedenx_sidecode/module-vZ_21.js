import n from "./module-A_22.js";
import _i from "./module-xY_22.js";
const _i_forEach = _i.forEach;
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    forEach: function (t) {
      return _i_forEach(this, t);
    },
  },
);
