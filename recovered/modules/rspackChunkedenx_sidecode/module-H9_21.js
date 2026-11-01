import n from "./module-A_22.js";
import _i from "./module-xY_22.js";
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
