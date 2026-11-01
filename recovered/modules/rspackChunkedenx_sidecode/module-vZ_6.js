import n from "./module-A_7.js";
import _o from "./module-xY_7.js";
const _o_forEach = _o.forEach;
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    forEach: function (t) {
      return _o_forEach(this, t);
    },
  },
);
