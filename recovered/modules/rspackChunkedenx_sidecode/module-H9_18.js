import n from "./module-A_19.js";
import _o from "./module-xY_19.js";
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
