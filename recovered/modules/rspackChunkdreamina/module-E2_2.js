import n from "g";
import { forEach } from "kf";
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    forEach: function (t) {
      return forEach(this, t);
    },
  },
);
