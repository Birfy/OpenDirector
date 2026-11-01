import n from "./module-A.js";
import _o from "./module-xY.js";
const _o_every = _o.every;
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    every: function (t) {
      return _o_every(this, t);
    },
  },
);
