import $ from "./module-A_13.js";
import _tt from "./module-xY_2_12.js";
const _tt_forEach = _tt.forEach;
$(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    forEach: function (J) {
      return _tt_forEach(this, J);
    },
  },
);
