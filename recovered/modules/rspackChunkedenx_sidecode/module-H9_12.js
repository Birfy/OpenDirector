import $ from "./module-A_13.js";
import _tt from "./module-xY_2_12.js";
const _tt_toArray = _tt.toArray;
$(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    toArray: function () {
      return _tt_toArray(this, undefined, []);
    },
  },
);
