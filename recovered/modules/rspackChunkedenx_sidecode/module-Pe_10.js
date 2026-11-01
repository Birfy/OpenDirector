import n from "./module-A_11.js";
import _o from "./module-xY_11.js";
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
