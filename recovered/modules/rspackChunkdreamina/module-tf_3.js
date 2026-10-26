import n from "g";
import { find } from "kf";
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    find: function (t) {
      return find(this, t);
    },
  },
);
