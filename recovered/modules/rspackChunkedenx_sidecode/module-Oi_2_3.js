import n from "./module-A_4.js";
import _i from "./module-xY_4.js";
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
