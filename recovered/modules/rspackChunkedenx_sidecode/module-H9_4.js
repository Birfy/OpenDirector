import n from "./module-A_5.js";
import _i from "./module-xY_5.js";
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
