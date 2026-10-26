import n from "g";
import { some } from "kf";
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    some: function (t) {
      return some(this, t);
    },
  },
);
