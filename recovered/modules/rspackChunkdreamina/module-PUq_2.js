import n from "g";
import { toArray } from "kf";
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    toArray: function () {
      return toArray(this, undefined, []);
    },
  },
);
