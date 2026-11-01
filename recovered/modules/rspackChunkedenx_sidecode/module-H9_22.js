import n from "./module-A_23.js";
import _i from "./module-xY_23.js";
const _i_toArray = _i.toArray;
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    toArray: function () {
      return _i_toArray(this, undefined, []);
    },
  },
);
