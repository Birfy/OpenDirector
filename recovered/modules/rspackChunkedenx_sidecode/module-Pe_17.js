import n from "./module-A_18.js";
import _o from "./module-xY_18.js";
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
