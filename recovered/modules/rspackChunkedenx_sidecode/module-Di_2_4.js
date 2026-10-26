import n from "./module-A_5.js";
import _i from "./module-xY_5.js";
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
