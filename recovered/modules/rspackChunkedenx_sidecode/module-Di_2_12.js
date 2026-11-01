import $ from "./module-A_13.js";
import _tt from "./module-xY_2_12.js";
const _tt_some = _tt.some;
$(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    some: function (J) {
      return _tt_some(this, J);
    },
  },
);
