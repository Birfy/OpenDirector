import n from "g";
import { every } from "kf";
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    every: function (t) {
      return every(this, t);
    },
  },
);
