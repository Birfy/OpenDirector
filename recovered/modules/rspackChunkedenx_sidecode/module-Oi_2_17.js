import n from "./module-A_18.js";
import _o from "./module-xY_18.js";
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
