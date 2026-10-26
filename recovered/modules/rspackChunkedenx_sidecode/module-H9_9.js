import n from "./module-A_10.js";
import _o from "./module-xY_10.js";
const _o_toArray = _o.toArray;
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    toArray: function () {
      return _o_toArray(this, undefined, []);
    },
  },
);
