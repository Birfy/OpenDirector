import n from "./module-A_20.js";
import _o from "./module-xY_20.js";
const _o_some = _o.some;
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    some: function (r) {
      return _o_some(this, r);
    },
  },
);
