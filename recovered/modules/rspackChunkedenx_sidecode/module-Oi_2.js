import n from "./module-A.js";
import _o from "./module-xY.js";
const _o_find = _o.find;
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    find: function (t) {
      return _o_find(this, t);
    },
  },
);
