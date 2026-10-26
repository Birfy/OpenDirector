import $ from "./module-A_13.js";
import _tt from "./module-xY_2_12.js";
const _tt_find = _tt.find;
$(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    find: function (J) {
      return _tt_find(this, J);
    },
  },
);
