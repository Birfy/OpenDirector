import n from "g";
import i from "V2";
import { add } from "Do";
n(
  {
    target: "Set",
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
