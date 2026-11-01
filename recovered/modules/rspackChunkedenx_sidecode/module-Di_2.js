import n from "./module-A.js";
import _o from "./module-xY.js";
const _o_some = _o.some;
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    some: function (t) {
      return _o_some(this, t);
    },
  },
);
