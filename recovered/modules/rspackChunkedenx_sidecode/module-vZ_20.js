import n from "./module-A_21.js";
import _o from "./module-xY_21.js";
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
