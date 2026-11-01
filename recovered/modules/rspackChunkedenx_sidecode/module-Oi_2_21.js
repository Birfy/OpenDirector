import n from "./module-A_22.js";
import _i from "./module-xY_22.js";
const _i_find = _i.find;
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    find: function (t) {
      return _i_find(this, t);
    },
  },
);
