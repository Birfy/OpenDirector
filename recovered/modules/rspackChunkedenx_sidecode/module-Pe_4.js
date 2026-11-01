import n from "./module-A_5.js";
import _i from "./module-xY_5.js";
const _i_every = _i.every;
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    every: function (t) {
      return _i_every(this, t);
    },
  },
);
