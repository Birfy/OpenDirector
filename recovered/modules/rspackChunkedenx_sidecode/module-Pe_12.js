import $ from "./module-A_13.js";
import _tt from "./module-xY_2_12.js";
const _tt_every = _tt.every;
$(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    every: function (J) {
      return _tt_every(this, J);
    },
  },
);
