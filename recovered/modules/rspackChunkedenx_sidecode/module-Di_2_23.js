import n from "./module-A_24.js";
import _o from "./module-xY_24.js";
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
