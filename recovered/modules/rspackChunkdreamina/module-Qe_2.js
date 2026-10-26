import n from "g";
import i from "Gf";
import { add } from "mX";
n(
  {
    target: "WeakSet",
    proto: true,
    real: true,
    forced: true,
  },
  {
    addAll: function () {
      const t = i(this);
      for (let e = 0, r = arguments.length; e < r; e++) {
        add(t, arguments[e]);
      }
      return t;
    },
  },
);
