import n from "./module-A_19.js";
import _o from "./module-xY_19.js";
const _o_forEach = _o.forEach;
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    forEach: function (r) {
      return _o_forEach(this, r);
    },
  },
);
