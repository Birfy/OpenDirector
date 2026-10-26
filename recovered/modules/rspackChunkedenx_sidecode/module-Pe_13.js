import n from "./module-A_14.js";
import _o from "./module-xY_14.js";
const _o_every = _o.every;
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    every: function (r) {
      return _o_every(this, r);
    },
  },
);
