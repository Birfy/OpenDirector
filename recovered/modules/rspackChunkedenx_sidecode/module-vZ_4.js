import n from "./module-A_5.js";
import _i from "./module-xY_5.js";
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
