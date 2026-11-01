import n from "./module-A_6.js";
import _i from "./module-xY_6.js";
const _i_some = _i.some;
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    some: function (t) {
      return _i_some(this, t);
    },
  },
);
