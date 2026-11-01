import n from "./module-A_21.js";
import _o from "./module-xY_21.js";
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
