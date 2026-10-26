import n from "./module-A_12.js";
import _o from "./module-xY_12.js";
const _o_find = _o.find;
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    find: function (r) {
      return _o_find(this, r);
    },
  },
);
