import n from "./module-A_6.js";
import _i from "./module-xY_6.js";
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
