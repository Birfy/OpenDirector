import n from "./module-A_8.js";
import _o from "./module-xY_8.js";
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
